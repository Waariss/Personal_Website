import React, { useEffect, useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import {
  FaCompressArrowsAlt,
  FaExternalLinkAlt,
} from 'react-icons/fa';

const LOCAL_STORAGE_ZOOM_KEY = 'resume_zoom_level';
const LOCAL_STORAGE_FIT_KEY = 'resume_fit_width';
const MIN_ZOOM = 60;
const MAX_ZOOM = 150;
const DEFAULT_ZOOM = 100;
const PDF_COUNT_REGEX = /\/Count\s+(\d+)/g;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const getPdfPageCount = async (url) => {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const content = new TextDecoder('latin1').decode(buffer);
  const counts = [...content.matchAll(PDF_COUNT_REGEX)]
    .map((match) => Number(match[1]))
    .filter(Number.isFinite);

  return counts.length ? Math.max(...counts) : null;
};

const readStoredNumber = (key, fallback) => {
  if (typeof window === 'undefined') {
    return fallback;
  }

  const value = Number(window.localStorage.getItem(key));
  return Number.isFinite(value) ? value : fallback;
};

const readStoredBoolean = (key, fallback) => {
  if (typeof window === 'undefined') {
    return fallback;
  }

  const value = window.localStorage.getItem(key);
  if (value === '1') return true;
  if (value === '0') return false;
  return fallback;
};

const ResumePreview = ({ resumeUrl }) => {
  const [isResumeVisible, setIsResumeVisible] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(() => clamp(readStoredNumber(LOCAL_STORAGE_ZOOM_KEY, DEFAULT_ZOOM), MIN_ZOOM, MAX_ZOOM));
  const [fitWidth, setFitWidth] = useState(() => readStoredBoolean(LOCAL_STORAGE_FIT_KEY, false));

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem(LOCAL_STORAGE_ZOOM_KEY, String(zoomLevel));
  }, [zoomLevel]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem(LOCAL_STORAGE_FIT_KEY, fitWidth ? '1' : '0');
  }, [fitWidth]);

  useEffect(() => {
    if (!isResumeVisible || totalPages) {
      return;
    }

    let isMounted = true;

    getPdfPageCount(resumeUrl)
      .then((count) => {
        if (isMounted && count) {
          setTotalPages(count);
        }
      })
      .catch(() => {
        if (isMounted) {
          setTotalPages(null);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [isResumeVisible, resumeUrl, totalPages]);

  const iframeSrc = useMemo(() => {
    const zoomParam = fitWidth ? 'page-width' : `${zoomLevel}`;
    return `${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&page=${currentPage}&zoom=${zoomParam}`;
  }, [currentPage, fitWidth, resumeUrl, zoomLevel]);

  const handleLoadResume = () => {
    setIsResumeVisible(true);
    setIsIframeLoaded(false);
  };

  const handlePageChange = (nextPage) => {
    if (!Number.isFinite(totalPages) || totalPages < 1) {
      return;
    }

    if (!Number.isFinite(nextPage)) {
      return;
    }

    const maxPage = totalPages || Number.POSITIVE_INFINITY;
    const bounded = clamp(nextPage, 1, maxPage);
    setCurrentPage(bounded);
    setIsIframeLoaded(false);
  };

  const hasPageControls = Number.isFinite(totalPages) && totalPages > 0;

  return (
    <article className="resume-preview-terminal">
      <header className="resume-terminal-head">
        <div className="resume-terminal-dots" aria-hidden="true">
          <span className="dot red"></span>
          <span className="dot amber"></span>
          <span className="dot green"></span>
        </div>
        <span className="resume-terminal-title">resume.pdf - waaris_m@portfolio</span>
        <div className="resume-viewer-header-actions">
          <a
            className="btn btn-outline-secondary btn-sm"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume in a new tab"
          >
            <FaExternalLinkAlt className="me-1" />
            Open
          </a>
        </div>
      </header>

      {isResumeVisible && (
        <div className="resume-toolbar" role="toolbar" aria-label="Resume preview controls">
          {hasPageControls ? (
            <div className="resume-toolbar-group">
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                aria-label="Go to previous page"
              >
                Prev
              </Button>
              <span className="resume-page-indicator" aria-live="polite">
                Page {currentPage} / {totalPages}
              </span>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                aria-label="Go to next page"
              >
                Next
              </Button>
            </div>
          ) : (
            <div className="resume-toolbar-group">
              <span className="resume-page-indicator" aria-live="polite">
              </span>
            </div>
          )}

          <div className="resume-toolbar-group">
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => setFitWidth((value) => !value)}
              aria-label={fitWidth ? 'Switch to actual size view' : 'Fit preview to width'}
            >
              <FaCompressArrowsAlt className="me-1" />
              {fitWidth ? 'Actual' : 'Fit'}
            </Button>

            <Button
              variant="outline-secondary"
              size="sm"
              disabled={fitWidth}
              onClick={() => setZoomLevel((value) => clamp(value - 10, MIN_ZOOM, MAX_ZOOM))}
              aria-label="Zoom out"
            >
              -
            </Button>
            <span className="resume-page-indicator">{fitWidth ? 'Fit' : `${zoomLevel}%`}</span>
            <Button
              variant="outline-secondary"
              size="sm"
              disabled={fitWidth}
              onClick={() => setZoomLevel((value) => clamp(value + 10, MIN_ZOOM, MAX_ZOOM))}
              aria-label="Zoom in"
            >
              +
            </Button>
          </div>
        </div>
      )}

      <div className="resume-preview-shell">
        {!isResumeVisible ? (
          <div className="resume-empty-state resume-empty-state-compact">
            <p className="terminal-line">PDF preview loads on demand to keep the homepage fast.</p>
            <div className="resume-empty-actions">
              <Button className="resume-btn-primary" onClick={handleLoadResume} aria-label="Load resume preview">
                Load Resume PDF
              </Button>
              <a className="btn resume-btn-ghost" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Open in New Tab
              </a>
            </div>
          </div>
        ) : (
          <div className="resume-iframe-shell">
            {!isIframeLoaded && (
              <div className="resume-loading-skeleton" aria-hidden="true">
                <div className="resume-loading-line line-1"></div>
                <div className="resume-loading-line line-2"></div>
                <div className="resume-loading-line line-3"></div>
              </div>
            )}
            <iframe
              src={iframeSrc}
              loading="lazy"
              width="100%"
              height="740"
              className="resume-iframe"
              title="Resume PDF preview"
              onLoad={() => setIsIframeLoaded(true)}
            ></iframe>
          </div>
        )}
      </div>
    </article>
  );
};

export default ResumePreview;
