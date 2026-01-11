import React, { useState } from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import '../App.css';

const CVE = () => {
    const [showAllCVEs, setShowAllCVEs] = useState(false);
    const cves = getCVEs();
    const displayedCVEs = showAllCVEs ? cves : cves.slice(0, 3);
    
    return (
        <section id="cves" className="my-5">
            <h1 className="mb-4 text-center title-enhanced">Security Vulnerabilities (CVEs)</h1>
            
            <Row>
                {displayedCVEs.map((cve, index) => (
                    <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                        <Card className="cve-card h-100 border-0 shadow-sm">
                            <Card.Body className="d-flex flex-column">
                                {/* CVSS Score Circle */}
                                <div className="cve-header">
                                    <div className="cvss-circle-container">
                                        <svg className="cvss-circle" viewBox="0 0 100 100">
                                            <circle
                                                className="cvss-circle-bg"
                                                cx="50"
                                                cy="50"
                                                r="45"
                                            />
                                            <circle
                                                className={`cvss-circle-progress ${cve.severity.toLowerCase()}`}
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                style={{
                                                    strokeDasharray: `${(cve.cvss / 10) * 283} 283`
                                                }}
                                            />
                                            <text
                                                x="50"
                                                y="50"
                                                className="cvss-score-text"
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                {cve.cvss}
                                            </text>
                                        </svg>
                                        <Badge bg={getSeverityColor(cve.severity)} className="mt-2">
                                            {cve.severity}
                                        </Badge>
                                    </div>
                                </div>

                                {/* CVE Info */}
                                <div className="cve-content flex-grow-1">
                                    <h5 className="cve-id">{cve.id}</h5>
                                    <h6 className="cve-title">{cve.plugin}</h6>
                                    <p className="cve-description">{cve.description}</p>
                                    
                                    <div className="cve-meta">
                                        <small className="text-muted">
                                            <i className="fas fa-calendar-alt me-2"></i>
                                            {cve.date}
                                        </small>
                                    </div>
                                </div>

                                {/* Link */}
                                <div className="mt-auto">
                                    <a
                                        href={cve.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-danger btn-sm w-100"
                                    >
                                        View on Wordfence <i className="fas fa-external-link-alt ms-1"></i>
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {cves.length > 3 && (
                <div className="text-center mt-4">
                    <button 
                        className="btn btn-outline-secondary btn-lg"
                        onClick={() => setShowAllCVEs(!showAllCVEs)}
                    >
                        {showAllCVEs ? 'Show Less CVEs' : `Show All ${cves.length} CVEs`}
                    </button>
                </div>
            )}
        </section>
    );
};

const getSeverityColor = (severity) => {
    switch (severity.toUpperCase()) {
        case 'CRITICAL': return 'danger';
        case 'HIGH': return 'warning';
        case 'MEDIUM': return 'info';
        case 'LOW': return 'secondary';
        default: return 'secondary';
    }
};

const getCVEs = () => [
    {
        id: 'CVE-2025-14506',
        plugin: 'ConvertForce Popup Builder',
        description: 'Stored Cross-Site Scripting via entrance_animation attribute in Gutenberg block (≤ 0.0.7)',
        cvss: 6.4,
        severity: 'MEDIUM',
        date: 'Jan 9, 2026',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/convertforce-popup-builder/convertforce-popup-builder-007-stored-cross-site-scripting-via-entrance-animation'
    },
    {
        id: 'CVE-2025-14453',
        plugin: 'My Album Gallery',
        description: 'Authenticated Stored Cross-Site Scripting via style_css shortcode attribute (≤ 1.0.4)',
        cvss: 6.4,
        severity: 'MEDIUM',
        date: 'Jan 6, 2026',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/my-album-gallery/my-album-gallery-104-authenticated-contributor-stored-cross-site-scripting-via-style-css-shortcode-attribute'
    },
    {
        id: 'CVE-2025-14626',
        plugin: 'QR Code for WooCommerce',
        description: 'Authenticated Cross-Site Scripting via shortcode attributes (≤ 1.9.42)',
        cvss: 6.4,
        severity: 'MEDIUM',
        date: 'Jan 6, 2026',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/qr-code-tag-for-wc-from-goaskle-com/qr-code-for-woocommerce-order-emails-pdf-invoices-packing-slips-1942-authenticated-contributor-cross-site-scripting-via-shortcode-attributes'
    },
    {
        id: 'CVE-2025-14153',
        plugin: 'Page Expire Popup/Redirection',
        description: 'Authenticated SQL Injection via id shortcode attribute (≤ 1.0)',
        cvss: 6.5,
        severity: 'MEDIUM',
        date: 'Jan 5, 2026',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/final-tiles-grid-gallery-lite/image-photo-gallery-final-tiles-grid-368-authenticated-author-stored-cross-site-scripting-via-custom-scripts-setting'
    },
    {
        id: 'CVE-2025-13693',
        plugin: 'Image Photo Gallery Final Tiles Grid',
        description: 'Authenticated Stored Cross-Site Scripting via Custom Scripts setting (≤ 3.6.8)',
        cvss: 6.4,
        severity: 'MEDIUM',
        date: 'Dec 20, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/final-tiles-grid-gallery-lite/image-photo-gallery-final-tiles-grid-368-authenticated-author-stored-cross-site-scripting-via-custom-scripts-setting'
    },
    {
        id: 'CVE-2025-14003',
        plugin: 'Image Gallery – Photo Grid & Video Gallery',
        description: 'Missing Authorization to Authenticated Arbitrary Gallery Modification (≤ 2.13.3)',
        cvss: 4.3,
        severity: 'MEDIUM',
        date: 'Dec 15, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/modula-best-grid-gallery/image-gallery-photo-grid-video-gallery-2133-missing-authorization-to-authenticated-author-arbitrary-gallery-modification'
    },
    {
        id: 'CVE-2025-14366',
        plugin: 'Eyewear prescription form',
        description: 'Missing Authorization to Unauthenticated Arbitrary WooCommerce Product Creation (≤ 6.0.1)',
        cvss: 5.3,
        severity: 'MEDIUM',
        date: 'Dec 12, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/eyewear-prescription-form/eyewear-prescription-form-601-missing-authorization-to-unauthenticated-arbitrary-woocommerce-product-creation'
    },
    {
        id: 'CVE-2025-14068',
        plugin: 'WPNakama',
        description: 'Unauthenticated SQL Injection via order_by parameter (≤ 0.6.3)',
        cvss: 7.5,
        severity: 'CRITICAL',
        date: 'Dec 11, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/wpnakama/wpnakama-063-unauthenticated-sql-injection-via-order-by-parameter'
    },
    {
        id: 'CVE-2025-14166',
        plugin: 'WPMasterToolKit (WPMTK)',
        description: 'Authenticated Code Injection leading to RCE (≤ 2.13.0)',
        cvss: 5.3,
        severity: 'MEDIUM',
        date: 'Dec 11, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/wpmastertoolkit/wpmastertoolkit-wpmtk-2130-authenticated-contributor-code-injection'
    },
    {
        id: 'CVE-2025-12782',
        plugin: 'Beaver Builder – WordPress Page Builder',
        description: 'Missing Authorization to Authenticated Builder Status Tampering (≤ 2.9.4)',
        cvss: 4.3,
        severity: 'MEDIUM',
        date: 'Dec 4, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/beaver-builder-lite-version/beaver-builder-wordpress-page-builder-294-missing-authorization-to-authenticated-contributor-builder-status-tampering'
    }
];

export default CVE;
