import React from "react";
import { toast } from 'react-toastify';
import { FaGithub, FaLinkedin, FaInstagramSquare, FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "be6e2f43-c179-43c8-8efd-d35648cf207c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult();
      toast.success("form submitted successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-gray-200 flex items-center justify-center py-16 px-6"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-gradient-to-r from-purple-950/20 to-cyan-900/20 rounded-2xl shadow-lg p-8">
        {/* Left Side - Form */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Get in Touch
          </h2>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input
              type="text" name='Name' placeholder='Your Name' required
              className="px-4 py-3 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email" name='Email' placeholder='example@gmail.com' required
              className="px-4 py-3 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              name="Message" rows="5" placeholder='Your Message...' required
              className="px-4 py-3 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              {result ? result:"send message"}
            </button>
          </form>
        </div>

        {/*Social Media */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-semibold text-purple-300 mb-6">
            Connect with me
          </h3>
          <p className="text-gray-400 mb-6">
            I’m always open to networking, discussing projects, or exploring
            opportunities. Feel free to connect with me on my socials:
          </p>

          <div className="flex gap-6 text-3xl">
            <a
              href="https://github.com/Sivanim20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/m-sivani-9308b222a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/_sivani_.m_?utm_source=ig_web_button_share_sheet&igsh=a3Yyem9icHdtNThj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <FaInstagramSquare />
            </a>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sivanimanju2003@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
