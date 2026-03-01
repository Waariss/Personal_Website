import React, { useState } from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { FaBookOpen } from 'react-icons/fa';
import '../App.css';
import { BLOGS } from '../data';
import { truncateText } from '../utils';

const BLOG_EXCERPT_LENGTH = 100;
const FEATURED_BLOG_COUNT = 3;

const Blog = () => {
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const displayedBlogs = showAllBlogs ? BLOGS : BLOGS.slice(0, FEATURED_BLOG_COUNT);

  return (
    <section id="blog" className="my-5">
      <h2 className="mb-4 text-center title-enhanced">Blog</h2>
      <Row>
        {displayedBlogs.map((blog) => (
          <Col key={blog.id} xs={12} md={6} lg={4} className="mb-4">
            <a
              href={blog.links[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card-link"
            >
              <Card className="blog-card-new h-100">
                <div className="blog-image-container">
                  <Card.Img
                    variant="top"
                    src={blog.internshipImages}
                    alt={blog.title}
                    className="blog-card-image"
                    loading="lazy"
                  />
                  <div className="blog-overlay">
                    <FaBookOpen className="blog-icon" aria-hidden="true" focusable="false" />
                  </div>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Badge bg="secondary" className="mb-2 align-self-start">
                    {blog.duration}
                  </Badge>
                  <Card.Title className="blog-card-title">{blog.title}</Card.Title>
                  <Card.Text className="blog-card-excerpt text-muted">
                    {truncateText(blog.description, BLOG_EXCERPT_LENGTH)}
                  </Card.Text>
                  <div className="mt-auto">
                    <span className="blog-read-more-link">Click to read more →</span>
                  </div>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      {BLOGS.length > FEATURED_BLOG_COUNT && (
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg"
            onClick={() => setShowAllBlogs((currentValue) => !currentValue)}
          >
            {showAllBlogs ? 'Show Less Blogs' : `Show All ${BLOGS.length} Blogs`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Blog;
