import React from "react";

function PricingSection() {
  return (
    <div>
      <section class="pricing" id="pricing">
        <h1 class="heading">our pricing plans</h1>

        <div class="box-container">
          <div class="box">
            <div class="price">
              <span>$</span>10<span>/month</span>
            </div>
            <h3>basic</h3>
            <ul>
              <li>100 MB Disk Space</li>
              <li>2 Subdomains</li>
              <li>5 Email Accounts</li>
              <li>email support</li>
            </ul>
            <a href="#" class="btn">
              select plan
            </a>
          </div>
          <div class="box">
            <div class="price">
              <span>$</span>20<span>/month</span>
            </div>
            <h3>standard</h3>
            <ul>
              <li>100 MB Disk Space</li>
              <li>2 Subdomains</li>
              <li>5 Email Accounts</li>
              <li>email support</li>
            </ul>
            <a href="#" class="btn">
              select plan
            </a>
          </div>
          <div class="box">
            <div class="price">
              <span>$</span>50<span>/month</span>
            </div>
            <h3>premium</h3>
            <ul>
              <li>100 MB Disk Space</li>
              <li>2 Subdomains</li>
              <li>5 Email Accounts</li>
              <li>email support</li>
            </ul>
            <a href="#" class="btn">
              select plan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingSection;
