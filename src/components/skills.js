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
            { name: 'LaTeX', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg' },
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
            { name: 'Next.js', logo: 'https://www.svgrepo.com/show/306466/next-dot-js.svg' },
            { name: 'Tailwind', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
        ]
    },
    {
        name: 'Backend, Frameworks & Testing',
        skills: [
            { name: 'Flask', logo: 'https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg' },
            { name: 'Spring Boot', logo: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg' },
            { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
            { name: 'pytest', logo: 'https://www.vectorlogo.zone/logos/pytest/pytest-icon.svg' },
            { name: 'Selenium WebDriver', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png' },
            { name: 'Junit', logo: 'https://junit.org/junit5/assets/img/junit5-logo.png' },
        ]
    },
    {
        name: 'DevOps, Deployment & Version Control',
        skills: [
            { name: 'Gradle', logo: 'https://www.vectorlogo.zone/logos/gradle/gradle-icon.svg' },
            { name: 'Git', logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
            { name: 'Firebase', logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
            { name: 'AWS EC2', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
            { name: 'PM2', logo: 'https://cdn.worldvectorlogo.com/logos/pm2.svg' },
            { name: 'Nginx', logo: 'https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg' },
            { name: 'Maven', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Apache_Maven_logo.svg/2560px-Apache_Maven_logo.svg.png' },
            { name: 'Ant', logo: 'https://www.vectorlogo.zone/logos/apache_ant/apache_ant-icon.svg' },
            { name: 'CI/CD', logo: 'https://media.licdn.com/dms/image/C4D12AQHEozYv3E5rdA/article-cover_image-shrink_600_2000/0/1612876678427?e=2147483647&v=beta&t=2fLzzpCTVay31sHhzOEZpVwyfJvxwwjkv-LOpZ9P8r8' },
            { name: 'GitHub Actions', logo: 'https://www.vectorlogo.zone/logos/github/github-tile.svg' },
            { name: 'Robot Framework', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Robot-framework-logo.png' },
            { name: 'Docker', logo: 'https://www.vectorlogo.zone/logos/docker/docker-tile.svg' },
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
            { name: 'OWASP', logo: 'https://upload.vectorlogo.zone/logos/owasp/images/d94aaf2a-2dff-4b80-829f-bebf5df933a3.svg' },
            { name: 'Tor', logo: 'https://www.vectorlogo.zone/logos/torproject/torproject-icon.svg' },
        ]
    },
    {
        name: 'Penetration Testing & Networking',
        skills: [
            { name: 'Metasploit', logo: 'https://atomrace.com/blog/wp-content/uploads/2017/10/metasploit-logo.png' },
            { name: 'Kali Linux', logo: 'https://upload.vectorlogo.zone/logos/kali/images/4f107199-98a3-43c2-9d1f-19af3082b59b.svg' },
            { name: 'Burp Suite', logo: 'https://www.kali.org/tools/burpsuite/images/burpsuite-logo.svg' },
            { name: 'Wireshark', logo: 'https://www.vectorlogo.zone/logos/wireshark/wireshark-icon.svg' },
            { name: 'nmap', logo: 'https://raw.githubusercontent.com/file-icons/icons/master/svg/Nmap.svg' },
            { name: 'John the Ripper', logo: 'https://dashboard.snapcraft.io/site_media/appmedia/2016/04/icon_9.png' },
            { name: 'Ghostbuster', logo: 'https://github.com/assetnote/ghostbuster/blob/master/screenshots/ghostbuster.png?raw=true' },
            { name: 'Hashcat', logo: 'https://www.kali.org/tools/hashcat/images/hashcat-logo.svg' },
            { name: 'WebShells', logo: 'https://www.kali.org/tools/webshells/images/webshells-logo.svg'},
            { name: 'Gobuster', logo: 'https://www.kali.org/tools/gobuster/images/gobuster-logo.svg'},
            { name: 'Hydra', logo: 'https://www.kali.org/tools/hydra/images/hydra-logo.svg'},
            { name: 'sqlmap', logo: 'https://www.kali.org/tools/sqlmap/images/sqlmap-logo.svg'},
            { name: 'Exiftool', logo: 'https://avatars.githubusercontent.com/u/8656631?s=200&v=4'},
            { name: 'Nessus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Nessus-Professional-FullColor-RGB.svg/2560px-Nessus-Professional-FullColor-RGB.svg.png'},
            { name: 'GTFOBins', logo: "https://gtfobins.github.io/assets/logo.png"},
            { name: 'LinPEAS', logo: "https://raw.githubusercontent.com/carlospolop/PEASS-ng/master/linPEAS/images/linpeas.png"},
            { name: 'MobSF', logo: "https://repository-images.githubusercontent.com/30102273/ec45ab80-b46b-11e9-9f7f-6db13d2e8507"},
            { name: 'Android Debug Bridge', logo: "https://fossbytes.com/wp-content/uploads/2017/07/ADB.png"}
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
            { name: 'YOLO', logo: 'https://cdn.icon-icons.com/icons2/3915/PNG/512/yolo_logo_icon_249127.png' },
            { name: 'CNN', logo: "https://seeklogo.com/images/C/CNN-logo-6DA92A5BFF-seeklogo.com.png"},
            { name: 'Darknet', logo: "https://miro.medium.com/v2/resize:fit:800/1*bMyMOvHmXZAmuJxwYvsctg.jpeg"},
            { name: 'Ultralytics', logo: 'https://assets-global.website-files.com/646dd1f1a3703e451ba81ecc/6499468f33db295c5a1219ec_Ultralytics_mark_blue.svg'},
            { name: 'PyTorch', logo: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg' },
            { name: 'ClearML', logo: 'https://avatars.githubusercontent.com/u/38647316?s=280&v=4' },
        ]
    },    
    {
        name: 'Operating Systems',
        skills: [
            { name: 'Windows', logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg' },
            { name: 'macOS', logo: 'https://www.vectorlogo.zone/logos/apple/apple-icon.svg' },
            { name: 'Ubuntu', logo: 'https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg' },
            { name: 'Bash', logo: 'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg' },
            { name: 'Zsh', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/zsh.svg' },
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
