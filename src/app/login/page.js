"use client";
import React, { useState, useEffect } from "react";


const Page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is required and must be a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const submitData = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("formdata", formData);
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  };

  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar-heading">LOGIN VALIDATION</h1>
      </nav>
      <div className="page-container">
        <form onSubmit={submitData} className="form">
          <div className="mb-5">
            <label htmlFor="email" className="label">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="input"
              placeholder="name@flowbite.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="label">Your password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              className="input"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="checkbox"
                required
              />
            </div>
            <label htmlFor="remember" className="checkbox-label">Remember me</label>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <footer className="footer">
        <p className="footer-text">Made by Nirav Patel</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/linkedin-icon.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/instagram-icon.png" alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Page;
