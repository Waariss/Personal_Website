import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import '../App.css';

const Education = () => {
    return (
        <section id="education" className="my-4">
            <h1 className="mb-4 text-center">Education</h1>
            <Card className="mb-3 border-0 shadow-sm about-card">
                <Card.Body>
                    <Row>
                        <Col xs={2} className="d-flex align-items-start justify-content-center">
                            <img src="./images/Mahidol_U.png" alt="Company Logo" width="140" height="140" className="rounded-circle" />
                        </Col>
                        <Col xs={10}>
                            <Card.Title className="mb-2">Mahidol University</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Bachelor of Science - BS</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Information and Communication Technology · International Program · GPAX 3.02</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Aug 2020 - May 2024</Card.Subtitle>
                            <Card.Text className="mb-3">
                                <strong>Activities and societies:</strong>
                                <div className="timeline">
                                    <div className="timeline-event">
                                        <div className="event-description">
                                            <a className="activity-name-p">MC in ICT & DST Open House</a>
                                            <div className="event-time">Jun 2021 - Aug 2021</div>
                                            <div className="event-detail">In the esteemed ICT and DST Open Houses, I had the privilege of serving as the Master of Ceremony. This role involved introducing speakers, guiding the event's flow, and ensuring that attendees felt welcomed and engaged. My primary responsibility was to foster an enthusiastic environment while seamlessly transitioning between the event's various segments, ensuring a memorable experience for new students.</div>
                                        </div>
                                    </div>

                                    <div className="timeline-event">                                      
                                        <div className="event-description">
                                            <a href="https://www.ict.mahidol.ac.th/ict-mahidol-organized-an-online-activity-welcome-freshy-2021/" className="activity-name">Head of Game Entertainment for ICT Welcome Freshy 2021 Event</a>
                                            <div className="event-time">Jun 2021 - Aug 2021</div>
                                            <div className="event-detail">For the anticipated 2021 ICT Welcome Freshy event, I undertook the leadership role for the game entertainment segment. My duties encompassed brainstorming, designing, and implementing interactive games tailored to the interests of the incoming ICT department students. The goal was to facilitate bonding and instill a sense of camaraderie among them while ensuring they had a fun and engaging welcome to the academic year.</div>
                                        </div>
                                    </div>

                                    <div className="timeline-event">
                                        <div className="event-description">
                                            <a className="activity-name-p">Head of Group for Welcoming New Students (RakNong 132)</a>
                                            <div className="event-time">Jun 2021 - Aug 2021</div>
                                            <div className="event-detail">As the leader of the entertainment group during the 2021 Welcome event for New Students, titled RakNong 132, I was tasked with crafting a memorable introduction for the freshmen at Mahidol University. Drawing on my experience and insights, I curated a mix of activities and games aimed at fostering connections, introducing university culture, and ensuring that the newcomers felt a genuine sense of belonging and excitement for their upcoming academic journey.</div>
                                        </div>
                                    </div>

                                    <div className="timeline-event">
                                        <div className="event-description">
                                            <a href="https://www.ict.mahidol.ac.th/ict-mahidol-held-the-on-site-muict-open-house-2020-day-1/" className="activity-name">Head of SA for the Open House 2020</a>
                                            <div className="event-time">Sep 2020 - Nov 2020</div>
                                            <div className="event-detail">In 2020, I was assigned the pivotal role of leading special activities for the Open House event at our institution. Recognizing the importance of first impressions, I conceptualized and executed a flowchart-based game booth, tailored specifically for visiting high school students interested in the ICT faculty. This interactive experience aimed to introduce them to the domain in a fun and engaging manner, simultaneously highlighting the innovative spirit of our department.</div>
                                        </div>
                                    </div>

                                </div>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="mb-3 border-0 shadow-sm about-card">
                <Card.Body>
                    <Row>
                        <Col xs={2} className="d-flex align-items-start justify-content-center">
                            <img src="./images/bcc.png" alt="Company Logo" width="150" height="200"/>
                        </Col>
                        <Col xs={10}>
                            <Card.Title className="mb-2">Bangkok Christian College</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Smart Computer · GPAX 3.48</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">May 2008 - Feb 2020</Card.Subtitle>
                            <Card.Text className="mb-3">
                                <strong>Activities and societies:</strong>
                                <div className="timeline">
                                    <div className="timeline-event">
                                        <div className="event-description">
                                            <a className="activity-name-p">Leader of Academic Computer & Careers of Bcc Showcase 2018</a>
                                            <div className="event-detail">I served as the president of the Computer & Careers group during our school's academic day, "The New Frontier" for the BCC Showcase. Our event featured a cooking competition named "BCC FOOD FEST" and a "TECHZONE" highlighting modern innovations, such as a futuristic house concept.</div>
                                        </div>
                                    </div>

                                    <div className="timeline-event">                                      
                                        <div className="event-description">
                                            <a className="activity-name-p">NATIONAL SOFTWARE CONTEST 19TH</a>                                            
                                            <div className="event-detail">This software contest was open to individuals eager to challenge themselves and gain experience in developing and presenting projects. Topics ranged from games and education to applications designed for social assistance.</div>
                                        </div>
                                    </div>

                                    <div className="timeline-event">
                                        <div className="event-description">
                                            <a className="activity-name-p">The 1st KMUTNB Micro-Mechanism Robot Contest (MRC) 2017</a>
                                            <div className="event-detail">This contest was centered around the creation of micro-mechanisms, using small propulsion devices. It emphasized testing robot power and essential techniques. Participants could opt to develop wired or wireless robots, competing in categories like sumo robots and autonomous robots.</div>
                                        </div>
                                    </div>

                                    <div className="timeline-event">
                                        <div className="event-description">
                                            <a className="activity-name-p">WIPCAMP-10</a>
                                            <div className="event-detail">Ways to IT Professional Camp #10 was designed for high school students interested in Information Technology. The camp provided IT curriculum guidance from King Mongkut's University of Technology Thonburi, along with insights into IT fundamentals, computer programming, networking, JAVA programming, and web technology.</div>
                                        </div>
                                    </div>

                                    <div className="timeline-event">
                                        <div className="event-description">
                                            <a className="activity-name-p">BCC167th Anniversary</a>
                                            <div className="event-detail">For our school's 167th Anniversary, I was part of the sponsorship team responsible for fundraising. Additionally, I volunteered as a photographer to document the event.</div>
                                        </div>
                                    </div>

                                    <div className="timeline-event">
                                        <div className="event-description">
                                            <a className="activity-name-p">BCC Sport Day 2018</a>
                                            <div className="event-detail">During BCC's annual sports event, I represented the blue team as a mentor. Our team, alongside the orange team, secured a winning position, highlighting our collaborative efforts and sportsmanship.</div>
                                        </div>
                                    </div>

                                </div>
                            </Card.Text>
                            <Card.Text className="mb-3 mb-3 link-group">
                                    <Card.Link
                                        href="https://drive.google.com/file/d/1XOU3mwjzSV8n1lqWVwv5BV2mxl8e7xJm/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="custom-link"
                                    >
                                        Portfolio
                                    </Card.Link>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </section>
    );
};

export default Education;
