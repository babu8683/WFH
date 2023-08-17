import React, { useState } from "react";
import "./Services.css";

function UpdateImageVideo() {
  const [showForm, setShowForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState("link");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedOption === "link") {
    } else if (selectedOption === "pdf") {
    } else if (selectedOption === "image" || selectedOption === "video") {
      if (selectedFile) {
        console.log("Selected file:", selectedFile);
      }
    }
  };

  return (
    <div className="container">
      <button className="button" onClick={() => setShowForm(true)}>
        Update Image Or Video
      </button>
      {showForm && (
        <div className="form">
          <select
            className="select"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="image">Upload Image</option>
            <option value="video">Upload Video</option>
          </select>
          <form onSubmit={handleSubmit} className="input-group">
            {selectedOption === "link" && (
              <div>
                <label>Select Image:</label>
                <input type="file" name="image" />
              </div>
            )}
            {selectedOption === "pdf" && (
              <div>
                <label>Select Video:</label>
                <input type="file" name="video" />
              </div>
            )}
            {(selectedOption === "image" || selectedOption === "video") && (
              <div>
                <label>
                  Upload {selectedOption === "image" ? "Image" : "Video"}:
                </label>
                <input
                  type="file"
                  accept={`${
                    selectedOption === "image" ? "image/*" : "video/*"
                  }`}
                  onChange={handleFileChange}
                />
              </div>
            )}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default UpdateImageVideo;
