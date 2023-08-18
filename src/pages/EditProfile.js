// EditProfilePage.js
import React, { useState } from "react";
import "./EditProfile.css";
import { Link } from 'react-router-dom';

function EditProfile() {
  const [name, setName] = useState("Rajneesh Rana");
  const [role, setRole] = useState("Developer");
  const [dob, setDob] = useState("13-01-200");
  const [email, setEmail] = useState("ranarajneesh075@gmail.com");
  const [phone, setPhone] = useState(" 01234567890");
  const [gender, setGender] = useState("Male");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit-profile-page">
      <h1>Edit Profile</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Role:</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <label>DOB:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <Link to="/profile">
        <button type="submit">Save Changes</button>
        </Link>
      </form>
    </div>
  );
}

export default EditProfile;
