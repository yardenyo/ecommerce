import "./Contact.css";

const Contact = ({ click }) => {
  return (
    <div className="contact-screen" id="contact" onClick={click}>
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
