import React from "react";

function ContactSection() {
  return (
    <div>
      <section class="contact" id="contact">
        <h1 class="heading">get in touch</h1>

        <form action="">
          <div class="inputBox">
            <input type="text" required />
            <label>name</label>
          </div>
          <div class="inputBox">
            <input type="email" required />
            <label>email</label>
          </div>
          <div class="inputBox">
            <input type="number" required />
            <label>number</label>
          </div>
          <div class="inputBox">
            <textarea required name="" id="" cols="30" rows="10"></textarea>
            <label>message</label>
          </div>

          <input type="submit" class="btn" value="send message" />
        </form>
      </section>
    </div>
  );
}

export default ContactSection;
