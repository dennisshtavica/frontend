import React from "react";
import "./Footer.css";
import { UserIcon } from "../assets/Icons";
import { FacebookIcon } from "../assets/Icons";
import { TwitterIcon } from "../assets/Icons";
import { InstagramIcon } from "../assets/Icons";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="spotify-footer">
            <UserIcon />
          </div>
          <div className="footer-links">
            <div className="footer-data">
              <p>COMPANY</p>
              <a href="">About</a>
              <a href="">Jobs</a>
              <a href="">For the Record</a>
            </div>
            <div className="footer-data">
              <p>COMMUNITIES</p>
              <a href="">For Artists</a>
              <a href="">Developers</a>
              <a href="">Advertising</a>
              <a href="">Investors</a>
              <a href="">Vendors</a>
            </div>
            <div className="footer-data">
              <p>USEFUL LINKS</p>
              <a href="">Support</a>
              <a href="">Web Player</a>
              <a href="">Free Mobile App</a>
            </div>
          </div>
          <div className="footer-socials">
            <a href="">
              <FacebookIcon />
            </a>
            <a href="">
              <TwitterIcon />
            </a>
            <a href="">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
