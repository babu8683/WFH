import React, { useState } from "react";
import "./Services.css";

function UpdateServices() {
  const [showForm, setShowForm] = useState(true);
  const [selectedOption, setSelectedOption] = useState("howToUse");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedUserType, setSelectedUserType] = useState("");
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

    if (selectedOption === "link") {
    } else if (selectedOption === "pdf") {
    } else if (selectedOption === "image" || selectedOption === "video") {
      if (selectedFile) {
        console.log("Selected file:", selectedFile);
      }
    } else if (selectedOption === "howToUse") {
      if (selectedImage) {
        console.log("Selected image for how to use:", selectedImage);
      }
    } else if (selectedOption === "userType") {
      if (selectedImage) {
        console.log("Selected image for user type:", selectedImage);
      }
      if (selectedUserType) {
        console.log("Selected user type:", selectedUserType);
      }
    }
  };

  return (
    <div className="container">
      <button className="button" onClick={() => setShowForm(true)}>
        Update Services
      </button>
      {showForm && (
        <div className="form">
          <select
            className="select"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="howToUse">How To Use</option>
            <option value="userType">User Type</option>
          </select>
          <form onSubmit={handleSubmit} className="input-group">
            {selectedOption === "pdf" && (
              <div>
                <label>Upload PDF:</label>
                <input type="file" name="pdf" />
              </div>
            )}
            {selectedOption === "image" ||
              (selectedOption === "video" && (
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
              ))}
            {selectedOption === "howToUse" && (
              <div>
                <label>Update Image for How To Use:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <label>Update Paragraph:</label>
                <textarea rows="4" cols="50" />
              </div>
            )}
            {selectedOption === "userType" && (
              <div>
                <label>Update Image for User Type:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <label>Select User Type:</label>
                <select
                  value={selectedUserType}
                  onChange={handleUserTypeChange}
                >
                  <option value="">Select User Type</option>
                  <option value="housewife">Housewife</option>
                  <option value="student">Student</option>
                </select>
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

export default UpdateServices;
