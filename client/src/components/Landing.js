import React from 'react';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      
      <h1>
        Welcome to Survey feedback Collector
      </h1>
      <pre>{`
      You can send out a survey to N number of email addresses(recipients) and collect response from each of the recipients
      from their email account. The response is collected as count of yes or no received and then displayed on '/surveys' path.
      To navigate on Survey Lists click on Top left Text on Navigation Panel. 
      To create new survey click on '+' button on bottom right of the page.
      Note : You need to Login first and make sure you have enough credits before sending surveys.



      Developed by : "Jay Chaturvedi"
      Contacts : "jachaturvedi18@gmail.com"
      `}
      </pre>
      <div className = "container">

       <p className="left">Source Code : <a  href="https://github.com/jaychaturvedi/Surveyapplication">github.com/jaychaturvedi</a></p>
       <p className="right">Connect on : <a href="https://www.linkedin.com/in/jay-chaturvedi-657709111/"> LinkedIn</a></p>
      </div>


    </div>
  );
};

export default Landing;