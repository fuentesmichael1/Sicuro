import React from 'react';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="main-content">
        <h1>Hello!</h1>
        <h2>Welcome to Sicuro</h2>
        <h3>Your Personal Security Company</h3>
        <div className="development-notice">
          <p>This website is currently under development.</p>
          <p>We're working hard to bring you a great experience soon!</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
