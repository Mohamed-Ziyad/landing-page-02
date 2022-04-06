import React from "react";
import aboutImg from "../images/about-img.png";
import googleBtn from "../images/google-btn.png";
import appStoreBtn from "../images/app-store-btn.png";

function AboutSection() {
  return (
    <div>
      <section class="about" id="about">
        <h1 class="heading">about the app</h1>

        <div class="row">
          <div class="image">
            <img src={aboutImg} alt="" />
          </div>

          <div class="content">
            <h3>Take a Look Around our App</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus labore perspiciatis iusto debitis, explicabo neque
              earum accusamus adipisci eius, nobis laboriosam, autem modi porro
              quisquam saepe assumenda fuga quod ipsa!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              rerum excepturi alias quas voluptatibus provident voluptatum
              sapiente quos enim praesentium?
            </p>
            <div class="buttons">
              <a href="#">
                <img src={googleBtn} alt="" />
              </a>
              <a href="#">
                <img src={appStoreBtn} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
