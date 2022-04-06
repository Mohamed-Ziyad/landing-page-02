import React from "react";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
function ReviewSection() {
  return (
    <div>
      <section class="review" id="review">
        <h1 class="heading">customers review</h1>

        <div class="box-container">
          <div class="box">
            <img src={pic2} alt="" />
            <h3>john deo</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              fugit corporis consectetur reprehenderit officia earum, voluptate
              adipisci facere ea est!
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
          <div class="box">
            <img src={pic1} alt="" />
            <h3>john deo</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              fugit corporis consectetur reprehenderit officia earum, voluptate
              adipisci facere ea est!
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          <div class="box">
            <img src={pic3} alt="" />
            <h3>john deo</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              fugit corporis consectetur reprehenderit officia earum, voluptate
              adipisci facere ea est!
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewSection;
