import emailLogo from "../image/email.png";
import linkedinLogo from "../image/linkedin.png";
import "../App.css";

const email = function () {
  window.location.href = `mailto:akashgupta993161@gmail.com`;
};

const linkedin = function () {
  window.location.href = `https://www.linkedin.com/in/akash-gupta-b7a121226/`;
};

export default function Info() {
  return (
    <div className="info-section">
        <h2 className="name">Akash Gupta</h2>
        <h5 className="skill">Frontend Developer</h5>
        <h6 className="location">Bihar, India</h6>

        <div className="info-btn">
          <button className="email-btn btn" onClick={email}>
            <img src={emailLogo} className="email-logo" alt="email-logo" />
            <bold> Email</bold>
          </button>
          <button className="linkedin-btn btn" onClick={linkedin}>
            <img
              src={linkedinLogo}
              className="linkedin-logo"
              alt="linkedin-logo"
            />
            <bold>Linkedin</bold>
          </button>
        </div>
      
    </div>
  );
}
