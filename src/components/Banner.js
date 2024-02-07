import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full-Stack Engineer", "Web Developer"]; 
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div >
                <h1>{`Hi, I'm Shanny!`}</h1>
                <h1> <span className="txt-rotate" data-rotate='[ "Full-Stack Engineer", "Web Developer" ]'><span className="wrap">{text}</span></span></h1>
                <p>I'm a programming enthusiast studying at the University of British Columbia. I enjoy working on full-stack web development projects. I'm proficient in <strong>Java, C/C++, and TypeScript</strong> language.</p>
                <p></p>
                <p>I love working on personal projects for fun and to pick up new skills along the way. I'm always actvely learning in my spare time, diving into projects to beef up what I know and whip up some cool stuff!</p>
                <p>I'm also very interested in the field of human-computer interaction, with 3 years of research experience at the <a href="https://hct-lab.github.io/" >Human Communication Technologies Lab</a> at UBC.</p>
          </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div>
                  <img src={headerImg} alt=""/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
