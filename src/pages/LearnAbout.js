import React, { useState } from 'react';
import './Services.css'; 

function LearnAbout() {
  const [showForm, setShowForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedUserType, setSelectedUserType] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUserTypeChange = (event) => {
    setSelectedUserType(event.target.value);
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  return (
    <div className="container">
      <button className="button" onClick={() => setShowForm(!showForm)}>Update Learn About</button>
      {showForm && (
        <div className="form">
          <select className="select" value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select an Option</option>
            <option value="howToUse">How To Use</option>
            <option value="userType">User Type</option>
          </select>
          {selectedOption && (
            <form onSubmit={handleSubmit} className="input-group">
              {selectedOption === 'howToUse' && (
                <div>
                  <label>Update Image for How To Use:</label>
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                  <label>Update Paragraph:</label>
                  <textarea rows="4" cols="50" />
                </div>
              )}
              {selectedOption === 'userType' && (
                <div>
                  <label>Update Image for User Type:</label>
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                  <label>Select User Type:</label>
                  <select value={selectedUserType} onChange={handleUserTypeChange}>
                    <option value="">Select User Type</option>
                    <option value="housewife">Housewife</option>
                    <option value="student">Student</option>
                  </select>
                </div>
              )}
              <button type="submit" className="submit-button">Submit</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default LearnAbout;
