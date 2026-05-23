import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_j2zhqda',
      'template_34a0l3e',
      form.current,
      'iAOQNMv6DIh8ab86a'
    )
    .then(() => {
        alert("Message Sent Successfully!");
    })
    .catch((error) => {
        alert("Failed to send message");
        console.log(error);
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >

        <h1 className="text-3xl font-bold text-center mb-6">
          Contact Us
        </h1>

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full border p-3 mb-4 rounded-lg"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full border p-3 mb-4 rounded-lg"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-3 mb-4 rounded-lg h-32"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>

      </form>
    </div>
  );
}

export default Contact;