import React, { useMemo } from 'react';
import '../HTBAchievements.css';
import Footer from '../Footer';
import Navigation from '../Navbar';
import { HTB_BOXES } from '../data';

const groupBoxesByLevel = (boxes) =>
  boxes.reduce((groupedBoxes, box) => {
    if (!groupedBoxes[box.level]) {
      groupedBoxes[box.level] = [];
    }

    groupedBoxes[box.level].push(box);
    return groupedBoxes;
  }, {});

const HTBAchievementsPage = () => {
  const groupedBoxes = useMemo(() => groupBoxesByLevel(HTB_BOXES), []);

  return (
    <>
      <Navigation />
      <div className="achievements-page">
        <div className="achievements-container">
          <h1 className="fancy-header">Pwned Rooms</h1>
          {Object.entries(groupedBoxes).map(([level, boxes]) => (
            <div key={level}>
              <h2 className="level-header">{level} Level</h2>
              <div className="room-grid">
                {boxes.map((box) => (
                  <a
                    key={box.name}
                    href={box.link}
                    className="room"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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

export default HTBAchievementsPage;
