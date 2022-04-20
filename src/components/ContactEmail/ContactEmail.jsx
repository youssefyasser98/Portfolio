import React from "react";
import "./style.css";
const ContactEmail = () => {
  return (
    <>
      <div className="contact-wrap">
        <div className="mail-text-wrap">
          <p>
            Feel free to reach out to me
          </p>
        </div>
        <div className="mail-wrap">
          <button className="contact-mail">
            <a href="mailto:youssefyasserfouda@yahoo.com">
              youssefyasserfouda@yahoo.com
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactEmail;
