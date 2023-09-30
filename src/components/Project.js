import React from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';

const Projects = () => {
    return (
        <section id="projects" className="my-4">
            <h1 className="mb-4 text-center title-enhanced">Projects</h1>
            <Card className="border-0 shadow-sm about-card">
                <Card.Body>
                    <Card className="project-card" id="oauth">
                        <Card.Img variant="top" src="./images/Picture19.png" alt="Project 2" />
                        <Card.Body>
                            <Card.Title>Detecting Vulnerable OAuth 2.0 Implementations in Android Applications</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">May 2023 - Jul 2023</Card.Subtitle>
                            <Card.Text>
                            I conducted a comprehensive research project focused on investigating the security vulnerabilities of Android applications utilizing OAuth 2.0 with Google accounts, specifically addressing the risks of cross-site request forgery (CSRF) attacks. By developing an Android application and analyzing other Android apps, I assessed the presence or absence of critical components, such as the state parameter and authorization code, which play a crucial role in CSRF attack prevention. The findings from this research allow us to evaluate the level of protection against CSRF attacks in OAuth 2.0 implementation in Android applications. This study aims to enhance user protection by identifying and discouraging the use of vulnerable Android applications employing OAuth 2.0 for social login. It emphasizes the importance of diligent implementation and robust security measures for developers utilizing OAuth 2.0. Additionally, our research demonstrates the potential for examining existing applications for security vulnerabilities and sets a precedent for future security audits in this domain.
                            </Card.Text>
                            <Card.Text>
                                <strong>Skills:</strong> Android Development · OAuth · Application Security · Security · Cybersecurity · Java · Gradle
                            </Card.Text>
                            <Card.Link href="https://github.com/Waariss/Detecting-Vulnerable-OAuth-2.0-Implementations-in-Android-Applications/tree/main" target="_blank" className="btn btn-primary">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="project-card" id="covid">
                        <Card.Img variant="top" src="./images/web.png" alt="Project 2" />
                        <Card.Body>
                            <Card.Title>Detecting Vulnerable OAuth 2.0 Implementations in Web Applications</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">May 2023 - Jul 2023</Card.Subtitle>
                            <Card.Text>
                            In a recent research project, we investigated the security vulnerabilities of web applications using OAuth 2.0 with Google accounts, with a particular focus on the risks associated with cross-site request forgery (CSRF) attacks. We developed a browser extension for the analysis of web applications, examining the presence of critical security components like the state parameter and authorization code. Our findings provide insights into the level of CSRF protection in OAuth 2.0 implementations. This research emphasizes the importance of diligent implementation and robust security for developers using OAuth 2.0. We also demonstrated the potential for using browser extensions to audit existing web applications for security vulnerabilities, setting a precedent for future audits in this domain. This study ultimately aims to enhance user protection by identifying and discouraging the use of vulnerable web applications.
                            </Card.Text>
                            <Card.Text>
                                <strong>Skills:</strong> Chrome Extensions · Firefox Extensions · Web Development · OAuth · Web Application Security · Security · Cybersecurity · React
                            </Card.Text>
                            <Card.Link href="https://oauth-test-web.netlify.app/" target="_blank" className="btn btn-primary">View Project</Card.Link>
                            <Card.Link href="https://github.com/Waariss/Detecting-Vulnerable-OAuth-2.0-Implementations-in-Android-Applications/tree/main" target="_blank" className="btn btn-primary">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4 project-card">
                        <Card.Img variant="top" src="./images/pro1.png" alt="Project 1" />
                        <Card.Body>
                            <Card.Title>Secured Audio Player with Encryption and Decryption Functions</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Mar 2023 - Apr 2023</Card.Subtitle>
                            <Card.Text>
                                I successfully developed an audio player embedded with encryption/decryption functions as part of a project. Using my programming skills and knowledge, I created a web application hosted on Firebase that supports the playback and secure storage of audio files in raw format, such as *.wav. The program automatically encrypts audio files upon saving and decrypts them during playback, ensuring data security and privacy. Through this project, I gained hands-on experience in web development, audio processing, and encryption techniques, showcasing my ability to create secure and user-friendly applications for audio playback and storage.
                            </Card.Text>
                            <Card.Text>
                                <strong>Skills:</strong> Firebase · Web Development · Cryptography · Cybersecurity
                            </Card.Text>
                            <Card.Link href="https://audioplayer-49127.web.app" target="_blank" className="btn btn-primary">View Project</Card.Link>
                            <Card.Link href="https://github.com/Waariss/Secured-Audio-Player-" target="_blank" className="btn btn-primary">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="project-card">
                        <Card.Img variant="top" src="./images/gemini.jpeg" alt="Project 2" />
                        <Card.Body>
                            <Card.Title>Gemini Project</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Jan 2023 - May 2023</Card.Subtitle>
                            <Card.Text>
                            In the Gemini Project, I demonstrated leadership and in-depth understanding of various software engineering diagrams. This project necessitated the creation of Use Case, Activity, Sequence, Class diagrams to design and effectively document a complex telescope system. I demonstrated my proficiency in Java and Spring Boot by implementing the project as a web application, enabling the generation of intricate science plans for telescope systems. This endeavor refined my technical acumen and underscored my ability to translate complex systems into understandable and functional software solutions.
                            </Card.Text>
                            <Card.Text>
                                <strong>Skills:</strong> Spring Boot · Software Design · Web Development · Java · Gradle · Git
                            </Card.Text>
                            <Card.Link href="https://github.com/Waariss/ITCS431_Software-Design-and-Development.git" target="_blank" className="btn btn-primary">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4 project-card">
                        <Card.Img variant="top" src="./images/HCI.png" alt="Project 1" />
                        <Card.Body>
                            <Card.Title>Safe & Go</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Jan 2023 - May 2023</Card.Subtitle>
                            <Card.Text>
                                The project aims to create a new motorcycle transportation service to address the problem faced by people living in the citv who requires a secure and reasonablv priced service. The currentl available motorccle transportation services have unreasonable fare charges and security concerns. This service will ensure security features, offer a user-friendly interface, and also charges a reasonable fare. The project aims to improve the daily lives and experiences of those living in cities and contribute to increasing the options available for motorbike transportation.
                            </Card.Text>
                            <Card.Text>
                                <strong>Skills:</strong> User Experience (UX) · User Interface Design
                            </Card.Text>
                            <Card.Link href="https://sites.google.com/student.mahidol.edu/safeandgophase4/home?authuser=0&pli=1" target="_blank" className="btn btn-primary">View Project</Card.Link>
                            <Card.Link href="https://sites.google.com/student.mahidol.edu/safeandgophase4/phase-4/poster?authuser=0" target="_blank" className="btn btn-primary">Poster</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="project-card">
                        <Card.Img variant="top" src="./images/seeme.jpeg" alt="Project 2" />
                        <Card.Body>
                            <Card.Title>Sea me like I see you</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Aug 2022 - Dec 2022</Card.Subtitle>
                            <Card.Text>
                            I successfully completed a project where I analyzed the requirements of users and the target audience for a web search engine focused on marine life. Utilizing datasets and data integration techniques, I implemented Elasticsearch to fetch relevant information and provide a seamless search experience. By understanding the needs of users and the target audience, I designed and developed a search engine that efficiently retrieves marine life-related data. This project allowed me to enhance my skills in requirements analysis, data integration, and Elasticsearch, showcasing my ability to create effective search solutions for specific domains, such as marine life.
                            </Card.Text>
                            <Card.Text>
                                <strong>Skills:</strong> Flask · Elasticsearch · Web Development · Public Speaking
                            </Card.Text>
                            <Card.Link href="https://github.com/Waariss/ITCS414_Information-Storage-and-Retrieval/tree/main" target="_blank" className="btn btn-primary">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="project-card">
                        <Card.Img variant="top" src="./images/pro3.png" alt="Project 2" />
                        <Card.Body>
                            <Card.Title>Senyai World</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Aug 2022 - Dec 2022</Card.Subtitle>
                            <Card.Text>
                                I successfully deployed a web server on a public cloud platform as part of a project. Utilizing my technical skills and knowledge, I implemented the necessary configurations and infrastructure to host the web server. The deployment process involved selecting the appropriate cloud provider, provisioning resources, setting up security measures, and ensuring high availability. By completing this project, I gained hands-on experience in cloud computing, server administration, and infrastructure deployment, showcasing my ability to efficiently utilize cloud technologies for web hosting purposes.
                            </Card.Text>
                            <Card.Text>
                                <strong>Skills:</strong> Web Development · Amazon Web Services (AWS) · Cloud Computing
                            </Card.Text>
                            <Card.Link href="http://54.255.156.25" target="_blank" className="btn btn-primary">View Project</Card.Link>
                            <Card.Link href="https://github.com/Waariss/Senyai" target="_blank" className="btn btn-primary">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="project-card">
                        <Card.Img variant="top" src="./images/covid.png" alt="Project 2" />
                        <Card.Body>
                            <Card.Title>Automated COVID-19 Screening Framework Using Deep Convolutional Neural Network With Chest X-Ray Medical Images</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Jun 2022 - Aug 2022</Card.Subtitle>
                            <Card.Text>
                            I contributed to a groundbreaking project focused on COVID-19 screening using chest X-rays, published in the 2022 6th International Conference on Information Technology (InCIT). Our research addressed the challenges of manually identifying COVID-19 infections in chest X-ray films, proposing an automated screening framework that leverages artificial intelligence techniques and transfer learning. By employing deep neural networks and Grad-CAM visualization, we achieved accurate and efficient COVID-19 diagnosis. The results, obtained through experimentation on publicly accessible datasets, demonstrated the superior performance of our convolutional neural network model across multiple metrics, including accuracy, precision, recall, and F-measure. This project allowed me to contribute to the early diagnosis of COVID-19 and showcase my expertise in artificial intelligence, deep learning, and medical image analysis.
                            </Card.Text>
                            <Card.Text>
                                <strong>Skills:</strong> Public Speaking · Jupyter · Convolutional Neural Networks (CNN) · Deep Learning · Artificial Intelligence (AI)
                            </Card.Text>
                            <Card.Link href="https://ieeexplore.ieee.org/document/10067528" target="_blank" className="btn btn-primary">View Project</Card.Link>
                            <Card.Link href="https://github.com/Waariss/Automated-COVID-19-screening-framework-via-Deep-Convolutional-Neural-Network-with-Chest-X-ray" target="_blank" className="btn btn-primary">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4 project-card">
                        <Card.Img variant="top" src="./images/mouse.png" alt="Project 1" />
                        <Card.Body>
                            <Card.Title>Little Mouse Mini-Animation Project</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Apr 2022 - May 2022</Card.Subtitle>
                            <Card.Text>
                                In the "Little Mouse" mini-animation project, I combined coding with creativity to bring a playful mouse to life. Users can interact in real-time: dragging along the X-axis changes the background color, while the mouse's eyes follow the cursor's movement. Clicking anywhere alters the mouse's hat color randomly, showcasing the blend of dynamic interactivity and visual design. This project not only honed my coding skills but also emphasized the importance of user interaction in animation.
                            </Card.Text>
                            <Card.Text>
                                <strong>Skills:</strong> JavaScript
                            </Card.Text>
                            <Card.Link href="https://github.com/Waariss/ITCS381--Introduction-to-Multimedia-Systems/tree/main" target="_blank" className="btn btn-primary">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="project-card">
                        <Card.Img variant="top" src="./images/pro2.jpeg" alt="Project 2" />
                        <Card.Body>
                            <Card.Title>Lollipop Music</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Jan 2022 - May 2022</Card.Subtitle>
                            <Card.Text>
                            I successfully designed and developed a project focused on creating a music application called Lollipop Music using React and Node.js. With a passion for music and technology, I utilized my skills to design an intuitive and user-friendly interface for browsing and playing music. Leveraging React for the frontend and Node.js for the backend, I implemented key features such as user authentication, playlist management, and audio playback. This project allowed me to deepen my knowledge of web development, strengthen my skills in React and Node.js, and demonstrate my ability to create engaging and functional music applications. Excited to have contributed to the world of music through technology!
                            </Card.Text>
                            <Card.Text>
                                <strong>Skills:</strong> React.js · Node.js · Web Development · Public Speaking · Postman · Git
                            </Card.Text>
                            <Card.Link href="https://github.com/Waariss/Lollipop_Music_Project" target="_blank" className="btn btn-primary">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </section>
    );
};

export default Projects;
