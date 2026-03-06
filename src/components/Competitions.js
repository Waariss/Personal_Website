import React, { useMemo, useState } from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { FaExternalLinkAlt, FaTrophy, FaUser, FaUsers } from 'react-icons/fa';
import '../App.css';
import { COMPETITIONS } from '../data';
import { getAchievementBadges, parseCompetitionDateValue, parseRankMetric } from '../utils';

const PREVIEW_COUNT = 6;

const VIEW_MODES = [
  { id: 'all', label: 'All' },
  { id: 'team', label: 'Team' },
  { id: 'individual', label: 'Individual' },
];

const SORT_OPTIONS = [
  { id: 'best-rank', label: 'Best rank' },
  { id: 'best-percentile', label: 'Best percentile' },
  { id: 'newest', label: 'Newest' },
  { id: 'highest-points', label: 'Highest points' },
];

const getBestMetric = (teamMetric, individualMetric) => {
  const metrics = [teamMetric, individualMetric].filter((metric) => metric.rank);

  if (metrics.length === 0) {
    return null;
  }

  return metrics.sort((a, b) => {
    const ratioA = a.rank && a.total ? a.rank / a.total : Number.POSITIVE_INFINITY;
    const ratioB = b.rank && b.total ? b.rank / b.total : Number.POSITIVE_INFINITY;

    if (ratioA !== ratioB) {
      return ratioA - ratioB;
    }

    return (a.rank || Number.POSITIVE_INFINITY) - (b.rank || Number.POSITIVE_INFINITY);
  })[0];
};

const getTopSignal = (badges) => badges.find((badge) => /^Top /.test(badge)) || badges[0] || 'Result';

const sortRows = (rows, sortBy) => {
  const sorted = [...rows];

  if (sortBy === 'newest') {
    return sorted.sort((a, b) => b.dateValue - a.dateValue);
  }

  if (sortBy === 'highest-points') {
    return sorted.sort((a, b) => b.maxPoints - a.maxPoints);
  }

  if (sortBy === 'best-percentile') {
    return sorted.sort((a, b) => {
      const ratioA = a.bestMetric?.rank && a.bestMetric?.total
        ? a.bestMetric.rank / a.bestMetric.total
        : Number.POSITIVE_INFINITY;
      const ratioB = b.bestMetric?.rank && b.bestMetric?.total
        ? b.bestMetric.rank / b.bestMetric.total
        : Number.POSITIVE_INFINITY;

      if (ratioA !== ratioB) {
        return ratioA - ratioB;
      }

      return b.dateValue - a.dateValue;
    });
  }

  return sorted.sort((a, b) => {
    const rankA = a.bestMetric?.rank
      ? a.bestMetric.rank
      : Number.POSITIVE_INFINITY;
    const rankB = b.bestMetric?.rank
      ? b.bestMetric.rank
      : Number.POSITIVE_INFINITY;

    if (rankA !== rankB) {
      return rankA - rankB;
    }

    return b.dateValue - a.dateValue;
  });
};

const MetricBlock = ({ icon, title, metric }) => {
  if (!metric.rank) {
    return null;
  }

  return (
    <div className="competition-metric-block">
      <div className="competition-metric-title">
        {icon}
        <span>{title}</span>
      </div>
      <div className="competition-metric-rank">{metric.rankDisplay}</div>
      {metric.percentileLabel && (
        <div className="competition-metric-percentile">{metric.percentileLabel}</div>
      )}
      <div className="competition-metric-points">{metric.pointsDisplay}</div>
    </div>
  );
};

