import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import VideoPlayer from './VideoPlayer.jsx';

function PlansPage() {
  const handleSubmit = () => {
    const userSubmission = document.getElementById('questionTextArea').value;
    console.log('User Submission:', userSubmission);
  };

  return (
    <>
      <NavBar />
      <div className='container nav-padding'>
        <div id='main-header'>Lesson Plans</div>
        <VideoPlayer
          name={"Fossil Fuels - Activity 3"}
          vidTitleFontSize="30px"
        />

        {/* Additional Header and Text Box */}
        <h2 id="questionTitle">In a paragraph, describe what you learned from this video below:</h2>
        <textarea
          id="questionTextArea"
          placeholder="Type something here..."
          rows="4"
          cols="50"
        />

        {/* Submit Button */}
        <div className="button-container">
          <button id="button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default PlansPage;