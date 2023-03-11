import "../App.css";
import twitter from "../image/twitter.png";
import facebook from "../image/facebook.png";
import insta from "../image/insta.png";
import github from "../image/github.png";

export default function Footer() {
  return (
    <div className="footer-section">
      <a href="https://twitter.com/AkashGu05501548">
        <img
          src={twitter}
          width="30px"
          alt="twitter-logo"
          className="twitter-logo"
        />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100010695482585">
        <img
          src={facebook}
          width="30px"
          alt="facebook-logo"
          className="facebook-logo"
        />
      </a>
      <a href="https://www.instagram.com/akashgupta79032/">
        <img src={insta} width="30px" alt="insta-logo" className="insta-logo" />
      </a>
      <a href="https://github.com/Akash3951">
        <img
          src={github}
          width="30px"
          alt="github-logo"
          className="github-logo"
        />
      </a>
    </div>
  );
}
