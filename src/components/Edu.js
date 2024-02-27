import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import { FaFileAlt } from 'react-icons/fa'; // New Icons
import '../App.css';

const ImageLogo = ({ src, alt, width, height }) => (
    <img src={src} alt={alt} width={width} height={height} className="rounded-circle" />
);

const calculateAutoplaySpeed = (text) => {
    const words = text.split(' ').length;
    const readingSpeed = 200; 
    return (words / readingSpeed) * 60 * 1000;
};

const getMaxAutoplaySpeed = (activities) => {
    let maxSpeed = 0;
    activities.forEach(activity => {
        const currentSpeed = calculateAutoplaySpeed(activity.detail);
        if (currentSpeed > maxSpeed) {
            maxSpeed = currentSpeed;
        }
    });
    return maxSpeed;
};

const ActivityCard = ({ link, name, detail, time }) => (
    <div className="activity-card">
        {link ? (
            <a href={link} className="activity-name">{name}</a>
        ) : (
            <span className="activity-name-p">{name}</span>
        )}
        {time && <div className="event-time">{time}</div>}
        <div className="event-detail">{detail}</div>
    </div>
);

const EducationEntry = ({ title, subtitle, activities, logo, links }) => (
    <Card className="mb-4 border-0 shadow-sm about-card">
        <Card.Body>
            <Row>
                <Col xs={2} className="d-flex align-items-start justify-content-center p-3">
                    <ImageLogo {...logo} />
                </Col>
                <Col xs={10} className="p-3">
                    <Card.Title className="mb-3">{title}</Card.Title>
                    {subtitle.map((text, index) => (
                        <Card.Subtitle key={index} className="mb-2 text-muted">{text}</Card.Subtitle>
                    ))}
                    <Card.Text className="mb-3 mt-3">
                        <strong>Activities and societies:</strong>
                        <Slider 
                            dots={true}
                            infinite={true}
                            slidesToShow={1}
                            slidesToScroll={1}
                            arrows={false}
                            autoplay= {true}
                            speed= {1000}
                            autoplaySpeed={getMaxAutoplaySpeed(activities)}
                            cssEase = "linear"
                        >
                            {activities.map((activity, index) => (
                                <ActivityCard key={index} {...activity} />
                            ))}
                        </Slider>
                    </Card.Text>
                    {links && (
                        <Card.Text className="mb-3 link-group mt-3">
                            {links.map((link, index) => (
                                <Card.Link
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-dark"
                                >
                                    <FaFileAlt className="me-1" /> {link.text}
                                </Card.Link>
                            ))}
                        </Card.Text>
                    )}
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

const Education = () => {

    const HacktheboxData = {
        title: "Self-Learning on HackTheBox",
        subtitle: ["Online Platform for Cybersecurity Training"],
        logo: {
            src: "https://static-00.iconduck.com/assets.00/hack-the-box-icon-512x512-pokr8xc5.png",
            alt: "HackTheBox Logo",
            width: 150,
            height: 150
        },
        activities: [
            {
                link: "https://app.hackthebox.com/profile/1458142",
                name: "Hacker",
                detail: "HackTheBox Profile"
            },
        ]
    };

    const tryHackMeData = {
        title: "Self-Learning on TryHackMe",
        subtitle: ["Online Platform for Cybersecurity Training"],
        logo: {
            src: "https://tryhackme.com/img/favicon.png",
            alt: "TryHackMe Logo",
            width: 150,
            height: 150
        },
        activities: [
            {
                link: "https://tryhackme.com/p/waris.dam",
                name: "waris.dam [0x9][0MN1]",
                detail: "TryHackMe Profile"
            },
        ]
    };

    const mahidolData = {
        title: "Bachelor of Science in Information and Communication Technology",
        subtitle: [
            "Mahidol University, Thailand 🇹🇭",
            "International Program",
            "Aug 2020 - May 2024"
        ],
        logo: {
            src: "./images/Mahidol_U.png",
            alt: "Mahidol University Logo",
            width: 140,
            height: 140
        },
        activities: [
            {
                link: "https://www.ict.mahidol.ac.th/ict-students-internship-poster-exhibition-2023/",
                name: "ICT Internship Poster Exhibition 2023 at ICT Mahidol",
                time: "Sep 2023",
                detail: "Joined the exhibition showcasing B.Sc. ICT International Program student internships. Proudly shared my experience from Ritsumeikan University among esteemed peers. An enriching platform for insights and networking."
            },
            {
                name: "MC in ICT & DST Open House",
                time: "Jun 2021 - Aug 2021",
                detail: "In the esteemed ICT and DST Open Houses, I had the privilege of serving as the Master of Ceremony. This role involved introducing speakers, guiding the event's flow, and ensuring that attendees felt welcomed and engaged. My primary responsibility was to foster an enthusiastic environment while seamlessly transitioning between the event's various segments, ensuring a memorable experience for new students."
            },
            {
                link: "https://www.ict.mahidol.ac.th/ict-mahidol-organized-an-online-activity-welcome-freshy-2021/",
                name: "Head of Game Entertainment for ICT Welcome Freshy 2021 Event",
                time: "Jun 2021 - Aug 2021",
                detail: "For the anticipated 2021 ICT Welcome Freshy event, I undertook the leadership role for the game entertainment segment. My duties encompassed brainstorming, designing, and implementing interactive games tailored to the interests of the incoming ICT department students. The goal was to facilitate bonding and instill a sense of camaraderie among them while ensuring they had a fun and engaging welcome to the academic year."
            },
            {
                name: "Head of Group for Welcoming New Students (RakNong 132)",
                time: "Jun 2021 - Aug 2021",
                detail: "As the leader of the entertainment group during the 2021 Welcome event for New Students, titled RakNong 132, I was tasked with crafting a memorable introduction for the freshmen at Mahidol University. Drawing on my experience and insights, I curated a mix of activities and games aimed at fostering connections, introducing university culture, and ensuring that the newcomers felt a genuine sense of belonging and excitement for their upcoming academic journey."
            },  
            {
                link: "https://www.ict.mahidol.ac.th/ict-mahidol-held-the-on-site-muict-open-house-2020-day-1/",
                name: "Head of SA for the Open House 2020",
                time: "Sep 2020 - Nov 2020",
                detail: "In 2020, I was assigned the pivotal role of leading special activities for the Open House event at our institution. Recognizing the importance of first impressions, I conceptualized and executed a flowchart-based game booth, tailored specifically for visiting high school students interested in the ICT faculty. This interactive experience aimed to introduce them to the domain in a fun and engaging manner, simultaneously highlighting the innovative spirit of our department."
            }
        ]
    };

    const bccData = {
        title: "Bangkok Christian College",
        subtitle: ["Smart Computer · GPAX 3.48", "May 2008 - Feb 2020"],
        logo: {
            src: "./images/bcc.png",
            alt: "Bangkok Christian College Logo",
            width: 150,
            height: 200
        },
        activities: [
            {
                name: "Leader of Academic Computer & Careers of Bcc Showcase 2018",
                detail: "I served as the president of the Computer & Careers group during our school's academic day, 'The New Frontier' for the BCC Showcase. Our event featured a cooking competition named 'BCC FOOD FEST' and a 'TECHZONE' highlighting modern innovations, such as a futuristic house concept."
            },
            {
                name: "NATIONAL SOFTWARE CONTEST 19TH",
                detail: "This software contest was open to individuals eager to challenge themselves and gain experience in developing and presenting projects. Topics ranged from games and education to applications designed for social assistance."
            },
            {
                name: "The 1st KMUTNB Micro-Mechanism Robot Contest (MRC) 2017",
                detail: "This contest was centered around the creation of micro-mechanisms, using small propulsion devices. It emphasized testing robot power and essential techniques. Participants could opt to develop wired or wireless robots, competing in categories like sumo robots and autonomous robots."
            },
            {
                name: "WIPCAMP-10",
                detail: "Ways to IT Professional Camp #10 was designed for high school students interested in Information Technology. The camp provided IT curriculum guidance from King Mongkut's University of Technology Thonburi, along with insights into IT fundamentals, computer programming, networking, JAVA programming, and web technology."
            },
            {
                name: "BCC167th Anniversary",
                detail: "For our school's 167th Anniversary, I was part of the sponsorship team responsible for fundraising. Additionally, I volunteered as a photographer to document the event."
            },
            {
                name: "BCC Sport Day 2018",
                detail: "During BCC's annual sports event, I represented the blue team as a mentor. Our team, alongside the orange team, secured a winning position, highlighting our collaborative efforts and sportsmanship."
            }
        ],
        links: [
            {
                href: "/pdf/BCC_Portfoilio",
                text: "Portfolio"
            }
        ]
    };

    return (
        <section id="education" className="my-4">
            <h1 className="mb-4 text-center title-enhanced">Education</h1>
            <EducationEntry {...HacktheboxData} />
            <EducationEntry {...tryHackMeData} />
            <EducationEntry {...mahidolData} />
            <EducationEntry {...bccData} />
        </section>
    );
};

export default Education;
