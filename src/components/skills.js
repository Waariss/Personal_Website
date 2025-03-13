import React from 'react';
import { Card, Carousel, Row, Col } from 'react-bootstrap';
import '../App.css';

const Skills = () => {
    return (
        <section id="skills" className="my-5">
            <h1 className="mb-4 text-center title-enhanced">Skills &amp; Tools</h1>
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
                                                                style={{ backgroundImage: `url(${skill.logo})` }}
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

// ---------- 9 Categories, "Security & Authentication" removed, replaced with "Productivity & Collaboration" ----------
const getSkills = () => [
    /* 1 */ {
        name: 'Programming Languages',
        skills: [
            { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
            { name: 'Java', logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' },
            { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
            { name: 'Markdown', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/2560px-Markdown-mark.svg.png' },
            { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg' },
            { name: 'Dart', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Dart-logo-icon.svg' },
            { name: 'LaTeX', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg' },
            { name: 'Bash', logo: 'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg' },
        ],
    },
    /* 2 */ {
        name: 'Web Development',
        skills: [
            { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
            { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
            { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
            { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
            { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
            { name: 'p5.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/P5js_Logo.svg' },
            { name: 'Next.js', logo: 'https://www.svgrepo.com/show/306466/next-dot-js.svg' },
            { name: 'Tailwind CSS', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
        ],
    },
    /* 3 */ {
        name: 'Backend, Frameworks & Testing',
        skills: [
            { name: 'Flask', logo: 'https://static-00.iconduck.com/assets.00/flask-icon-1594x2048-84mjydzf.png' },
            { name: 'Spring Boot', logo: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg' },
            { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
            { name: 'pytest', logo: 'https://www.vectorlogo.zone/logos/pytest/pytest-icon.svg' },
            { name: 'Selenium WebDriver', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png' },
            { name: 'JUnit', logo: 'https://junit.org/junit5/assets/img/junit5-logo.png' },
            { name: 'Robot Framework', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Robot-framework-logo.png' },
        ],
    },
    /* 4 */ {
        name: 'Data Management & Search Engines',
        skills: [
            { name: 'MongoDB', logo: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png' },
            { name: 'MySQL', logo: 'https://www.svgrepo.com/show/303251/mysql-logo.svg' },
            { name: 'Elasticsearch', logo: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg' },
        ],
    },
    /* 5 */ {
        name: 'Cloud & Container Platforms',
        skills: [
            { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
            { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png' },
            { name: 'Huawei Cloud', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1200px-Huawei_Standard_logo.svg.png' },
            { name: 'Docker', logo: 'https://www.vectorlogo.zone/logos/docker/docker-tile.svg' },
            { name: 'OpenShift', logo: 'https://www.vectorlogo.zone/logos/openshift/openshift-icon.svg' },
            { name: 'Firebase', logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
            { name: 'Nginx', logo: 'https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg' },
        ],
    },
    /* 6 */ {
        name: 'DevOps & CI/CD Tools',
        skills: [
            { name: 'Git', logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
            { name: 'GitHub Actions', logo: 'https://www.vectorlogo.zone/logos/github/github-tile.svg' },
            { name: 'Jenkins', logo: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg' },
            { name: 'Gradle', logo: 'https://www.vectorlogo.zone/logos/gradle/gradle-icon.svg' },
            { name: 'Maven', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Apache_Maven_logo.svg/2560px-Apache_Maven_logo.svg.png' },
            { name: 'Ant', logo: 'https://www.vectorlogo.zone/logos/apache_ant/apache_ant-icon.svg' },
            { name: 'PM2', logo: 'https://cdn.worldvectorlogo.com/logos/pm2.svg' },
        ],
    },
    /* 7 */ {
        name: 'Penetration Testing & Vulnerability Assessment',
        skills: [
            { name: 'Metasploit', logo: 'https://atomrace.com/blog/wp-content/uploads/2017/10/metasploit-logo.png' },
            { name: 'Kali Linux', logo: 'https://upload.vectorlogo.zone/logos/kali/images/4f107199-98a3-43c2-9d1f-19af3082b59b.svg' },
            { name: 'Burp Suite', logo: 'https://www.kali.org/tools/burpsuite/images/burpsuite-logo.svg' },
            { name: 'Wireshark', logo: 'https://www.vectorlogo.zone/logos/wireshark/wireshark-icon.svg' },
            { name: 'nmap', logo: 'https://raw.githubusercontent.com/file-icons/icons/master/svg/Nmap.svg' },
            { name: 'John the Ripper', logo: 'https://dashboard.snapcraft.io/site_media/appmedia/2016/04/icon_9.png' },
            { name: 'Ghostbuster', logo: 'https://github.com/assetnote/ghostbuster/blob/master/screenshots/ghostbuster.png?raw=true' },
            { name: 'Hashcat', logo: 'https://www.kali.org/tools/hashcat/images/hashcat-logo.svg' },
            { name: 'WebShells', logo: 'https://www.kali.org/tools/webshells/images/webshells-logo.svg' },
            { name: 'Gobuster', logo: 'https://www.kali.org/tools/gobuster/images/gobuster-logo.svg' },
            { name: 'Hydra', logo: 'https://www.kali.org/tools/hydra/images/hydra-logo.svg' },
            { name: 'sqlmap', logo: 'https://www.kali.org/tools/sqlmap/images/sqlmap-logo.svg' },
            { name: 'Exiftool', logo: 'https://avatars.githubusercontent.com/u/8656631?s=200&v=4' },
            { name: 'Nessus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Nessus-Professional-FullColor-RGB.svg/2560px-Nessus-Professional-FullColor-RGB.svg.png' },
            { name: 'GTFOBins', logo: 'https://gtfobins.github.io/assets/logo.png' },
            { name: 'LinPEAS', logo: 'https://raw.githubusercontent.com/carlospolop/PEASS-ng/master/linPEAS/images/linpeas.png' },
            { name: 'MobSF', logo: 'https://repository-images.githubusercontent.com/30102273/ec45ab80-b46b-11e9-9f7f-6db13d2e8507' },
            { name: 'Android Debug Bridge', logo: 'https://fossbytes.com/wp-content/uploads/2017/07/ADB.png' },
            { name: 'OpenVas', logo: 'https://miro.medium.com/v2/resize:fit:954/1*ssgbiwYHOi9gIXt9pGCJYw.png' },
            { name: 'NamicSoft', logo: 'https://media.imgcdn.org/repo/2024/02/namicsoft-scan-report-assistant/65cb4ea8b27f1-namicsoft-scan-report-assistant-Icon.webp' },
        ],
    },
    /* 8 */ {
        name: 'Machine & Deep Learning',
        skills: [
            { name: 'TensorFlow', logo: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg' },
            { name: 'Keras', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/2048px-Keras_logo.svg.png' },
            { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
            { name: 'OpenCV', logo: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg' },
            { name: 'Matplotlib', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
            { name: 'Seaborn', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/seaborn-icon.svg' },
            { name: 'Albumentations', logo: 'https://albumentations.ai/docs/images/logo.png' },
            { name: 'Pandas', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg' },
            { name: 'NumPy', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg' },
            { name: 'VGG16', logo: 'https://picx.zhimg.com/v2-b2a0c72a4074fc44dcd54d12e485f395_720w.jpg?source=172ae18b' },
            { name: 'ResNet50', logo: 'https://miro.medium.com/v2/resize:fit:1033/0*pBG9EupH3hdprskH.png' },
            { name: 'YOLO', logo: 'https://cdn.icon-icons.com/icons2/3915/PNG/512/yolo_logo_icon_249127.png' },
            { name: 'CNN', logo: 'https://seeklogo.com/images/C/CNN-logo-6DA92A5BFF-seeklogo.com.png' },
            { name: 'Darknet', logo: 'https://miro.medium.com/v2/resize:fit:800/1*bMyMOvHmXZAmuJxwYvsctg.jpeg' },
            { name: 'Ultralytics', logo: 'https://assets-global.website-files.com/646dd1f1a3703e451ba81ecc/6499468f33db295c5a1219ec_Ultralytics_mark_blue.svg' },
            { name: 'PyTorch', logo: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg' },
            { name: 'ClearML', logo: 'https://avatars.githubusercontent.com/u/38647316?s=280&v=4' },
        ],
    },
    /* 9 (NEW) */ {
        name: 'Productivity & Collaboration',
        skills: [
            { 
                name: 'Microsoft Word', 
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png' 
            },
            { 
                name: 'Microsoft PowerPoint', 
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/800px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png' 
            },
            { 
                name: 'Microsoft Excel', 
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1920px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png' 
            },
            { 
                name: 'Power Automate', 
                logo: 'https://www.dsaict.eu/web/image/product.template/2651/image_1024?unique=fadeebe' 
            },
            { 
                name: 'Copilot Studio', 
                logo: 'https://aiblog.es/wp-content/uploads/2024/10/Microsoft-Copilot-Studio-Advanced-Training-1-1.webp' 
            },
            {
                name: 'Line Office Account',
                logo: 'https://play-lh.googleusercontent.com/jSuWySmy_T3qzqyTkwtffwTeGLGnT5AfA00JFMlBNW3Hq8WXvFfXz7cpi70H2Pqra8H3'
            }
        ],
    },
];

function chunkArray(myArray, chunkSize) {
    const results = [];
    // Use a copy so we don't mutate the original array
    const tempArray = [...myArray];
    while (tempArray.length) {
        results.push(tempArray.splice(0, chunkSize));
    }
    return results;
}

export default Skills;