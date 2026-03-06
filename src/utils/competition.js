const MONTH_INDEX = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

const normalizeNumericText = (value = '') => value.replace(/,/g, '').toLowerCase();

const formatTopPercentile = (percent) => {
  if (!Number.isFinite(percent)) {
    return null;
  }

  let formatted;

  if (percent < 1) {
    formatted = percent.toFixed(1);
  } else if (percent < 10) {
    formatted = percent.toFixed(1);
  } else {
    formatted = percent.toFixed(0);
  }

  return formatted.replace(/\.0$/, '');
};

export const parseRankMetric = (rankText, pointsText, type) => {
  const normalizedRank = normalizeNumericText(rankText || '');
  const slashMatch = normalizedRank.match(/(\d+)\s*\/\s*(\d+)/);
  const singleMatch = normalizedRank.match(/(\d+)/);

  const rank = slashMatch ? Number(slashMatch[1]) : singleMatch ? Number(singleMatch[1]) : null;
  const total = slashMatch ? Number(slashMatch[2]) : null;
  const rankDisplay = rank
    ? total
      ? `#${rank.toLocaleString()} / ${total.toLocaleString()}`
      : `#${rank.toLocaleString()}`
    : rankText || 'N/A';

  const percentile = rank && total ? (rank / total) * 100 : null;
  const percentileLabel = percentile ? `Top ${formatTopPercentile(percentile)}%` : null;

  const normalizedPoints = normalizeNumericText(pointsText || '');
  const pointsMatch = normalizedPoints.match(/(\d+(?:\.\d+)?)/);
  const pointsValue = pointsMatch ? Number(pointsMatch[1]) : null;
  const pointsDisplay = pointsValue ? `${pointsValue.toLocaleString()} pts` : pointsText || 'N/A';

  return {
    type,
    rank,
    total,
    percentile,
    rankDisplay,
    percentileLabel,
    pointsValue,
    pointsDisplay,
  };
};

export const getAchievementBadges = ({ rank, total, title = '' }) => {
  const badges = [];
  const lowerTitle = (title || '').toLowerCase();

  if (lowerTitle.includes('final')) {
    badges.push('Finalist');
  }

  if (lowerTitle.includes('qualifier')) {
    badges.push('Qualifier');
  }

  if (!rank) {
    return badges;
  }

  if (rank === 1) {
    badges.push('Top 1');
  } else if (rank <= 5) {
    badges.push('Top 5');
  } else if (rank <= 10) {
    badges.push('Top 10');
  }

  if (total) {
    const ratio = rank / total;

    if (ratio <= 0.01) {
      badges.push('Top 1%');
    } else if (ratio <= 0.05) {
      badges.push('Top 5%');
    }
  }

  return [...new Set(badges)];
};

export const parseCompetitionDateValue = (dateText = '') => {
  const [monthPart, yearPart] = dateText.trim().split(/\s+/);
  const monthKey = monthPart ? monthPart.slice(0, 3).toLowerCase() : '';
  const month = MONTH_INDEX[monthKey];
  const year = Number(yearPart);

  if (!Number.isFinite(year) || month === undefined) {
    return 0;
  }

  return new Date(year, month, 1).getTime();
};
