import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import '../App.css';

const Publication = ({links }) => {
    const cves = getCVEs();
    const conferences = getConferences();
    const [showAllCVEs, setShowAllCVEs] = useState(false);
    
    const displayedCVEs = showAllCVEs ? cves : cves.slice(0, 3);
    
    return (
        <section id="publications" className="my-5">
            <h1 className="mb-4 text-center title-enhanced">Publications</h1>
            
            {/* Academic Publications Section */}
            <div className="mb-5">
                <h3 className="mb-3 publication-section-title">Academic Publications</h3>
                <Card className="border-0 shadow-sm about-card">
                    <Card.Body>
                        <ListGroup variant="flush">
                            {conferences.map((publication, index) => (
                                <ListGroup.Item key={index} className="publication-item">
                                    <a href={publication.link} target="_blank" rel="noopener noreferrer" className="linkStyle publication-title">
                                        <h5>{publication.title}</h5>
                                    </a>
                                    <p className="text-muted mb-2">{publication.subtitle}</p>
                                    <p className="mb-2">{publication.description}</p>
                                    {publication.date && <Card.Subtitle className="mb-2 text-muted"><small>{publication.date}</small></Card.Subtitle>}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>

            {/* CVE Section */}
            <div className="mb-5">
                <h3 className="mb-3 publication-section-title">Security Vulnerabilities (CVEs)</h3>
                <Card className="border-0 shadow-sm about-card">
                    <Card.Body>
                        <ListGroup variant="flush">
                            {displayedCVEs.map((publication, index) => (
                                <ListGroup.Item key={index} className="publication-item">
                                    <a href={publication.link} target="_blank" rel="noopener noreferrer" className="linkStyle publication-title">
                                        <h5>{publication.title}</h5>
                                    </a>
                                    <p className="text-muted mb-2">{publication.subtitle}</p>
                                    <p className="mb-2">{publication.description}</p>
                                    {publication.date && <Card.Subtitle className="mb-2 text-muted"><small>{publication.date}</small></Card.Subtitle>}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        {cves.length > 3 && (
                            <div className="text-center mt-3">
                                <button 
                                    className="btn btn-outline-secondary"
                                    onClick={() => setShowAllCVEs(!showAllCVEs)}
                                >
                                    {showAllCVEs ? 'Show Less' : `Show All ${cves.length} CVEs`}
                                </button>
                            </div>
                        )}
                    </Card.Body>
                </Card>
            </div>

            {links && (
                <Card.Text className="mb-3 link-group mt-3">
                    {links.map((link, index) => (
                        <Card.Link
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-secondary"
                        >
                        </Card.Link>
                    ))}
                </Card.Text>
            )}
        </section>
    );
};

const getCVEs = () => [
    {
        title: 'CVE-2025-14506 - ConvertForce Popup Builder <= 0.0.7 - Stored Cross-Site Scripting via entrance_animation',
        subtitle: 'Published in Wordfence',
        description: "The ConvertForce Popup Builder plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the Gutenberg block's `entrance_animation` attribute in all versions up to, and including, 0.0.7. This is due to insufficient input sanitization and output escaping. This makes it possible for authenticated attackers, with Author-level access and above, to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page.",
        date: 'Wordfence · Jan 9, 2026',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/convertforce-popup-builder/convertforce-popup-builder-007-stored-cross-site-scripting-via-entrance-animation'
    },
    {
        title: 'CVE-2025-14453 - My Album Gallery <= 1.0.4 - Authenticated (Contributor+) Stored Cross-Site Scripting via \'style_css\' Shortcode Attribute',
        subtitle: 'Published in Wordfence',
        description: "The My Album Gallery plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the 'style_css' shortcode attribute in all versions up to, and including, 1.0.4 due to insufficient input sanitization and output escaping. This makes it possible for authenticated attackers, with Contributor-level access and above, to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page.",
        date: 'Wordfence · Jan 6, 2026',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/my-album-gallery/my-album-gallery-104-authenticated-contributor-stored-cross-site-scripting-via-style-css-shortcode-attribute'
    },
    {
        title: 'CVE-2025-14626 - QR Code for WooCommerce order emails, PDF invoices, packing slips <= 1.9.42 - Authenticated (Contributor+) Cross-Site Scripting via Shortcode Attributes',
        subtitle: 'Published in Wordfence',
        description: "The QR Code for WooCommerce order emails, PDF invoices, packing slips plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the plugin's shortcode in all versions up to, and including, 1.9.42 due to insufficient input sanitization and output escaping on user supplied attributes. This makes it possible for authenticated attackers, with contributor-level access and above, to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page.",
        date: 'Wordfence · Jan 6, 2026',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/qr-code-tag-for-wc-from-goaskle-com/qr-code-for-woocommerce-order-emails-pdf-invoices-packing-slips-1942-authenticated-contributor-cross-site-scripting-via-shortcode-attributes'
    },
    {
        title: 'CVE-2025-14153 - Page Expire Popup/Redirection for WordPress <= 1.0 - Authenticated (Author+) SQL Injection via \'id\' Shortcode Attribute',
        subtitle: 'Published in Wordfence',
        description: "The Page Expire Popup/Redirection for WordPress plugin for WordPress is vulnerable to time-based SQL Injection via the 'id' shortcode attribute in all versions up to, and including, 1.0 due to insufficient escaping on the user supplied parameter and lack of sufficient preparation on the existing SQL query. This makes it possible for authenticated attackers, with Author-level access and above, to append additional SQL queries into already existing queries that can be used to extract sensitive information from the database.",
        date: 'Wordfence · Jan 5, 2026',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/final-tiles-grid-gallery-lite/image-photo-gallery-final-tiles-grid-368-authenticated-author-stored-cross-site-scripting-via-custom-scripts-setting'
    },
    {
        title: 'CVE-2025-13693 - Image Photo Gallery Final Tiles Grid <= 3.6.8 - Authenticated (Author+) Stored Cross-Site Scripting via \'Custom Scripts\' Setting',
        subtitle: 'Published in Wordfence',
        description: "The Image Photo Gallery Final Tiles Grid plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the 'Custom scripts' setting in all versions up to, and including, 3.6.8 due to insufficient input sanitization and output escaping. This makes it possible for authenticated attackers, with Author-level access and above, to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page.",
        date: 'Wordfence · Dec 20, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/final-tiles-grid-gallery-lite/image-photo-gallery-final-tiles-grid-368-authenticated-author-stored-cross-site-scripting-via-custom-scripts-setting'
    },
    {
        title: 'CVE-2025-14003 - Image Gallery – Photo Grid & Video Gallery <= 2.13.3 - Missing Authorization to Authenticated (Author+) Arbitrary Gallery Modification',
        subtitle: 'Published in Wordfence',
        description: "The Image Gallery – Photo Grid & Video Gallery plugin for WordPress is vulnerable to unauthorized modification of data due to a missing capability check on the `add_images_to_gallery_callback()` function in all versions up to, and including, 2.13.3. This makes it possible for authenticated attackers, with Author-level access and above, to add images to arbitrary Modula galleries owned by other users.",
        date: 'Wordfence · Dec 15, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/modula-best-grid-gallery/image-gallery-photo-grid-video-gallery-2133-missing-authorization-to-authenticated-author-arbitrary-gallery-modification'
    },
    {
        title: 'CVE-2025-14366 - Eyewear prescription form <= 6.0.1 - Missing Authorization to Unauthenticated Arbitrary WooCommerce Product Creation',
        subtitle: 'Published in Wordfence',
        description: "The Eyewear prescription form plugin for WordPress is vulnerable to Missing Authorization in all versions up to, and including, 6.0.1. This is due to missing authorization checks on the SubmitCatProductRequest AJAX action. This makes it possible for unauthenticated attackers to create arbitrary WooCommerce products with custom names, prices, and category assignments via the 'Name', 'Price', and 'Parent' parameters.",
        date: 'Wordfence · Dec 12, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/eyewear-prescription-form/eyewear-prescription-form-601-missing-authorization-to-unauthenticated-arbitrary-woocommerce-product-creation'
    },
    {
        title: 'CVE-2025-14068 - WPNakama <= 0.6.3 - Unauthenticated SQL Injection via "order_by" Parameter',
        subtitle: 'Published in Wordfence',
        description: 'The WPNakama plugin for WordPress is vulnerable to time-based SQL Injection via the "order_by" parameter in all versions up to, and including, 0.6.3 due to insufficient escaping on the user supplied parameter and lack of sufficient preparation on the existing SQL query. This makes it possible for unauthenticated attackers to append additional SQL queries into already existing queries that can be used to extract sensitive information from the database.',
        date: 'Wordfence · Dec 11, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/wpnakama/wpnakama-063-unauthenticated-sql-injection-via-order-by-parameter'
    },
    {
        title: 'CVE-2025-14166 - WPMasterToolKit (WPMTK) <= 2.13.0 - Authenticated (Contributor+) Code Injection',
        subtitle: 'Published in Wordfence',
        description: 'The WPMasterToolKit plugin for WordPress is vulnerable to PHP Code Injection in all versions up to, and including, 2.13.0. This is due to the plugin allowing Author-level users to create and execute arbitrary PHP code through the Code Snippets feature without proper capability checks. This makes it possible for authenticated attackers, with Contributor-level access and above, to execute arbitrary PHP code on the server, leading to remote code execution, privilege escalation, and complete site compromise.',
        date: 'Wordfence · Dec 11, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/wpmastertoolkit/wpmastertoolkit-wpmtk-2130-authenticated-contributor-code-injection'
    },
    {
        title: 'CVE-2025-12782 - Beaver Builder – WordPress Page Builder <= 2.9.4 - Missing Authorization to Authenticated (Contributor+) Builder Status Tampering',
        subtitle: 'Published in Wordfence',
        description: 'The Beaver Builder – WordPress Page Builder plugin for WordPress is vulnerable to authorization bypass in all versions up to, and including, 2.9.4. This is due to the plugin not properly verifying a user\'s authorization in the disable() function. This makes it possible for authenticated attackers, with contributor level access and above, to disable the Beaver Builder layout on arbitrary posts and pages, causing content integrity issues and layout disruption on those pages.',
        date: 'Wordfence · Dec 4, 2025',
        link: 'https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/beaver-builder-lite-version/beaver-builder-wordpress-page-builder-294-missing-authorization-to-authenticated-contributor-builder-status-tampering'
    }
];

const getConferences = () => [
    {
        title: 'Practical Mobile Based Services for Identification of Chicken Diseases From Fecal Images',
        subtitle: 'Presented at IEEE Region 10 Conference 2024 (TENCON 2024)',
        description: 'Poultry farming is crucial to the food chain, and chicken health directly impacts product quality and safety. Diagnosing poultry diseases using polymerase chain reaction is costly, particularly for small farms. To address this, we developed a mobile-based service for farmers, enabling the identification of common chicken diseases from fecal images via a Line account. Our system achieved 86.49% segmentation precision and 95.93% classification accuracy on a large dataset, offering a practical and accessible tool for local farmers.', // Truncated for brevity
        date: 'IEEE · Mar 5, 2025',
        link: 'https://ieeexplore.ieee.org/document/10902790'
    },
    {
        title: 'Detecting Vulnerable OAuth 2.0 Implementations in Android Applications',
        subtitle: 'Presented at the Workshop on Cyber Forensics, Security, and E-discovery, as part of the 23rd IEEE International Conference on Software Quality, Reliability, and Security, 2023.',
        description: 'OAuth 2.0, commonly used for authorization, can be susceptible to CSRF attacks in Android applications. To address this, we developed an Android app to assess other apps\' use of the OAuth 2.0 state parameter—a key defense against CSRF. Our analysis, conducted on both Chrome and the default browser, evaluates whether Android apps using OAuth 2.0 are adequately protected against CSRF attacks. Our research aims to protect users by highlighting apps with potentially vulnerable OAuth 2.0 implementations.', // Truncated for brevity
        date: 'IEEE · Feb 19, 2024',
        link: 'https://ieeexplore.ieee.org/document/10430018'
    },
    {
        title: 'Automated COVID-19 Screening Framework Using Deep CNN With Chest X-Ray Medical Images',
        subtitle: 'Presented at The 6th International Conference on Information Technology (InCIT2022)',
        description: 'An automated COVID-19 screening framework using chest X-ray images is proposed in this study. It leverages artificial intelligence techniques and transfer learning for accurate diagnosis. The framework extracts features using transfer learning and applies modified deep neural networks. Grad-CAM visualization supports the predicted diagnosis. Experimental results demonstrate superior performance compared to other deep learning techniques. This framework has the potential to aid in early COVID-19 diagnosis and alleviate the burden on radiologists.', // Truncated for brevity
        date: 'IEEE · Mar 21, 2023',
        link: 'https://ieeexplore.ieee.org/document/10067528'
    }
];

export default Publication;