const Competitions = () => {
  const [showAllCompetitions, setShowAllCompetitions] = useState(false);
  const [viewMode, setViewMode] = useState('all');
  const [sortBy, setSortBy] = useState('best-rank');
  const [searchQuery, setSearchQuery] = useState('');

  const enrichedRows = useMemo(
    () => COMPETITIONS.map((competition) => {
      const teamMetric = parseRankMetric(competition.teamRank, competition.teamScore, 'team');
      const individualMetric = parseRankMetric(competition.individualRank, competition.individualScore, 'individual');
      const bestMetric = getBestMetric(teamMetric, individualMetric);
      const badges = getAchievementBadges({
        rank: bestMetric?.rank,
        total: bestMetric?.total,
        title: competition.title,
      });

      return {
        ...competition,
        teamMetric,
        individualMetric,
        bestMetric,
        topSignal: getTopSignal(badges),
        badges,
        dateValue: parseCompetitionDateValue(competition.date),
        maxPoints: Math.max(teamMetric.pointsValue || 0, individualMetric.pointsValue || 0),
      };
    }),
    []
  );

  const filteredCompetitions = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filtered = enrichedRows.filter((competition) => {
      const matchesSearch = normalizedQuery.length === 0
        || competition.title.toLowerCase().includes(normalizedQuery);
      const matchesView = viewMode === 'all'
        || (viewMode === 'team' && competition.teamMetric.rank)
        || (viewMode === 'individual' && competition.individualMetric.rank);

      return matchesSearch && matchesView;
    });

    return sortRows(filtered, sortBy);
  }, [enrichedRows, searchQuery, sortBy, viewMode]);

  const displayedCompetitions = showAllCompetitions
    ? filteredCompetitions
    : filteredCompetitions.slice(0, PREVIEW_COUNT);

  return (
    <section id="competitions" className="my-5 competition-themed-section">
      <h2 className="mb-4 text-center title-enhanced competition-themed-title">Competitions</h2>

      <div className="competition-controls">
        <div className="competition-filter-group" role="tablist" aria-label="Competition view mode">
          {VIEW_MODES.map((mode) => (
            <button
              key={mode.id}
              type="button"
              className={`competition-filter-btn ${viewMode === mode.id ? 'active' : ''}`}
              onClick={() => setViewMode(mode.id)}
            >
              {mode.label}
            </button>
          ))}
        </div>

        <div className="competition-control-inputs">
          <input
            type="search"
            className="competition-search-input"
            placeholder="Search competition..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            aria-label="Search competitions by event name"
          />
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="competition-sort-select"
            aria-label="Sort competitions"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Row className="g-4">
        {displayedCompetitions.map((competition) => (
          <Col key={`${competition.title}-${competition.date}`} xs={12} md={6} lg={4}>
            <a
              href={competition.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="competition-premium-link"
            >
              <Card className="competition-premium-card h-100">
                <Card.Body className="competition-premium-body">
                  <div className="competition-card-header">
                    <p className="competition-date">{competition.date}</p>
                    <h5 className="competition-title">{competition.title}</h5>
                  </div>

                  <div className="competition-hero">
                    <div className="competition-hero-title">
                      <FaTrophy aria-hidden="true" focusable="false" />
                      <span>{competition.topSignal}</span>
                    </div>
                    {competition.bestMetric ? (
                      <>
                        <div className="competition-hero-rank">{competition.bestMetric.rankDisplay}</div>
                        {competition.bestMetric.percentileLabel && (
                          <div className="competition-hero-percentile">
                            {competition.bestMetric.percentileLabel}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="competition-hero-rank competition-hero-rank-fallback">Result available</div>
                    )}
                  </div>

                  <div className="competition-achievement-row">
                    {competition.badges.length > 0 ? (
                      competition.badges.map((badge) => (
                        <Badge key={`${competition.title}-${badge}`} className="competition-achievement-badge">
                          {badge}
                        </Badge>
                      ))
                    ) : (
                      <Badge className="competition-achievement-badge competition-achievement-neutral">
                        Participation
                      </Badge>
                    )}
                  </div>

                  <div className="competition-metric-grid">
                    <MetricBlock
                      title="Team"
                      metric={competition.teamMetric}
                      icon={<FaUsers aria-hidden="true" focusable="false" />}
                    />
                    <MetricBlock
                      title="Individual"
                      metric={competition.individualMetric}
                      icon={<FaUser aria-hidden="true" focusable="false" />}
                    />
                  </div>

                  <div className="competition-card-footer">
                    <span className="competition-proof-link">
                      View proof <FaExternalLinkAlt className="ms-1" aria-hidden="true" focusable="false" />
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      {filteredCompetitions.length === 0 && (
        <p className="competition-empty-state text-center mt-4 mb-0">
          No competitions found for this filter.
        </p>
      )}

      {filteredCompetitions.length > PREVIEW_COUNT && (
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg competition-toggle-btn"
            onClick={() => setShowAllCompetitions(!showAllCompetitions)}
          >
            {showAllCompetitions
              ? 'Show Less Competitions'
              : `Show All ${filteredCompetitions.length} Competitions`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Competitions;
