<template>
  <div class="contact-container">
    <div class="contact-content">
      <h1>Get In Touch</h1>
      <p class="intro">
        Have a question or feedback? We'd love to hear from you!
      </p>
      <div class="contact-grid">
        <div class="contact-info">
          <h3>Contact Information</h3>
          <p>
            Fill out the form and our team will get back to you within 24 hours.
          </p>
          <ul>
            <li>
              <i class="fa-solid fa-phone"></i>
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i>
              <span>hello@goodiesstore.com</span>
            </li>
            <li>
              <i class="fa-solid fa-location-dot"></i>
              <span>123 Goodies Lane, Webville, WS 45678</span>
            </li>
          </ul>
        </div>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  methods: {
    handleSubmit() {
      // In a real app, you would handle form submission here.
      // For this project, we'll just show an alert.
      alert("Thank you for your message! We will get back to you soon.");
      // Optionally, you can reset the form fields
      document.querySelector(".contact-form").reset();
    },
  },
};
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background-color: #f4f4f9;
  flex: 1;
}

.contact-content {
  max-width: 900px;
  width: 100%;
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

.intro {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-size: 1.1rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
}

.contact-info h3 {
  font-size: 1.5rem;
  color: #34b3a0;
  margin-bottom: 20px;
}

.contact-info p {
  line-height: 1.6;
  margin-bottom: 20px;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1rem;
}

.contact-info i {
  color: #34b3a0;
  font-size: 1.2rem;
  margin-right: 15px;
  width: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: "Roboto Mono", monospace;
}

.contact-form button {
  width: 100%;
  padding: 12px;
  background: #34b3a0;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 4px 5px 9px #34b3a0;
}

.contact-form button:hover {
  background: #2a8d7d;
}
</style>