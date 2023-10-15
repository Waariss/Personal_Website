import React from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';
import ReactMarkdown from 'react-markdown';

const projectData = [
    {
        id: "darkweb",
        imgSrc: "./images/darkweb_web.png",
        title: "Senyai's World via Tor Network",
        subtitle: "Oct 2023",
        description: "In a practical exploration of darknet technologies, I successfully hosted a basic website on the Tor network, utilizing Amazon Web Services (AWS) EC2. The project encompassed fundamental server management on an Ubuntu Server, installing and configuring Tor, and ensuring that the static website was accessible via a .onion domain through the Tor browser.",
        credentials: "The website can be accessed for viewing on the Tor network at `myl3qbzzngac77vjiiqwfxbzbz7w2xcvcy5uxqvebs2x2traeublopid.onion`",
        skills: ["Amazon EC2", "Web Hosting", "Network Security", "Web Development", "Tor"],
        links: [{ "url": "https://github.com/Waariss/darkweb/tree/main", "label": "GitHub" }]
    },
    {
        id: 'oauth',
        imgSrc: './images/Picture19.png',
        title: 'Detecting Vulnerable OAuth 2.0 Implementations in Android Applications',
        subtitle: 'May 2023 - Jul 2023',
        description: 'I conducted a comprehensive research project focused on investigating the security vulnerabilities of Android applications utilizing OAuth 2.0 with Google accounts, specifically addressing the risks of cross-site request forgery (CSRF) attacks. By developing an Android application and analyzing other Android apps, I assessed the presence or absence of critical components, such as the state parameter and authorization code, which play a crucial role in CSRF attack prevention. The findings from this research allow us to evaluate the level of protection against CSRF attacks in OAuth 2.0 implementation in Android applications. This study aims to enhance user protection by identifying and discouraging the use of vulnerable Android applications employing OAuth 2.0 for social login. It emphasizes the importance of diligent implementation and robust security measures for developers utilizing OAuth 2.0. Additionally, our research demonstrates the potential for examining existing applications for security vulnerabilities and sets a precedent for future security audits in this domain.',
        skills: ['Android Development', 'OAuth', 'Application Security', 'Security', 'Cybersecurity', 'Java', 'Gradle'],
        links: [{ url: 'https://github.com/Waariss/Detecting-Vulnerable-OAuth-2.0-Implementations-in-Android-Applications/tree/main', label: 'GitHub' }]
    },
    {
        id: 'covid',
        imgSrc: './images/web.png',
        title: 'Detecting Vulnerable OAuth 2.0 Implementations in Web Applications',
        subtitle: 'May 2023 - Jul 2023',
        description: 'In a recent research project, we investigated the security vulnerabilities of web applications using OAuth 2.0 with Google accounts, with a particular focus on the risks associated with cross-site request forgery (CSRF) attacks. We developed a browser extension for the analysis of web applications, examining the presence of critical security components like the state parameter and authorization code. Our findings provide insights into the level of CSRF protection in OAuth 2.0 implementations. This research emphasizes the importance of diligent implementation and robust security for developers using OAuth 2.0. We also demonstrated the potential for using browser extensions to audit existing web applications for security vulnerabilities, setting a precedent for future audits in this domain. This study ultimately aims to enhance user protection by identifying and discouraging the use of vulnerable web applications.',
        skills: ['Chrome Extensions', 'Firefox Extensions', 'Web Development', 'OAuth', 'Web Application Security', 'Security', 'Cybersecurity', 'React'],
        links: [
            { url: 'https://oauth-test-web.netlify.app/', label: 'View Project' },
            { url: 'https://github.com/Waariss/Detecting-Vulnerable-OAuth-2.0-Implementations-in-Android-Applications/tree/main', label: 'GitHub' }
        ]
    },
    {
        imgSrc: './images/pro1.png',
        title: 'Secured Audio Player with Encryption and Decryption Functions',
        subtitle: 'Mar 2023 - Apr 2023',
        description: 'I successfully developed an audio player embedded with encryption/decryption functions as part of a project. Using my programming skills and knowledge, I created a web application hosted on Firebase that supports the playback and secure storage of audio files in raw format, such as *.wav. The program automatically encrypts audio files upon saving and decrypts them during playback, ensuring data security and privacy. Through this project, I gained hands-on experience in web development, audio processing, and encryption techniques, showcasing my ability to create secure and user-friendly applications for audio playback and storage.',
        skills: ['Firebase', 'Web Development', 'Cryptography', 'Cybersecurity'],
        links: [
            { url: 'https://audioplayer-49127.web.app', label: 'View Project' },
            { url: 'https://github.com/Waariss/Secured-Audio-Player-', label: 'GitHub' }
        ]
    },
    {
        imgSrc: './images/gemini.jpeg',
        title: 'Gemini Project',
        subtitle: 'Jan 2023 - May 2023',
        description: 'In the Gemini Project, I demonstrated leadership and in-depth understanding of various software engineering diagrams. This project necessitated the creation of Use Case, Activity, Sequence, Class diagrams to design and effectively document a complex telescope system. I demonstrated my proficiency in Java and Spring Boot by implementing the project as a web application, enabling the generation of intricate science plans for telescope systems. This endeavor refined my technical acumen and underscored my ability to translate complex systems into understandable and functional software solutions.',
        skills: ['Spring Boot', 'Software Design', 'Web Development', 'Java', 'Gradle', 'Git'],
        links: [
            { url: 'https://github.com/Waariss/ITCS431_Software-Design-and-Development.git', label: 'GitHub' }
        ]
    },
    {
        imgSrc: './images/HCI.png',
        title: 'Safe & Go',
        subtitle: 'Jan 2023 - May 2023',
        description: 'The project aims to create a new motorcycle transportation service to address the problem faced by people living in the citv who requires a secure and reasonablv priced service. The currentl available motorccle transportation services have unreasonable fare charges and security concerns. This service will ensure security features, offer a user-friendly interface, and also charges a reasonable fare. The project aims to improve the daily lives and experiences of those living in cities and contribute to increasing the options available for motorbike transportation.',
        skills: ['User Experience (UX)', 'User Interface Design'],
        links: [
            { url: 'https://sites.google.com/student.mahidol.edu/safeandgophase4/home?authuser=0&pli=1', label: 'View Project' },
            { url: 'https://sites.google.com/student.mahidol.edu/safeandgophase4/phase-4/poster?authuser=0', label: 'Poster' }
        ]
    },
    {
        imgSrc: './images/seeme.jpeg',
        title: 'Sea me like I see you',
        subtitle: 'Aug 2022 - Dec 2022',
        description: 'I successfully completed a project where I analyzed the requirements of users and the target audience for a web search engine focused on marine life. Utilizing datasets and data integration techniques, I implemented Elasticsearch to fetch relevant information and provide a seamless search experience. By understanding the needs of users and the target audience, I designed and developed a search engine that efficiently retrieves marine life-related data. This project allowed me to enhance my skills in requirements analysis, data integration, and Elasticsearch, showcasing my ability to create effective search solutions for specific domains, such as marine life.',
        skills: ['Flask', 'Elasticsearch', 'Web Development', 'Public Speaking'],
        links: [
            { url: 'https://github.com/Waariss/ITCS414_Information-Storage-and-Retrieval/tree/main', label: 'GitHub' }
        ]
    },
    {
        imgSrc: './images/pro3.png',
        title: 'Senyai World',
        subtitle: 'Aug 2022 - Dec 2022',
        description: 'I successfully deployed a web server using GitHub Pages as part of a project. Leveraging my technical skills and knowledge, I configured the necessary infrastructure and settings to host the web server. The deployment process involved selecting GitHub as a hosting platform, provisioning resources, and ensuring the web server was secure and highly available. Through this project, I acquired hands-on experience in web hosting and server administration, demonstrating my ability to effectively utilize GitHub Pages for web hosting purposes.',
        skills: ['Web Development', 'GitHub Pages', 'Cloud Computing'],
        links: [
            { url: 'https://waariss.github.io/Senyai/', label: 'View Project' },
            { url: 'https://github.com/Waariss/Senyai', label: 'GitHub' }
        ]
    },
    {
        imgSrc: './images/covid.png',
        title: 'Automated COVID-19 Screening Framework Using Deep Convolutional Neural Network With Chest X-Ray Medical Images',
        subtitle: 'Jun 2022 - Aug 2022',
        description: 'I contributed to a groundbreaking project focused on COVID-19 screening using chest X-rays, published in the 2022 6th International Conference on Information Technology (InCIT). Our research addressed the challenges of manually identifying COVID-19 infections in chest X-ray films, proposing an automated screening framework that leverages artificial intelligence techniques and transfer learning. By employing deep neural networks and Grad-CAM visualization, we achieved accurate and efficient COVID-19 diagnosis. The results, obtained through experimentation on publicly accessible datasets, demonstrated the superior performance of our convolutional neural network model across multiple metrics, including accuracy, precision, recall, and F-measure. This project allowed me to contribute to the early diagnosis of COVID-19 and showcase my expertise in artificial intelligence, deep learning, and medical image analysis.',
        skills: ['Public Speaking', 'Jupyter', 'Convolutional Neural Networks (CNN)', 'Deep Learning', 'Artificial Intelligence (AI)'],
        links: [
            { url: 'https://ieeexplore.ieee.org/document/10067528', label: 'View Project' },
            { url: 'https://github.com/Waariss/Automated-COVID-19-screening-framework-via-Deep-Convolutional-Neural-Network-with-Chest-X-ray', label: 'GitHub' }
        ]
    },
    {
        imgSrc: './images/mouse.png',
        title: 'Little Mouse Mini-Animation Project',
        subtitle: 'Apr 2022 - May 2022',
        description: 'In the "Little Mouse" mini-animation project, I combined coding with creativity to bring a playful mouse to life. Users can interact in real-time: dragging along the X-axis changes the background color, while the mouse\'s eyes follow the cursor\'s movement. Clicking anywhere alters the mouse\'s hat color randomly, showcasing the blend of dynamic interactivity and visual design. This project not only honed my coding skills but also emphasized the importance of user interaction in animation.',
        skills: ['JavaScript'],
        links: [
            { url: 'https://github.com/Waariss/ITCS381--Introduction-to-Multimedia-Systems/tree/main', label: 'GitHub' }
        ]
    },
    {
        imgSrc: "./images/pro2.jpeg",
        title: "Lollipop Music",
        subtitle: "Jan 2022 - May 2022",
        description: "I spearheaded the design and development of a vibrant music application named Lollipop Music, leveraging React for the frontend and Node.js for the backend, and hosted it on Nignx and Amazon EC2 instance. With a fervent passion for music and technology, I crafted an intuitive and user-friendly platform that ensures a seamless music browsing and playback experience. The application features user authentication, playlist management, and audio playback, aiming to enhance user interactions with their favorite tunes. This project not only bolstered my expertise in web development and honed my skills in React and Node.js but also showcased my capacity to create engaging and functional music applications. It was a thrilling journey to merge the realms of music and technology, and I'm excited to contribute to the digital music space! For a hands-on experience, you can access the application using the demo credentials provided on the login page: ",
        credentials: "**Username**: `Senyai_bark@hotmail.com`, **Password**: `loveDogs88`.",
        skills: ["React.js", "Node.js", "Web Development", "Public Speaking", "Postman", "Git", "Amazon EC2", "Nignx"],
        links: [
            {url: "https://github.com/Waariss/Lollipop_Music_Project", "label": "GitHub"},
            {url: "http://47.128.71.255/", "label": "Visit Project"}
        ]
    }
];

const Projects = () => {
    return (
        <section id="projects" className="my-4">
            <h1 className="mb-4 text-center title-enhanced">Projects</h1>
            <Card className="border-0 shadow-sm about-card">
                <Card.Body>
                    {projectData.map((project, index) => (
                        <Card key={index} className="project-card" id={project.id}>
                            <Card.Img variant="top" src={project.imgSrc} alt={project.title} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{project.subtitle}</Card.Subtitle>
                                <Card.Text>
                                    {project.description}
                                    <ReactMarkdown className="markdown-credentials">{project.credentials}</ReactMarkdown>
                                </Card.Text>
                                <Card.Text>
                                    <strong>Skills:</strong> {project.skills.join(' · ')}
                                </Card.Text>
                                {project.links.map(link => (
                                    <Card.Link href={link.url} target="_blank" className="btn btn-primary" key={link.url}>{link.label}</Card.Link>
                                ))}
                            </Card.Body>
                        </Card>
                    ))}
                </Card.Body>
            </Card>
        </section>
    );
};


export default Projects;