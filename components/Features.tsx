import React from "react";
import "./Features.css";
import "../utilities/general.scss";
import { BiFoodMenu } from "react-icons/bi";

function Features() {
  return (
    <div>
      <div className="feature-header">
        <h2 className="header-secondary--bigger header-secondary--bigger--feature">
          A few features about our freelancing project
        </h2>
      </div>
      <section className="feature-section">
        <div className="feature-container">
          <div className="icons-container_general">
            <BiFoodMenu className="feature-icon" />
          </div>
          <p className="feature-title">Email Managment</p>
          <p className="feature-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi hic
            placeat voluptatem quibusdam ipsa laudantium saepe eum beatae,
            inventore neque?
          </p>
        </div>

        <div className="feature-container">
          <p className="feature-title">Time Saving</p>
          <p className="feature-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi hic
            placeat voluptatem quibusdam ipsa laudantium saepe eum beatae,
            inventore neque?
          </p>
        </div>
        <div className="feature-container">
          <p className="feature-title">Application Manager</p>
          <p className="feature-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi hic
            placeat voluptatem quibusdam ipsa laudantium saepe eum beatae,
            inventore neque?
          </p>
        </div>
        <div className="feature-container">
          <p className="feature-title">Automatic Translation</p>
          <p className="feature-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi hic
            placeat voluptatem quibusdam ipsa laudantium saepe eum beatae,
            inventore neque?
          </p>
        </div>
        <div className="feature-container">
          <p className="feature-title">24/7 Assistance</p>
          <p className="feature-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi hic
            placeat voluptatem quibusdam ipsa laudantium saepe eum beatae,
            inventore neque?
          </p>
        </div>
        <div className="feature-container">
          <p className="feature-title">Data Analytics</p>
          <p className="feature-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi hic
            placeat voluptatem quibusdam ipsa laudantium saepe eum beatae,
            inventore neque?
          </p>
        </div>
      </section>
    </div>
  );
}

export default Features;
