import React, { useState } from 'react';
import { Card} from 'react-bootstrap';
import '../App.css';
import ReactMarkdown from 'react-markdown';

const projectData = [
    {
        id: "Senior",
        imgSrc: "./images/senior.png",
        title: "🐔ChickenME🐣: Classification Of Chicken Diseases From Fecal Images Via Line OA",
        subtitle: "Aug 2023 - May 2024",
        description: "ChickenME is an advanced diagnostic tool that leverages deep learning to improve disease detection in poultry farming. It uses YOLOv5 for object detection in fecal images, achieving a precision of 87.10%, and ResNet50 for classifying images into four health categories—healthy, Coccidiosis, Salmonella, and Newcastle Disease—with 84% accuracy. The system, trained on 10,500 images from the Zenodo database, is integrated into the LINE platform, making it accessible and user-friendly for poultry farmers to automate disease detection and reduce manual observation errors.",
        skills: ["Python", "Deep Learning", "Convolutional Neural Networks (CNN)", "TensorFlow/Keras", "ResNet50", "OpenCV", "Pandas", "Plotly", "Matplotlib", "NumPy", "YOLO", "Line OA", "PyTorch", "ClearML"],
        links: [
            { url: 'https://waris-damkham.netlify.app/pdf/Proposal', "label": "Proposal" },
            { url: 'https://waris-damkham.netlify.app/pdf/chickenME', "label": "Poster"},
            { url: 'https://waris-damkham.netlify.app/pdf/Def', "label": "Defense"},
            { url: "https://liff.line.me/1645278921-kWRPP32q/?accountId=239mhqhy", "label": "Live View Project" },
        ]
    },
    {
        id: "Fifa",
        imgSrc: "./images/fifa.png",
        title: "🎉 Fifa's Anniversary Special Website🎉",
        subtitle: "Dec 2023",
        description: "Celebrating a year of memories, this website showcases our journey together through a digital memory lane. It's been tailored to tell our unique story, highlighting special moments and milestones. The site is a testament to our shared experiences and the love that has grown between us over the past year.",
        credentials: "This project is a personal adaptation of [Ayush Singh's 'FOLIO' template](https://github.com/ayush013/folio). With deep appreciation for the original design, I've modified and added elements to infuse our personal story into the framework. A heartfelt thanks to Ayush Singh for the inspiration and foundation provided by his remarkable work.",
        skills: ["Next.js", "Tailwind", "JavaScript", "TypeScript", "Web Hosting", "Vercel", "SCSS"],
        links: [
          { "url": "https://one-years.vercel.app/", "label": "Live View Project" },
          { "url": "https://github.com/Waariss/One_Years", "label": "GitHub" }
        ]
    },
    {
        id: "QA_2",
        imgSrc: "./images/QA_2.png",
        title: "🐈 GluayGluay 🍌: Testing for Jelly-Translator: Translation Web App 🪼",
        subtitle: "Aug 2023 - Dec 2023",
        description: "Conducted extensive testing on the Translation Web App using pytest and Robot Framework to ensure a robust and error-free application. This included writing unit tests, system testing, and automating UI testing, with a focus on achieving high code coverage and integrating CI/CD workflows with GitHub Actions.",
        credentials: "Project Jelly-Translator 🪼: Translation Web App created by [Siranut Akarawuthi (PKBSA)](https://github.com/pkbsa/jelly-translator) 🐈🍌",
        skills: ["Python", "pytest", "Selenium WebDriver", "CI/CD", "GitHub Actions", "Robot Framework"],
        links: [
        //   { "url": "https://jellytranslator.siranuta13.repl.co/", "label": "Live View Project" },
          { "url": "https://github.com/Waariss/GluayGluay_Project/tree/master/Project_phase_2", "label": "GitHub" }
        ]
    },
    {
        id: "QA_1",
        imgSrc: "./images/QA.png",
        title: "🐈 GluayGluay 🍌: Testing for Sudoku 👾",
        subtitle: "Aug 2023 - Oct 2023",
        description: "The project entailed enhancing an open-source Sudoku game with additional unit test cases. Emphasis was placed on bolstering test coverage and fortifying the game's logic. Key tasks comprised establishing a Java testing environment via JUnit, crafting an exhaustive array of test cases, and employing Gradle for streamlined build automation and dependency management. A critical aspect of this project was ensuring thorough testing and validation of all potential scenarios, including edge cases, in alignment with the game's specifications. Additionally, this project included setting up CI/CD using GitHub Actions, automating the testing process and ensuring code quality with every push or pull request.",
        credentials: "Project Sudoku 👾: Sudoku App created by [Matt McCoy (mattnenterprise)](https://github.com/mattnenterprise/Sudoku)  🌟",
        skills: ["Java", "JUnit", "Gradle", "Test Case Design", "CI/CD", "GitHub Action", "JaCoCo"],
        links: [{ "url": "https://github.com/Waariss/GluayGluay_Project", "label": "GitHub" }]
    },
    {
        id: "darkweb",
        imgSrc: "./images/darkweb_web.png",
        title: "Senyai's World via Tor Network",
        subtitle: "Oct 2023",
        description: "In a practical exploration of darknet technologies, I successfully hosted a basic website on the Tor network, utilizing Amazon Web Services (AWS) EC2. The project encompassed fundamental server management on an Ubuntu Server, installing and configuring Tor, and ensuring that the static website was accessible via a .onion domain through the Tor browser with includes a GitHub Action for automated checking of the site's accessibility.",
        credentials: "The website can be accessed for viewing on the Tor network at `myl3qbzzngac77vjiiqwfxbzbz7w2xcvcy5uxqvebs2x2traeublopid.onion`",
        skills: ["Amazon EC2", "Web Hosting", "Network Security", "Web Development", "Tor", 'HTML', 'CSS', 'CI/CD' , 'GitHub Action'],
        links: [{ "url": "https://github.com/Waariss/darkweb/tree/main", "label": "GitHub" }]
    },
    {
        id: 'oauth',
        imgSrc: './images/Picture19.png',
        title: 'Detecting Vulnerable OAuth 2.0 Implementations in Android Applications',
        subtitle: 'May 2023 - Jul 2023',
        description: 'I conducted a comprehensive research project focused on investigating the security vulnerabilities of Android applications utilizing OAuth 2.0 with Google accounts, specifically addressing the risks of cross-site request forgery (CSRF) attacks. By developing an Android application and analyzing other Android apps, I assessed the presence or absence of critical components, such as the state parameter and authorization code, which play a crucial role in CSRF attack prevention. The findings from this research allow us to evaluate the level of protection against CSRF attacks in OAuth 2.0 implementation in Android applications. This study aims to enhance user protection by identifying and discouraging the use of vulnerable Android applications employing OAuth 2.0 for social login. It emphasizes the importance of diligent implementation and robust security measures for developers utilizing OAuth 2.0. Additionally, our research demonstrates the potential for examining existing applications for security vulnerabilities and sets a precedent for future security audits in this domain.',
        skills: ['Android Development', 'OAuth', 'Application Security', 'Security', 'Cybersecurity', 'Java', 'Gradle'],
        links: [
            { url: 'https://github.com/Waariss/Oauth2.0', label: 'GitHub' },
            { url: 'https://waris-damkham.netlify.app/pdf/Ritsumeikan_University_Poster', label: 'Poster' },
            { url: 'https://ieeexplore.ieee.org/document/10430018', label: 'Conference Paper' },
        ]
    },
    {
        id: 'oauth_web',
        imgSrc: './images/web.png',
        title: 'Detecting Vulnerable OAuth 2.0 Implementations in Web Applications',
        subtitle: 'May 2023 - Jul 2023',
        description: 'In a recent research project, we investigated the security vulnerabilities of web applications using OAuth 2.0 with Google accounts, with a particular focus on the risks associated with cross-site request forgery (CSRF) attacks. We developed a browser extension for the analysis of web applications, examining the presence of critical security components like the state parameter and authorization code. Our findings provide insights into the level of CSRF protection in OAuth 2.0 implementations. This research emphasizes the importance of diligent implementation and robust security for developers using OAuth 2.0. We also demonstrated the potential for using browser extensions to audit existing web applications for security vulnerabilities, setting a precedent for future audits in this domain. This study ultimately aims to enhance user protection by identifying and discouraging the use of vulnerable web applications.',
        skills: ['Chrome Extensions', 'Firefox Extensions', 'Web Development', 'OAuth', 'Web Application Security', 'Security', 'Cybersecurity'],
        links: [
            { url: 'https://oauth-test-web.netlify.app/', label: 'Live View Project' },
            { url: 'https://github.com/Waariss/Oauth2.0', label: 'GitHub' }
        ]
    },
    {
        id: 'audio',
        imgSrc: './images/pro1.png',
        title: 'Secured Audio Player with Encryption and Decryption Functions',
        subtitle: 'Mar 2023 - Apr 2023',
        description: 'I successfully developed an audio player embedded with encryption/decryption functions as part of a project. Using my programming skills and knowledge, I created a web application hosted on Firebase that supports the playback and secure storage of audio files in raw format, such as *.wav. The program automatically encrypts audio files upon saving and decrypts them during playback, ensuring data security and privacy. Through this project, I gained hands-on experience in web development, audio processing, and encryption techniques, showcasing my ability to create secure and user-friendly applications for audio playback and storage.',
        skills: ['Firebase', 'Web Development', 'Cryptography', 'Cybersecurity', 'React', 'CSS', 'Vite'],
        links: [
            { url: 'https://audioplayer-49127.web.app', label: 'Live View Project' },
            { url: 'https://github.com/Waariss/Secured-Audio-Player-', label: 'GitHub' }
        ]
    },
    {
        id: 'gemini',
        imgSrc: './images/gemini.jpeg',
        title: 'Gemini Project',
        subtitle: 'Jan 2023 - May 2023',
        description: 'In the Gemini Project, I demonstrated leadership and an in-depth understanding of various software engineering diagrams, essential for creating Use Case, Activity, Sequence, and Class diagrams to design and document a complex telescope system. My proficiency in Java and Spring Boot was critical in implementing the project as a web application, facilitating the generation of intricate science plans for telescope systems. Additionally, I built the Docker image for this application and successfully hosted it on Render. This endeavor refined my technical acumen and highlighted my ability to translate complex systems into understandable and functional software solutions.',
        credentials: "**Username**: `Astronomer` **Password**: `Gemini`",
        skills: ['Spring Boot', 'Software Design', 'Web Development', 'Java', 'Gradle', 'Git', 'HTML', 'CSS', 'Docker'],
        links: [
            { url: 'https://github.com/Waariss/ITCS431_Software-Design-and-Development/blob/main/Gemini/Gemini-4.md', label: 'GitHub' },
            { url: 'https://gemini4.onrender.com/', label: 'Live View Project' }
        ]
    },
    {
        id: 'go',
        imgSrc: './images/HCI.png',
        title: 'Safe & Go',
        subtitle: 'Jan 2023 - May 2023',
        description: 'The project aims to create a new motorcycle transportation service to address the problem faced by people living in the citv who requires a secure and reasonablv priced service. The currentl available motorccle transportation services have unreasonable fare charges and security concerns. This service will ensure security features, offer a user-friendly interface, and also charges a reasonable fare. The project aims to improve the daily lives and experiences of those living in cities and contribute to increasing the options available for motorbike transportation.',
        skills: ['User Experience (UX)', 'User Interface Design'],
        links: [
            { url: 'https://sites.google.com/student.mahidol.edu/safeandgophase4/home?authuser=0&pli=1', label: 'Live View Project' },
            { url: 'https://sites.google.com/student.mahidol.edu/safeandgophase4/phase-4/poster?authuser=0', label: 'Poster' }
        ]
    },
    {
        id: 'sea',
        imgSrc: './images/seeme.jpeg',
        title: 'Sea me like I see you',
        subtitle: 'Aug 2022 - Dec 2022',
        description: 'I successfully completed a project where I analyzed the requirements of users and the target audience for a web search engine focused on marine life. Utilizing datasets and data integration techniques, I implemented Elasticsearch to fetch relevant information and provide a seamless search experience. By understanding the needs of users and the target audience, I designed and developed a search engine that efficiently retrieves marine life-related data. This project allowed me to enhance my skills in requirements analysis, data integration, and Elasticsearch, showcasing my ability to create effective search solutions for specific domains, such as marine life.',
        skills: ['Flask', 'Elasticsearch', 'Web Development', 'HTML', 'CSS'],
        links: [
            { url: 'https://github.com/Waariss/ITCS414_Information-Storage-and-Retrieval/tree/main', label: 'GitHub' }
        ]
    },
    {   
        id: 'senyai',
        imgSrc: './images/pro3.png',
        title: 'Senyai World',
        subtitle: 'Aug 2022 - Dec 2022',
        description: 'I successfully deployed a web server using GitHub Pages as part of a project. Leveraging my technical skills and knowledge, I configured the necessary infrastructure and settings to host the web server. The deployment process involved selecting GitHub as a hosting platform, provisioning resources, and ensuring the web server was secure and highly available. Through this project, I acquired hands-on experience in web hosting and server administration, demonstrating my ability to effectively utilize GitHub Pages for web hosting purposes.',
        skills: ['HTML', 'CSS', 'Web Development', 'GitHub Pages', 'Cloud Computing'],
        links: [
            { url: 'https://waariss.github.io/Senyai/', label: 'Live View Project' },
            { url: 'https://github.com/Waariss/Senyai', label: 'GitHub' }
        ]
    },
    {
        id: 'covid',
        imgSrc: './images/covid.png',
        title: 'Automated COVID-19 Screening Framework Using Deep Convolutional Neural Network With Chest X-Ray Medical Images',
        subtitle: 'Jun 2022 - Aug 2022',
        description: 'I contributed to a groundbreaking project focused on COVID-19 screening using chest X-rays, published in the 2022 6th International Conference on Information Technology (InCIT). Our research addressed the challenges of manually identifying COVID-19 infections in chest X-ray films, proposing an automated screening framework that leverages artificial intelligence techniques and transfer learning. By employing deep neural networks and Grad-CAM visualization, we achieved accurate and efficient COVID-19 diagnosis. The results, obtained through experimentation on publicly accessible datasets, demonstrated the superior performance of our convolutional neural network model across multiple metrics, including accuracy, precision, recall, and F-measure. This project allowed me to contribute to the early diagnosis of COVID-19 and showcase my expertise in artificial intelligence, deep learning, and medical image analysis.',
        skills: ["Python", "Jupyter", "Pandas", "NumPy", "OpenCV", "Albumentations", "Plotly", "Matplotlib", "Seaborn", "TensorFlow/Keras", "Deep Learning", "Convolutional Neural Networks (CNN)"],
        links: [
            { url: 'https://ieeexplore.ieee.org/document/10067528', label: 'Conference Paper' },
            { url: 'https://github.com/Waariss/Automated-COVID-19-screening-framework-via-Deep-Convolutional-Neural-Network-with-Chest-X-ray', label: 'GitHub' }
        ]
    },
    {
        id: 'mouse',
        imgSrc: './images/mouse.png',
        title: 'Little Mouse Mini-Animation Project',
        subtitle: 'Apr 2022 - May 2022',
        description: 'In the "Little Mouse" mini-animation project, I combined coding with creativity to bring a playful mouse to life. Users can interact in real-time: dragging along the X-axis changes the background color, while the mouse\'s eyes follow the cursor\'s movement. Clicking anywhere alters the mouse\'s hat color randomly, showcasing the blend of dynamic interactivity and visual design. This project not only honed my coding skills but also emphasized the importance of user interaction in animation.',
        skills: ['JavaScript', 'p5js'],
        links: [
            { url: 'https://github.com/Waariss/ITCS381--Introduction-to-Multimedia-Systems/tree/main', label: 'GitHub' },
            { url: "/p5project", "label": "Live Visit Project"}
        ]
    },
    {
        id: 'lollipop',
        imgSrc: "./images/pro2.jpeg",
        title: "Lollipop Music",
        subtitle: "Jan 2022 - May 2022",
        description: "As the lead designer and developer of Lollipop Music, a dynamic music application built with React and Node.js and hosted on Nginx and Amazon EC2, I combined my passion for music and technology to create an intuitive, user-friendly platform for seamless music browsing and playback. The application features robust user authentication, playlist management, and audio playback functionality. To ensure consistent accessibility and reliability, I integrated a GitHub Action for routine website accessibility checks. This project not only enhanced my web development skills, particularly in React and Node.js, but also underscored my ability to craft engaging digital music experiences. For a hands-on demonstration, access the application using the provided demo credentials on the login page: ",
        credentials: "**Username**: `Senyai_bark@hotmail.com` **Password**: `loveDogs88`.",
        skills: ["React.js", "Node.js", "Web Development", "Public Speaking", "Postman", "Git", "Amazon EC2", "Nignx","CI/CD", "GitHub Action"],
        links: [
            {url: "https://github.com/Waariss/Lollipop_Music_Project", "label": "GitHub"},
            // {url: "http://52.77.69.103/", "label": "Live Visit Project"}
        ]
    }
];

