---
layout: default
title: Contact
permalink: /contact/
---

<div class="contact-container">
  <h1 class="contact-title">Reach out to me</h1>
  <div class="contact-card">
    <form action="<https://formspree.io/f/xovwvwok>" method="POST" class="contact-form">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email</label>
      <input type="email" id="email" name="_replyto" required>

      <label for="message">Message</label>
      <textarea id="message" name="message" rows="6" required></textarea>

      <button type="submit">Send Message</button>
    </form>
    <div class="contact-alt">
      <p><span style="font-size:1.1em;">Or email me:</span></p>
      <p><b>namesurname [at] gmail.com</b></p>
    </div>
  </div>
</div>

<style>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0 40px 0;  /* Reduced top and bottom padding */
  min-height: unset;        /* Remove or reduce this if you don't want forced height */
}


.contact-title {
  color: #223568;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
  letter-spacing: 0.5px;
}

.contact-card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 3px 18px rgba(20,30,60,0.09);
  padding: 36px 38px 30px 38px;
  min-width: 320px;
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1.5px solid #e8eaef;
}

.contact-form label {
  margin-top: 12px;
  margin-bottom: 4px;
  font-weight: 500;
  color: #223568;
  font-size: 1em;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 12px;
  font-size: 1em;
  border-radius: 5px;
  border: 1.2px solid #d6e0ee;
  background: #f7fafc;
  transition: border 0.18s;
}
.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border: 1.2px solid #1976d2;
  background: #fff;
}

.contact-form button[type="submit"] {
  margin-top: 10px;
  padding: 11px 0;
  width: 100%;
  background: #223568;
  color: #fff;
  border: none;
  font-weight: 600;
  font-size: 1.06em;
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.18s;
}

.contact-form button[type="submit"]:hover {
  background: #cc0000;
}

.contact-alt {
  margin-top: 28px;
  text-align: center;
  color: #444;
  font-size: 0.99em;
}
</style>
