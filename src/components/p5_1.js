import React, { useEffect } from 'react';
import p5 from 'p5';

const P5Wrapper = () => {
  useEffect(() => {
    new p5(P5Sketch, document.getElementById('p5-container'));
  }, []);

  const P5Sketch = p => {
    let xi = 0;
    let y = 0;
    let xx = 0;
    let yy = 0;
    let s;
    let q;
    let s2;
    let q2;

    p.setup = () => {
      p.createCanvas(400, 400);
      p.background(60, 540, 42);
    };

    p.draw = () => {
      drawbg();
      drawhat();
      drawear();
      drawshirts();
      drawneck();
      drawbuttons();
      drawface();
      drawnose();
      drawmouth();
      draweye();
      blackeye();
      drawleftmoustache();
      drawrightmoustache();
    };

    function drawbg() {
      let x = p.map(p.mouseX, 0, 100, 200, 200);
      let r = p.map(p.mouseX, 0, 100, 200, 200);
      p.background(p.mouseX, x, r);
      p.fill(51);
      p.rect(0, 260, 400, 300);
    }

    function drawhat() {
      p.strokeWeight(3);
      p.fill("red");
      p.ellipse(204, 105, 30, 160);
      p.fill(255, p.random(220, 255), p.random(0, 255));
      p.ellipse(204, 110, 70, 150);
      p.fill("red");
      p.ellipse(204, 105, 87, 90);
    }

    function drawear() {
      p.strokeWeight(3);
      p.fill('#E2C58F');
      p.ellipse(130, 90, 80, 90);
      p.fill("pink");
      p.ellipse(130, 100, 50, 90);
      p.fill('#000000');
      p.ellipse(280, 90, 80, 90);
      p.fill("pink");
      p.ellipse(280, 100, 50, 90);
    }

    function drawshirts() {
      p.strokeWeight(3);
      p.fill("red");
      p.ellipse(202, 350, 300, 400);
    }

    function drawneck() {
      p.strokeWeight(3);
      p.fill(255, 202, 2);
      p.ellipse(200, 200, 210);
    }

    function drawbuttons() {
      p.strokeWeight(3);
      p.fill(255, 202, 2);
      p.ellipse(204, 320, 25);
      p.ellipse(204, 370, 25);
    }

    function drawface() {
      p.strokeWeight(3);
      p.fill(192);
      p.arc(201, 180, 220, 220, 0, p.PI * 2);
    }

    function drawnose() {
      p.strokeWeight(3);
      p.fill(255, 204, 229, 130);
      p.triangle(180, 175, 220, 175, 200, 200);
      p.point(230, 190);
      p.point(220, 190);
      p.point(225, 200);
      p.point(175, 190);
      p.point(170, 200);
      p.point(181, 198);
    }

    function drawmouth() {
      p.strokeWeight(3);
      p.line(195, 198, 170, 220);
      p.line(205, 198, 230, 220);
    }

    function draweye() {
      if (p.mouseIsPressed) {
        p.strokeWeight(3);
        p.fill(192);
        p.ellipse(173, 135, 30, 50);
        p.ellipse(225, 135, 30, 50);
      } else {
        p.strokeWeight(3);
        p.fill(204, 255, 255);
        p.ellipse(173, 135, 30, 50);
        p.ellipse(225, 135, 30, 50);
      }
    }

    function blackeye() {
      if (p.mouseIsPressed) {
        p.strokeWeight(0);
        p.fill(192);
        p.ellipse(172, 137, 10);
        p.ellipse(224, 137, 10);
      } else {
        p.strokeWeight(3);
        p.fill('#E2C58F');
        xi = 172;
        y = 137;
        s = (p.mouseX - xi) / 30;
        q = (p.mouseY - y) / 30;
        xi += s;
        p.ellipse(xi, y, 10);
        xx = 224;
        yy = 137;
        s2 = (p.mouseX - xx) / 30;
        q2 = (p.mouseY - yy) / 30;
        xx += s2;
        p.ellipse(xx, yy, 10);
      }
    }

    function drawleftmoustache() {
      p.strokeWeight(3);
      p.line(120, 193, 52, 170);
      p.line(120, 199, 50, 200);
      p.line(120, 205, 60, 230);
    }

    function drawrightmoustache() {
      p.strokeWeight(3);
      p.line(280, 193, 353, 170);
      p.line(280, 200, 358, 200);
      p.line(280, 206, 352, 225);
    }
  };

  return <div style={{ width: '100%', height: '77.8vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} id="p5-container"></div>;
};

export default P5Wrapper;