const Projects = () => {
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const handleShow = (project) => {
        console.log("Selected Project ID:", project.id);
        if (selectedProjectId === project.id) {
            setSelectedProjectId(null); // if the same project is clicked, hide the details
        } else {
            setSelectedProjectId(project.id); // store the id of the selected project
        }
    };
    
    return (
        <section id="projects" className="my-4">
            <h1 className="mb-4 text-center title-enhanced">Projects</h1>
            <div className="project-gallery">
                {projectData.map((project, index) => (
                    <div key={index}>
                        <Card className="project-card" onClick={() => handleShow(project)}>
                            <Card.Img 
                                variant="top" 
                                src={project.imgSrc} 
                                alt={project.title} 
                                className="project-image" 
                            />
                            <Card.ImgOverlay className={`project-img-overlay ${selectedProjectId === project.id ? '' : 'image-overlay'}`}>
                                <Card.Title className={`project-title ${selectedProjectId === project.id ? 'white-text' : ''}`}>
                                    {project.title}
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        {selectedProjectId === project.id && (
                            <Card className="border-0 shadow-sm">
                            <div className="project-details">
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
                                        <Card.Link href={link.url} target="_blank" className="btn btn-outline-success" key={link.url}>{link.label}</Card.Link>
                                    ))}
                                </Card.Body>
                            </div>
                            </Card>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
