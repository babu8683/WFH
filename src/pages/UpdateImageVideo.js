import React, { useState } from "react";
import "./UpdateImageVideo.css";

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
      // Handle link submission
    } else if (selectedOption === "pdf") {
      // Handle PDF submission
    } else if (selectedOption === "image" || selectedOption === "video") {
      if (selectedFile) {
        console.log("Selected file:", selectedFile);
        // Handle file upload here
      }
    }
  };

  return (
    <div className="update-image-video">
      <button className="update-button" onClick={() => setShowForm(true)}>
        Update Image or Video
      </button>
      {showForm && (
        <div className="form-container">
          <select
            className="select-input"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="image">Upload Image</option>
            <option value="video">Upload Video</option>
          </select>
          <form onSubmit={handleSubmit} className="upload-form">
            {selectedOption === "link" && (
              <div>
                <label className="file-label">Select Image:</label>
                <input type="file" name="image" className="file-input" />
              </div>
            )}
            {selectedOption === "pdf" && (
              <div>
                <label className="file-label">Select Video:</label>
                <input type="file" name="video" className="file-input" />
              </div>
            )}
            {(selectedOption === "image" || selectedOption === "video") && (
              <div>
                <label className="file-label">
                  Upload {selectedOption === "image" ? "Image" : "Video"}:
                </label>
                <input
                  type="file"
                  accept={`${
                    selectedOption === "image" ? "image/*" : "video/*"
                  }`}
                  onChange={handleFileChange}
                  className="file-input"
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
