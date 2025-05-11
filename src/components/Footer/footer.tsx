import { FacebookIcon, InstaIcon, LinkedInIcon, TwitterIcon } from '../../assets/svg/svg-export'
import "./footer.css"

export const Footer = () => {
    return (
      <footer className="footer">
        <div className="studio__info">
          <div className="logo__container">
            <img src="" alt="" />
            <p>UNILAG DESIGN STUDIO</p>
          </div>
          <div className="studio__desc">
            <p>
            Pioneering innovative research and education programs that actively 
            involve students in the realm of creativity and exploration.
            </p>
          </div>
          <div className="social__icons">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <InstaIcon />
          </div>
        </div>
        <div className="quick__links">
          <div className="link__container">
            <p>Company</p>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Reviews</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="link__container">
            {" "}
            <p>Support</p>
            <ul>
              <li>Help Center</li>
              <li>Enroll Now</li>
            </ul>
          </div>
        </div>
      </footer>
    );
}