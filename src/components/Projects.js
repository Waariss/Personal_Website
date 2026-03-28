import React, { useEffect, useMemo, useState } from 'react';
import { Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import '../App.css';
import { PROJECTS } from '../data';
import { chunkArray } from '../utils';

const FEATURED_PROJECT_COUNT = 3;

const isInternalLink = (url) => typeof url === 'string' && url.startsWith('/');

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [projectsPerRow, setProjectsPerRow] = useState(3);

  const displayedProjects = showAllProjects ? PROJECTS : PROJECTS.slice(0, FEATURED_PROJECT_COUNT);
  const projectRows = useMemo(
    () => chunkArray(displayedProjects, projectsPerRow),
    [displayedProjects, projectsPerRow]
  );

  useEffect(() => {
    const updateProjectsPerRow = () => {
      if (window.innerWidth < 768) {
        setProjectsPerRow(1);
        return;
      }

      if (window.innerWidth < 992) {
        setProjectsPerRow(2);
        return;
      }

      setProjectsPerRow(3);
    };

    updateProjectsPerRow();
    window.addEventListener('resize', updateProjectsPerRow);

    return () => window.removeEventListener('resize', updateProjectsPerRow);
  }, []);

  const handleShow = (projectId) => {
    setSelectedProjectId((currentId) => {
      if (currentId === projectId) {
        return null;
      }

      return projectId;
    });
  };

  return (
    <section id="projects" className="my-4">
      <h2 className="mb-4 text-center title-enhanced">Projects</h2>
      {projectRows.map((rowProjects, rowIndex) => {
        const selectedProject = rowProjects.find((project) => project.id === selectedProjectId) ?? null;

        return (
          <div key={`project-row-${rowIndex + 1}`} className="project-row-group">
            <div className="project-gallery">
              {rowProjects.map((project) => (
                <div key={project.id}>
                  <Card
                    className="project-card"
                    role="button"
                    tabIndex={0}
                    aria-expanded={selectedProjectId === project.id}
                    onClick={() => handleShow(project.id)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        handleShow(project.id);
                      }
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={project.imgSrc}
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                    />
                    <Card.ImgOverlay className={`project-img-overlay ${selectedProjectId === project.id ? '' : 'image-overlay'}`}>
                      <Card.Title className={`project-title ${selectedProjectId === project.id ? 'white-text' : ''}`}>
                        {project.title}
                      </Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </div>
              ))}
            </div>
            {selectedProject && (
              <Card className="border-0 shadow-sm project-expanded-card">
                <div className="project-details">
                  <Card.Body>
                    <Card.Title>{selectedProject.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{selectedProject.subtitle}</Card.Subtitle>
                    <Card.Text>
                      {selectedProject.description}
                      {selectedProject.credentials && (
                        <ReactMarkdown className="markdown-credentials">{selectedProject.credentials}</ReactMarkdown>
                      )}
                    </Card.Text>
                    <Card.Text>
                      <strong>Skills:</strong> {selectedProject.skills.join(' · ')}
                    </Card.Text>
                    {selectedProject.links.map((link) => {
                      const commonProps = {
                        className: 'btn btn-outline-success',
                        key: link.url,
                      };

                      if (isInternalLink(link.url)) {
                        return (
                          <Card.Link as={Link} to={link.url} {...commonProps}>
                            {link.label}
                          </Card.Link>
                        );
                      }

                      return (
                        <Card.Link
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          {...commonProps}
                        >
                          {link.label}
                        </Card.Link>
                      );
                    })}
                  </Card.Body>
                </div>
              </Card>
            )}
          </div>
        );
      })}
      {PROJECTS.length > FEATURED_PROJECT_COUNT && (
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg"
            onClick={() => setShowAllProjects((currentValue) => !currentValue)}
          >
            {showAllProjects
              ? 'Show Less Projects'
              : `Show All ${PROJECTS.length} Projects`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
