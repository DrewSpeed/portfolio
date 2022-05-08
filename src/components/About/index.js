import React from 'react';
import avatar from '../../assets/images/avatar.jpg'


function About() {
  return (
    <>
    <section className="section-wrap">
      <div className="col-4 name-column">
        <img src={avatar} className="avatar" alt="Drew!" />
      </div>
      <div className= "col-8 about-text">
        <h2 className="about-header">About Drew</h2>
        <p>Drew Speed is a Nashville-based full-stack web developer. Starting with a bachelor’s degree in Spanish from the University of Tennessee at Martin, he has spent much of his current career focusing on customer service, sales, and human relations. Recently, Drew has rediscovered his passion for web development and computer programming. Coming from a largely self-taught background, he is now studying with Vanderbilt Code Camp. He is looking forward to building on his skills and continually learning new ways to make things work. Drew hopes to use these skills to eventually partner with communities to combine technology and creativity.</p>
      </div>    
    </section>
    
    </>
  ); 
}

export default About;