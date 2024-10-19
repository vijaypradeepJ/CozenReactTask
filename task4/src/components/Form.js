import React, { useState } from 'react';

const Form= () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.age || isNaN(formData.age) || formData.age <= 0) {
      newErrors.age = 'Please enter a valid age.';
    }
    if (!formData.email.includes('@')) newErrors.email = 'Email is invalid.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Form submitted:', formData);
      // Reset form or handle success
      setFormData({
        name: '',
        age: '',
        email: '',
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>



      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
