import "./Contact.css";

const Contact = ({ click }) => {
  return (
    <div className="contact" id="contact" onClick={click}>
      <div className="custom-shape-divider-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <form action="">
        <div className="contact-title">
          <h2>Contact Me</h2>
        </div>
        <div className="half">
          <div className="item">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name.."
              required
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email.."
              required
            />
          </div>
        </div>
        <div className="full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message.."
            maxLength="500"
            required
          ></textarea>
        </div>
        <div className="action">
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
