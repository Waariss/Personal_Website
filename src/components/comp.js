import React from 'react';
import { Card} from 'react-bootstrap';
import Slider from 'react-slick';
import '../App.css';

const Competitions = () => {

    const settings = {
        dots: true,
        infinite: true,
        arrows : false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed : 5000 ,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section id="competitions" className="my-5">
            <h1 className="mb-4 text-center title-enhanced">Competitions</h1>
            <Slider {...settings} className="comp">
                {getCompetitions().map((competition, index) => (
                    <div key={index} className="competition-card">
                        <Card className="">
                            <img src={competition.certificateImage} alt="Competition Certificate" className="certificate-image" />
                            <Card.Body>
                                <Card.Title className="competition-title">{competition.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{competition.date}</Card.Subtitle>
                                <Card.Text>{competition.description}</Card.Text>
                                <Card.Text>
                                    <strong>Skills:</strong> <span className="skills">{competition.skills}</span>
                                </Card.Text>
                                <Card.Text className="link-group">
                                    {competition.links.map((link, linkIndex) => (
                                        <Card.Link
                                            key={linkIndex}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-dark"
                                        >
                                            {link.label}
                                        </Card.Link>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

const getCompetitions = () => [
    {
        certificateImage: "./images/pico.png",
        title: 'picoCTF 2024',
        date: 'Mar 2024',
        description: 'picoCTF is the largest cybersecurity hacking competition for middle, high school, and college students. Participants 13 years and older of all skill levels are encouraged to compete. Competitors must reverse-engineer, break, hack, decrypt, and think creatively and critically to solve the challenges and capture the digital flags.',
        skills: 'Cybersecurity, Web Exploitation, Forensics, Reverse Engineering, General Skills, Cryptography , Binary Exploitation',
        links: [
            { url: 'https://picoctf.org/competitions/2024-spring.html', type: 'news', label: 'Website' },
            { url: 'https://wariss-writeup.gitbook.io/writeup/hacker-royale-writeup-cyber-apocalypse-ctf-2024', type: 'paper', label: 'CTF Writeup' }
        ]
    },   
    {
        certificateImage: "./images/HTBA.png",
        title: 'CYBER APOCALYPSE CTF 2024 Hacker Royale',
        date: 'Mar 2024',
        description: 'As the dust settles on the virtual battlegrounds of Hacker Royale, our team at KPMG Thailand emerged with a tale of digital valiance. Pwned flags: 9. Our rank: 195th. With 10,525 points to our name, we tackled 35 out of 67 challenges, each representing a milestone in our relentless pursuit of cybersecurity excellence. After pwned another flag, bringing our total to 10, I gave one flag to my friend, keeping our count at 9.',
        skills: 'Cybersecurity, Web Application Security, Digital Forensics, Reverse Engineering, Pwn, Misc, Hardware, Cryptography, BlockChain',
        links: [
            { url: '/pdf/HTBA_2024', type: 'news', label: 'Show Credential' },
            { url: 'https://www.hackthebox.com/events/cyber-apocalypse-2024', type: 'news', label: 'Website' },
            { url: 'https://wariss-writeup.gitbook.io/writeup/hacker-royale-writeup-cyber-apocalypse-ctf-2024', type: 'paper', label: 'CTF Writeup' }
        ]
    },   
    {
        certificateImage: "./images/hunt.png",
        title: 'Huntress CTF',
        date: 'Oct 2023',
        description: 'I participated in the Huntress Capture the Flag (CTF) Contest sponsored by Huntress Labs Incorporated. In this cybersecurity competition, participants solve challenges in domains like web security and cryptography to find and submit flags, earning points. The top scorers are declared winners.',
        skills: 'Cybersecurity, Web Application Security, Malware, Steganography, OSINT, Miscellaneous',
        links: [
            { url: '/pdf/Huntress_CERT', type: 'news', label: 'Show Credential' },
            // { url: 'https://huntress.ctf.games', type: 'news', label: 'Website' },
        ]
    }, 
    {
        certificateImage: "./images/CTF.png",
        title: 'Thailand Cyber Top Talent 2023',
        date: 'Sep 2023',
        description: 'Participated in the "Thailand Cyber Top Talent 2023" cybersecurity competition, organized by the National Cyber Security Office and Huawei Technologies (Thailand) Co., Ltd. This prestigious event aimed to educate and upskill participants in various areas of cybersecurity through hands-on challenges. The competition adopted a "Capture the Flag" format in a Jeopardy style, highlighting areas such as Web Application Security, Digital Forensics, and more.',
        skills: 'Cybersecurity, Web Application Security, Digital Forensics, Reverse Engineering, Network Security, Mobile Security, Programming, Cryptography',
        links: [
            { url: '/pdf/TCTT_2023', type: 'news', label: 'Show Credential' },
            { url: 'https://ctf.in.th/thctt2023/', type: 'news', label: 'Website' },
        ]
    },    
    {
        certificateImage: "./images/codegoda.png",
        title: 'Codegoda 2023',
        date: 'May 2023',
        description: 'Participated in Codegoda 2023, a renowned coding competition where I tackled challenging algorithmic problems and showcased my coding prowess. It was a great experience to compete with talented coders worldwide and further hone my problem-solving skills.',
        skills: 'Algorithms, Data Structures, Problem Solving, Competitive Programming',
        links: [
            { url: '/pdf/CODEGODA', type: 'news', label: 'Show Credential' },
            { url: 'https://codegoda.io', type: 'news', label: 'Website' },
        ]
    }
    
];

export default Competitions;


