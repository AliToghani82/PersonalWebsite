import React from 'react';
import './HomePage.css'; // Import your CSS file
import Picture from "./Ali.jpg";
import ResumeP from "./ResumeP.png";
const HomePage = () => {
  return (
    <div className="home-container">
      <hr id="line"></hr>
        <br></br>
        <div>
        <img id="ProfPic" src={Picture} alt="" />
        </div>
        <div>
          <p id="bio">
            I am a Senior studying Computer Science (CS) at University of Washington. I am currently
            looking for opportunities to learn more about Machine Learning and Computer vision.
            I am working as an undergraduate researcher at laboratory of Dr. Elizabeth Nance
            (University of Washington) creating a new deep learning model that will predicts trajectories of 
            Particles.
          </p>

          <p id="bio">
            I received my Associates of Arts and Sciences from Whatcom Community College
            (WCC) in 2022. I worked as a Math and Computer Science tutor at WCC Math Center
            for about 2 years. Working as a tutor, encouraged me to start a project, in which tutors
            and students can be connected to each other on an app that would make in-person
            tutoring easier.
          </p>

          <p id="bio">
            Additionally, I am passionate about increasing access to STEM Education. I worked as TRIO
            Upward Bound mentor and gave presentations and hosted different workshops for students in the
            rural areas of Whatcom County.
          </p>
          <p id="bio">
            <strong>  Awards:</strong> Washington Research Fellowship Award 2023 - 2024 (UW),  Computer Science Disciplinary 2021 (WCC)
          </p>
        </div>
        <br></br>
        <div>

        </div>
        <div id="resumediv">
        <img src={ResumeP} alt="" style={{ width: '80px', height: 'auto' }} />
        <a id="resume" href="/AliToghani_Resume_sep23.pdf" >Resume</a>
        </div>
    </div>
  );
};

export default HomePage;
