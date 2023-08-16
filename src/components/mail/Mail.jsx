import React from "react";
import "./mail.css";

function Mail() {
  return (
    <section className="mail-deals">
      <div className="mail-head">Hand picked daily</div>
      <div className="mail-body">
        <h2 className="mail-header">
          Get Today's Top Deals Straight to Your Inbox
        </h2>
        <div className="mail-box">
          <input type="email" className="mail-entry" placeholder="Email Address" />
          <button type="submit" className="mail-button">
            Unlock Deals
          </button>
        </div>
        <p>
          This newsletter may contain advertising, deals, or affiliate links.
          Subscribing to a newsletter indicates your consent to our
          <a href="/#">Terms of Use</a> and <a href="/#">Privacy Policy</a>. You may
          unsubscribe from the newsletters at any time.
        </p>
      </div>
    </section>
  );
}

export default Mail;
