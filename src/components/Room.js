import React from 'react';
import '../HTBAchievements.css';  // Import the CSS file
import Navigation from '../Navbar';
import Footer from '../Footer';

const HTBAchievements = () => {
  const boxes = [
    { name: 'Crafty', level: 'Easy', os: 'Windows', logo: 'https://labs.hackthebox.com/storage/avatars/c01c8813bfc7795ae0717bbee7b407d1.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/587' },
    { name: 'Perfection', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/57fc0f58916cb3ed8e793db071769d70.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/590' },
    { name: 'Headless', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/26e076db204a74b99390e586d7ebcf8c.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/594' },
    { name: 'Usage', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/23e804513a47e8f20bc865d0419946e1.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/597' },
    { name: 'Mailing', level: 'Easy', os: 'Windows', logo: 'https://labs.hackthebox.com/storage/avatars/cedb2f991409f9f39b55b04513f6b102.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/600' },
    { name: 'BoardLight', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/7768afed979c9abe917b0c20df49ceb8.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/603' },
    { name: 'Lame', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/fb2d9f98400e3c802a0d7145e125c4ff.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/1' },
    { name: 'BountyHunter', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/a24c032885e56a17a6c74cc58b63e8f4.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/359' },
    { name: 'PC', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/6d08e5f1919c77c0497213377f635e08.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/543' },
    { name: 'TwoMillion', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/d7bc2758fb7589dfa046bee9ce4d75cb.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/547' },
    { name: 'Sau', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/1ea2980b9dc2d11cf6a3f82f10ba8702.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/551' },
    { name: 'Keeper', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/b56a5742b99e2568fa167765b1323370.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/556' },
    { name: 'CozyHosting', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/eaed7cd01e84ef5c6ec7d949d1d61110.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/559' },
    { name: 'Analytics', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/f86fcf4c1cfcc690b43f43e100f89718.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/569' },
    { name: 'Codify', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/57b977ea744af01a5454c8643a850e59.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/574' },
    { name: 'Broker', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/a725533911ba94a880899fbf900d988c.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/578' },
    { name: 'Devvortex', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/2565d292772abc4a2d774117cf4d36ff.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/577' },
    { name: 'Bizness', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/1919b64800f6676d0c0d285a9d664cee.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/582' },
    { name: 'Blue', level: 'Easy', os: 'Windows', logo: 'https://labs.hackthebox.com/storage/avatars/52e077ae40899ab8b024afd51cb29b1c.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/51' },
    { name: 'Legacy', level: 'Easy', os: 'Windows', logo: 'https://labs.hackthebox.com/storage/avatars/60dc190c4c015cfe3a3aef9b5afca254.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/2' },
    { name: 'Jerry', level: 'Easy', os: 'Windows', logo: 'https://labs.hackthebox.com/storage/avatars/59f03a24178dbb2bdc94968c201e21f8.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/144' },
    { name: 'Netmon', level: 'Easy', os: 'Windows', logo: 'https://labs.hackthebox.com/storage/avatars/3fa8184483e279369b81becafbac9dee.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/177' },
    { name: 'Knife', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/110fe6608793064cf171080150ebd0dc.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/347' },
    { name: 'Sense', level: 'Easy', os: 'OpenBSD', logo: 'https://labs.hackthebox.com/storage/avatars/a3d8bf97412b0b6247aac14695eff21c.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/111' },
    { name: 'Editorial', level: 'Easy', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/a466db5ce4f7aaea98f588d1cb71a0aa.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/608' },
    { name: 'Surveillance', level: 'Medium', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/d2ddffcb2eced6a4d5486dc99d440d1a.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/580' },
    { name: 'Monitored', level: 'Medium', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/d4988810825d26acb2e84ca0ac9feaf4.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/583' },
    { name: 'Builder', level: 'Medium', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/a0f6d6a08e0806448341587cd59450a6.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/591' },
    { name: 'IClean', level: 'Medium', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/750ba886c8a87103c69cac0f13f2de70.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/596' },
    { name: 'Runner', level: 'Medium', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/029d258b4444bc4226b90b1f8f27d086.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/598' },
    { name: 'SolarLab', level: 'Medium', os: 'Windows', logo: 'https://labs.hackthebox.com/storage/avatars/a2c2bd7b4e98ff8b782ed590896305a1.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/601' },
    { name: 'Blurry', level: 'Medium', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/344998b24aad421410cabf912d3dc3af.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/605' },
    { name: 'Intuition', level: 'Hard', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/464537cc0d3e9962fc598767bff7b1f1.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/599' },
    { name: 'Corporate', level: 'Insane', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/380bc40d3a6bd3ba99da465177e8593e.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/581' },
    { name: 'Skyfall', level: 'Insane', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/e43c6cdfe71e56188e5c2c4f39f5c180.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/586' },
    { name: 'MagicGardens', level: 'Insane', os: 'Linux', logo: 'https://labs.hackthebox.com/storage/avatars/a878db048e3cb6ba0e4a467bb705e145.png', link: 'https://www.hackthebox.com/achievement/machine/1458142/602' },
  ];
  
  const groupedBoxes = boxes.reduce((acc, box) => {
    if (!acc[box.level]) {
      acc[box.level] = [];
    }
    acc[box.level].push(box);
    return acc;
  }, {});

  return (
    <>
      <Navigation />
      <div className="achievements-page">
        <div className="achievements-container">
          <h1 className="fancy-header">Pwned Rooms</h1>
          {Object.keys(groupedBoxes).map(level => (
            <div key={level}>
              <h2 className="level-header">{level} Level</h2>
              <div className="room-grid">
                {groupedBoxes[level].map((box) => (
                  <a href={box.link} className="room" key={box.name} target="_blank" rel="noopener noreferrer">
                    <img src={box.logo} alt={`${box.name} logo`} className="room-logo" />
                    <h3>{box.name}</h3>
                    <p>{box.os}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HTBAchievements;
