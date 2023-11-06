import React from 'react';
import { Card, Carousel, Row, Col } from 'react-bootstrap';
import '../App.css';

const Skills = () => {
    return (
        <section id="skills" className="my-5">
            <h1 className="mb-4 text-center title-enhanced">Skills & Tools</h1>
            <Row>
                {getSkills().map((category, index) => (
                    <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                        <Card className="border-0 shadow-sm skill-card hover-shadow">
                            <Card.Body>
                                <Card.Title className="mb-4">{category.name}</Card.Title>
                                <Carousel indicators={false} className="custom-carousel">
                                    {chunkArray(category.skills, 3).map((chunk, chunkIndex) => (
                                        <Carousel.Item key={chunkIndex}>
                                            <Row>
                                                {chunk.map((skill, skillIndex) => (
                                                    <Col key={skillIndex} xs={4} className="mb-3 text-center">
                                                        <div className="skill-logo-wrapper">
                                                            <div 
                                                                className="skill-logo" 
                                                                style={{backgroundImage: `url(${skill.logo})`}}
                                                            />
                                                        </div>
                                                        <p className="skill-title">{skill.name}</p>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

const getSkills = () => [
    {
        name: 'Programming Languages',
        skills: [
            { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
            { name: 'Java', logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' },
            { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
            { name: 'Markdown', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/2560px-Markdown-mark.svg.png' },
            { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg' },
            { name: 'Dart', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Dart-logo-icon.svg' },
        ]
    },
    {
        name: 'Web Development',
        skills: [
            { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
            { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
            { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
            { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
            { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
            { name: 'p5js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/P5js_Logo.svg' },
        ]
    },
    {
        name: 'Backend & Frameworks',
        skills: [
            { name: 'Flask', logo: 'https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg' },
            { name: 'Spring Boot', logo: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg' },
            { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
        ]
    },
    {
        name: 'Deployment & Version Control',
        skills: [
            { name: 'Gradle', logo: 'https://www.vectorlogo.zone/logos/gradle/gradle-icon.svg' },
            { name: 'Git', logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
            { name: 'Firebase', logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
            { name: 'AWS EC2', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
            { name: 'Nginx', logo: 'https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg' },
            { name: 'Maven', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Apache_Maven_logo.svg/2560px-Apache_Maven_logo.svg.png' },
            { name: 'Ant', logo: 'https://www.vectorlogo.zone/logos/apache_ant/apache_ant-icon.svg' },
        ]
    },
    {
        name: 'Data Management & Search Engines',
        skills: [
            { name: 'MongoDB', logo: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png' },
            { name: 'MySQL', logo: 'https://www.svgrepo.com/show/303251/mysql-logo.svg' },
            { name: 'Elasticsearch', logo: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg' },
        ]
    },
    {
        name: 'Security & Authentication',
        skills: [
            { name: 'OAuth 2.0', logo: 'https://i0.wp.com/www.omnidefend.com/wp-content/uploads/2022/03/0Auth_Trans.png?fit=1014%2C676&ssl=1' },
            { name: 'AES Encryption', logo: 'https://cdn-icons-png.flaticon.com/512/3470/3470475.png' },
            { name: 'Tor', logo: 'https://www.vectorlogo.zone/logos/torproject/torproject-icon.svg' },
        ]
    },
    {
        name: 'Penetration Testing & Networking',
        skills: [
            { name: 'Metasploit', logo: 'https://atomrace.com/blog/wp-content/uploads/2017/10/metasploit-logo.png' },
            { name: 'Kali Linux', logo: 'https://upload.vectorlogo.zone/logos/kali/images/4f107199-98a3-43c2-9d1f-19af3082b59b.svg' },
            { name: 'OWASP', logo: 'https://upload.vectorlogo.zone/logos/owasp/images/d94aaf2a-2dff-4b80-829f-bebf5df933a3.svg' },
            { name: 'Wireshark', logo: 'https://www.vectorlogo.zone/logos/wireshark/wireshark-icon.svg' },
            { name: 'nmap', logo: 'https://raw.githubusercontent.com/file-icons/icons/master/svg/Nmap.svg' },
            { name: 'John the Ripper', logo: 'https://dashboard.snapcraft.io/site_media/appmedia/2016/04/icon_9.png' },
            { name: 'Ghostbuster', logo: 'https://github.com/assetnote/ghostbuster/blob/master/screenshots/ghostbuster.png?raw=true' },
            { name: 'Hashcat', logo: 'https://www.kali.org/tools/hashcat/images/hashcat-logo.svg' },
        ]
    },    
    {
        name: 'Machine & Deep Learning',
        skills: [
            { name: 'TensorFlow', logo: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg' },
            { name: 'Keras', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/2048px-Keras_logo.svg.png' },
            { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
            { name: 'OpenCV', logo: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg' },
            { name: 'Plotly', logo: 'https://www.vectorlogo.zone/logos/plot_ly/plot_ly-icon.svg' },
            { name: 'Matplotlib', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
            { name: 'Seaborn', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/seaborn-icon.svg' },
            { name: 'Albumentations', logo: 'https://albumentations.ai/docs/images/logo.png' },
            { name: 'Pandas', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg' },
            { name: 'NumPy', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg' },
            { name: 'VGG16', logo: 'https://picx.zhimg.com/v2-b2a0c72a4074fc44dcd54d12e485f395_720w.jpg?source=172ae18b' },
            { name: 'ResNet50', logo: 'https://miro.medium.com/v2/resize:fit:1033/0*pBG9EupH3hdprskH.png' },
            { name: 'YOLO', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/yolo.svg' },
        ]
    },    
    {
        name: 'Operating Systems',
        skills: [
            { name: 'Windows', logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg' },
            { name: 'macOS', logo: 'https://www.vectorlogo.zone/logos/apple/apple-icon.svg' },
            { name: 'Ubuntu', logo: 'https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg' },
        ]
    },
];



const chunkArray = (myArray, chunk_size) => {
    var results = [];
    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }
    return results;
};

export default Skills;
