import React, { useState } from 'react';
import  './Services.css'

function Services() {
  const [showForm, setShowForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState('link');

  const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
     
      if (selectedOption === 'link') {
        
      } else if (selectedOption === 'pdf') {
       
      }
  };

  return (
    <div className="container">
      <div className="container-data">
        <button className="button " onClick={() => setShowForm(true)}>
          Update Services
        </button>
        {showForm && (
          <div className="form">
            <select
              className="select"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="link">Update Link</option>
              <option value="pdf">Upload PDF</option>
            </select>
            <form onSubmit={handleSubmit} className="input-group">
              {selectedOption === "link" && (
                <div className='service-label'>
                  <label className="input-label">New Link:</label>
                  <input type="text" name="link" />
                </div>
              )}
              {selectedOption === "pdf" && (
                <div className="upload-pdf">
                  <label className="input-label">Upload PDF:</label>
                  <input type="file" name="pdf" />
                </div>
              )}
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
