import "./About.css";
import aboutBg from "../../images/about_bg.png";

export default function About () {
  return (
    <div className="About">
      <h2 className="mini-header">
        <span className="line-after">
          <span className="orange-color">#</span>about-me 😃
        </span>
      </h2>

      <div className="about-container">
        <div className="content">
          <p>
            I bring over 5 years of extensive experience as a frontend software
            engineer, recognized for delivering engaging and seamless software
            solutions that consistently meet and exceed industry standards. My
            work has directly impacted over 2 million users across West Africa,
            South Africa, and Europe, underscoring my ability to create
            impactful digital experiences. I excel in leadership and management,
            having successfully formed and led high-performing frontend
            development teams. My expertise has driven the successful
            introduction of innovative products in sectors such as Fintech,
            Cryptocurrency & Web3, SAAS, and Developer tools. My experience
            extends to making informed and strategic decisions to optimize
            frontend applications, ensuring robust performance and user
            satisfaction.
          </p>
        </div>

        <div className="image-container">
          <img src={aboutBg} alt="ezelu about background" />
        </div>
      </div>
    </div>
  );
}
