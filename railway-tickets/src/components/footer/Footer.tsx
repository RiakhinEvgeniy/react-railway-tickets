import FooterInfo from "../footerinfo/FooterInfo";
import whiteTrain from "../../assets/railtrain_logo_white.png";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="container__logo">
          <img src={whiteTrain} alt="train" />
        </div>

        <FooterInfo
          info={{
            title: "About",
            info1: "How it works",
            info2: "Featured",
            info3: "Partnership",
            info4: "Bussiness Ralation",
          }}
        />
        <FooterInfo
          info={{
            title: "Community",
            info1: "Events",
            info2: "Blog",
            info3: "Podcast",
            info4: "Invite a friend",
          }}
        />
        <FooterInfo
          info={{
            title: "Socials",
            info1: "Discord",
            info2: "Instagram",
            info3: "Twitter",
            info4: "Facebook",
          }}
        />
      </div>

      <div className="footer__all-rights-reserved">
        <span>©2025 RailWay. All rights reserved</span>
      </div>
    </div>
  );
}

export default Footer;
