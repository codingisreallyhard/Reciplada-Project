import React from "react";

import "./Asidebar.css";
import "../utilities/general.scss";
function Asidebar() {
  return (
    <div>
      
      <section className="testimonary-section">
        <div className="container first-step">
          <div className="img-container-first-step">
            <img
              className="first-step-image"
              src="/IMG/Images/pexels-fauxels-3183197.jpg"
            />
          </div>

          <div className="first-step-txtbox">
            <p className="tag">Productivity</p>
            <h2 className="header-secondary first-step-header">
              What are you getting by signing with us?
            </h2>
            <p className="first-step-text">
              Free recipes posted by users on our recipe section, you want some
              healthy food or are you bored with the mundane food and want to
              try something else this is just the place for you!
            </p>
          </div>
        </div>
        <div className="container second-step">
          <div className="second-step-txtbox">
            <p className="tag">Automation</p>
            <h2 className="header-secondary second-step-header">
              The Importance of Process Automations for Companies
            </h2>
            <p className="second-step-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, at
              officiis ullam mollitia id atque quam! Doloremque nesciunt non
              sapiente libero cum quidem ipsa, quaerat autem nam. Explicabo,
              magni. Assumenda!
            </p>
          </div>
          <div className="second-step-imagebox">
            <img
              className="second-step-image"
              src="/IMG/Images/pexels-fox-1595385.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Asidebar;
