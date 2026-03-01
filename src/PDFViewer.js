import React, { useEffect, useMemo, useState } from 'react';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Navigation from './Navbar';
import { PDF_CONTENT_MAP } from './data';
import { isMobileUserAgent } from './utils';
import './App.css';

const PDFViewer = () => {
  const { pdfId } = useParams();
  const [isMobile, setIsMobile] = useState(false);
  const content = useMemo(() => PDF_CONTENT_MAP[pdfId] ?? null, [pdfId]);

  useEffect(() => {
    setIsMobile(isMobileUserAgent());
  }, []);

  return (
    <>
      <Navigation />
      <div className="pdf-viewer-shell">
        {content?.isImage ? (
          <img src={content.url} alt="Content" className="pdf-viewer-image" />
        ) : content && isMobile ? (
          <div className="pdf-viewer-mobile">
            <div className="pdf-viewer-mobile-card">
              <FaFilePdf aria-hidden="true" focusable="false" className="pdf-viewer-icon" />
              <h3 className="pdf-viewer-title">PDF Document</h3>
              <p className="pdf-viewer-description">
                PDF viewing is not supported on mobile browsers. Please download the document to view it.
              </p>
              <a href={content.url} download className="btn btn-primary btn-lg pdf-viewer-download">
                <FaDownload className="me-2" aria-hidden="true" focusable="false" />
                Download PDF
              </a>
              <div className="pdf-viewer-open-tab-wrapper">
                <a
                  href={content.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pdf-viewer-open-tab"
                >
                  Or try opening in new tab
                </a>
              </div>
            </div>
          </div>
        ) : content ? (
          <iframe src={content.url} className="pdf-viewer-frame" title="PDF" />
        ) : (
          <p>No content found.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PDFViewer;
