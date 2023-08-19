import React, { useState } from 'react';
import './WasteCategory.css'; 

function WasteCategory() {
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setCategoryDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
 
    console.log('Selected category:', selectedCategory);
    console.log('Category name:', categoryName);
    console.log('Category description:', categoryDescription);

    setSelectedCategory('');
    setCategoryName('');
    setCategoryDescription('');
  };

  return (
    <div className="container">
      <button className="button" onClick={() => setShowForm(!showForm)}> Update Waste Category </button>
      {showForm && (
        <div className="form">
          <select className="select" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select a Category</option>
            <option value="organic">Organic Waste</option>
            <option value="plastic">Plastic Waste</option>
            <option value="paper">Paper Waste</option>
          
          </select>
          {selectedCategory && (
            <form onSubmit={handleSubmit} className="input-group">
              <div className='waste-label'>
                <label>Category Name:</label>
                <input type="text" value={categoryName} onChange={handleNameChange} />
              </div>
              <div>
                <label>Category Description:</label>
                <textarea rows="4" cols="50" value={categoryDescription} onChange={handleDescriptionChange} />
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default WasteCategory;
