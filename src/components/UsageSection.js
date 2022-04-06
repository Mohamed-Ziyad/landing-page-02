import React from "react";
import usageImg from "../images/usage-img.png";

function UsageSection() {
  return (
    <div>
      <section class="usage" id="usage">
        <h1 class="heading">how it works?</h1>

        <div class="row">
          <div class="box-container">
            <div class="box">
              <i class="fas fa-sort-amount-down"></i>
              <h3>minimum progress</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                dolor nihil dicta eveniet quam nam explicabo, natus labore quia
                cupiditate.
              </p>
            </div>
            <div class="box">
              <i class="fas fa-user-clock"></i>
              <h3>active time</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                dolor nihil dicta eveniet quam nam explicabo, natus labore quia
                cupiditate.
              </p>
            </div>
          </div>

          <img class="divider" src={usageImg} alt="" />

          <div class="box-container">
            <div class="box">
              <i class="fas fa-sort-amount-up"></i>
              <h3>maximum progress</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                dolor nihil dicta eveniet quam nam explicabo, natus labore quia
                cupiditate.
              </p>
            </div>
            <div class="box">
              <i class="fas fa-fire"></i>
              <h3>calories burned</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                dolor nihil dicta eveniet quam nam explicabo, natus labore quia
                cupiditate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UsageSection;
