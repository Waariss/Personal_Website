import React from 'react';
import { Card, Row, Col} from 'react-bootstrap';
import '../App.css';

const Blog = () => {
    return (
        <section id="blog" className="my-5">
            <h1 className="mb-4 text-center title-enhanced">Blog</h1>
            {getBlog().map((blog, index) => (
                <Card key={index} className="mb-4 border-0 shadow-sm blog-card hover-shadow">
                    <Card.Body>
                        <Row>
                            <Col xs={2} className="d-flex align-items-start justify-content-center">
                                <img src={blog.companyLogo} alt="Company Logo" className="company-logo" />
                            </Col>
                            <Col xs={10}>
                                <div className="blog-container">
                                    <img src={blog.internshipImages} alt="Internship Experience" className="blog-image float-right ml-3" />
                                    <Card.Title className="mb-3 blog-title">{blog.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{blog.company}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">{blog.duration}</Card.Subtitle>
                                    <Card.Text className="mb-3">{blog.description}</Card.Text>
                                    <Card.Text className="mb-3 link-group">
                                        {blog.links.map((link, linkIndex) => (
                                            <Card.Link
                                                key={linkIndex}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline-dark custom-link"
                                            >
                                               {link.label}
                                            </Card.Link>
                                        ))}
                                    </Card.Text>
                                </div>
                            </Col>
                        </Row>
                        
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
};

const getBlog = () => [
    {
        companyLogo: 'https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png',
        internshipImages: './images/blog_.png',
        title: 'My Exam Review',
        company: 'Medium',
        duration: 'Oct 2024',
        description: 'My Exams Review on Medium',
        links: [
            { href: 'https://medium.com/@waaris_m', label: 'Read More' },
        ]
    },
    // {
    //     companyLogo: './images/cat.jpg',
    //     internshipImages: './images/writeup.png',
    //     title: 'Cybersecurity journey Writeup',
    //     company: 'Writeup',
    //     duration: 'Mar 2024',
    //     description: 'Welcome to my Cybersecurity journey! I\'m Waris Damkham, a passionate Information and Communication Technology student. Dive into my writeup to explore the intricacies of cybersecurity through the lens of my hands-on experiences at HackTheBox etc.',
    //     links: [
    //         { href: 'https://wariss-writeup.gitbook.io/writeup/', label: 'Read More' },
    //     ]
    // },
    {
        companyLogo: './images/lav.png',
        internshipImages: './images/blog_im.jpg',
        title: 'From Thailand to Japan: My Cybersecurity Internship at Ritsumeikan University',
        company: 'Cybersecurity Laboratory',
        duration: 'Oct 2023',
        description: 'Hello everyone! My name is Waris Damkham, and I\'m currently a fourth-year student in Information and Communication Technology at Mahidol University. I was fortunate to secure an internship at the Cybersecurity Laboratory in the Faculty of Information Science and Engineering at Ritsumeikan University.[...]',
        links: [
            { href: 'https://cysec.ise.ritsumei.ac.jp/2023/11/02/from-thailand-to-japan-my-cybersecurity-internship-at-ritsumeikan-university/', label: 'Read More' },
        ]
    }
];

export default Blog;
