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
        id: 'CVE-2025-14610',
        plugin: 'TableMaster for Elementor',
        description: 'The TableMaster for Elementor plugin for WordPress is vulnerable to Server-Side Request Forgery in all versions up to, and including, 1.3.6. This is due to the plugin not restricting which URLs can be fetched when importing CSV data from a URL in the Data Table widget. This makes it possible for authenticated attackers, with Author-level access and above, to make web requests to arbitrary locations, including localhost and internal network services, and read sensitive files such as wp-config.php via the \'csv_url\' parameter.',
        cvss: 7.2,
        severity: 'High',
        date: 'Jan 27, 2026',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/tablemaster-for-elementor/tablemaster-for-elementor-136-authenticated-author-server-side-request-forgery-via-csv-url-parameter'
    },
    {
        id: 'CVE-2026-0920',
        plugin: 'LA-Studio Element Kit for Elementor',
        description: 'The LA-Studio Element Kit for Elementor plugin for WordPress is vulnerable to Administrative User Creation in all versions up to, and including, 1.5.6.3. This is due to the \'ajax_register_handle\' function not restricting what user roles a user can register with. This makes it possible for unauthenticated attackers to supply the \'lakit_bkrole\' parameter during registration and gain administrator access to the site.',
        cvss: 9.8,
        severity: 'Critical',
        date: 'Jan 21, 2026',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/lastudio-element-kit/la-studio-element-kit-for-elementor-1563-unauthenticated-privilege-escalation-via-backdoor-to-administrative-user-creation-via-lakit-bkrole-parameter'
    },
    {
        id: 'CVE-2026-0694',
        plugin: 'SearchWiz',
        description: 'The SearchWiz plugin for WordPress is vulnerable to Stored Cross-Site Scripting via post titles in search results in all versions up to, and including, 1.0.0. This is due to the plugin using `esc_attr()` instead of `esc_html()` when outputting post titles in search results. This makes it possible for authenticated attackers, with contributor-level access and above, to inject arbitrary web scripts in post titles that will execute whenever a user performs a search and views the search results page.',
        cvss: 6.4,
        severity: 'MEDIUM',
        date: 'Jan 13, 2026',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/searchwiz/searchwiz-100-authenticated-contributor-stored-cross-site-scripting-via-post-title'
    },
    {
        id: 'CVE-2025-14506',
        plugin: 'ConvertForce Popup Builder',
        description: 'The ConvertForce Popup Builder plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the Gutenberg block\'s `entrance_animation` attribute in all versions up to, and including, 0.0.7. This is due to insufficient input sanitization and output escaping. This makes it possible for authenticated attackers, with Author-level access and above, to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page.',
        cvss: 6.4,
        severity: 'MEDIUM',
        date: 'Jan 9, 2026',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/convertforce-popup-builder/convertforce-popup-builder-007-stored-cross-site-scripting-via-entrance-animation'
    },
    {
        id: 'CVE-2025-14453',
        plugin: 'My Album Gallery',
        description: 'The My Album Gallery plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the \'style_css\' shortcode attribute in all versions up to, and including, 1.0.4 due to insufficient input sanitization and output escaping. This makes it possible for authenticated attackers, with Contributor-level access and above, to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page.',
        cvss: 6.4,
        severity: 'MEDIUM',
        date: 'Jan 6, 2026',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/my-album-gallery/my-album-gallery-104-authenticated-contributor-stored-cross-site-scripting-via-style-css-shortcode-attribute'
    },
    {
        id: 'CVE-2025-14626',
        plugin: 'QR Code for WooCommerce',
        description: 'The QR Code for WooCommerce order emails, PDF invoices, packing slips plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the plugin\'s shortcode in all versions up to, and including, 1.9.42 due to insufficient input sanitization and output escaping on user supplied attributes. This makes it possible for authenticated attackers, with contributor-level access and above, to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page.',
        cvss: 6.4,
        severity: 'MEDIUM',
        date: 'Jan 6, 2026',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/qr-code-tag-for-wc-from-goaskle-com/qr-code-for-woocommerce-order-emails-pdf-invoices-packing-slips-1942-authenticated-contributor-cross-site-scripting-via-shortcode-attributes'
    },
    {
        id: 'CVE-2025-14153',
        plugin: 'Page Expire Popup/Redirection',
        description: 'The Page Expire Popup/Redirection for WordPress plugin for WordPress is vulnerable to time-based SQL Injection via the \'id\' shortcode attribute in all versions up to, and including, 1.0 due to insufficient escaping on the user supplied parameter and lack of sufficient preparation on the existing SQL query. This makes it possible for authenticated attackers, with Author-level access and above, to append additional SQL queries into already existing queries that can be used to extract sensitive information from the database.',
        cvss: 6.5,
        severity: 'MEDIUM',
        date: 'Jan 5, 2026',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/final-tiles-grid-gallery-lite/image-photo-gallery-final-tiles-grid-368-authenticated-author-stored-cross-site-scripting-via-custom-scripts-setting'
    },
    {
        id: 'CVE-2025-13693',
        plugin: 'Image Photo Gallery Final Tiles Grid',
        description: 'The Image Photo Gallery Final Tiles Grid plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the \'Custom scripts\' setting in all versions up to, and including, 3.6.8 due to insufficient input sanitization and output escaping. This makes it possible for authenticated attackers, with Author-level access and above, to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page.',
        cvss: 6.4,
        severity: 'MEDIUM',
        date: 'Dec 20, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/final-tiles-grid-gallery-lite/image-photo-gallery-final-tiles-grid-368-authenticated-author-stored-cross-site-scripting-via-custom-scripts-setting'
    },
    {
        id: 'CVE-2025-14003',
        plugin: 'Image Gallery – Photo Grid & Video Gallery',
        description: 'The Image Gallery – Photo Grid & Video Gallery plugin for WordPress is vulnerable to unauthorized modification of data due to a missing capability check on the `add_images_to_gallery_callback()` function in all versions up to, and including, 2.13.3. This makes it possible for authenticated attackers, with Author-level access and above, to add images to arbitrary Modula galleries owned by other users.',
        cvss: 4.3,
        severity: 'MEDIUM',
        date: 'Dec 15, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/modula-best-grid-gallery/image-gallery-photo-grid-video-gallery-2133-missing-authorization-to-authenticated-author-arbitrary-gallery-modification'
    },
    {
        id: 'CVE-2025-14366',
        plugin: 'Eyewear prescription form',
        description: 'The Eyewear prescription form plugin for WordPress is vulnerable to Missing Authorization in all versions up to, and including, 6.0.1. This is due to missing authorization checks on the SubmitCatProductRequest AJAX action. This makes it possible for unauthenticated attackers to create arbitrary WooCommerce products with custom names, prices, and category assignments via the \'Name\', \'Price\', and \'Parent\' parameters.',
        cvss: 5.3,
        severity: 'MEDIUM',
        date: 'Dec 12, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/eyewear-prescription-form/eyewear-prescription-form-601-missing-authorization-to-unauthenticated-arbitrary-woocommerce-product-creation'
    },
    {
        id: 'CVE-2025-14068',
        plugin: 'WPNakama',
        description: 'The WPNakama plugin for WordPress is vulnerable to time-based SQL Injection via the \'order_by\' parameter in all versions up to, and including, 0.6.3 due to insufficient escaping on the user supplied parameter and lack of sufficient preparation on the existing SQL query. This makes it possible for unauthenticated attackers to append additional SQL queries into already existing queries that can be used to extract sensitive information from the database.',
        cvss: 7.5,
        severity: 'High',
        date: 'Dec 11, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/wpnakama/wpnakama-063-unauthenticated-sql-injection-via-order-by-parameter'
    },
    {
        id: 'CVE-2025-14166',
        plugin: 'WPMasterToolKit (WPMTK)',
        description: 'The WPMasterToolKit plugin for WordPress is vulnerable to PHP Code Injection in all versions up to, and including, 2.13.0. This is due to the plugin allowing Author-level users to create and execute arbitrary PHP code through the Code Snippets feature without proper capability checks. This makes it possible for authenticated attackers, with Contributor-level access and above, to execute arbitrary PHP code on the server, leading to remote code execution, privilege escalation, and complete site compromise.',
        cvss: 5.3,
        severity: 'MEDIUM',
        date: 'Dec 11, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/wpmastertoolkit/wpmastertoolkit-wpmtk-2130-authenticated-contributor-code-injection'
    },
    {
        id: 'CVE-2025-12782',
        plugin: 'Beaver Builder – WordPress Page Builder',
        description: 'The Beaver Builder – WordPress Page Builder plugin for WordPress is vulnerable to authorization bypass in all versions up to, and including, 2.9.4. This is due to the plugin not properly verifying a user\'s authorization in the disable() function. This makes it possible for authenticated attackers, with contributor level access and above, to disable the Beaver Builder layout on arbitrary posts and pages, causing content integrity issues and layout disruption on those pages.',
        cvss: 4.3,
        severity: 'MEDIUM',
        date: 'Dec 4, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/beaver-builder-lite-version/beaver-builder-wordpress-page-builder-294-missing-authorization-to-authenticated-contributor-builder-status-tampering'
    }
];

export default CVE;
