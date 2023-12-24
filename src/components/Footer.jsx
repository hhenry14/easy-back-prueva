import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import youtube from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
import Button from "./Button";
import { IconLogo } from "./Icons";
const Footer = () => {
  return (
    <div className=" text-gray-400 flex flex-col justify-center items-center p-8 gap-6 text-center max-w-[1200px] m-auto md:flex-row md:justify-between ">
      <div className="md:flex md:gap-20">
        <div className="flex flex-col gap-4 ">
          <IconLogo fill="#ddd" />
          <div className="flex gap-5">
            <img src={facebook} alt="Logo de la empresa" />

            <img src={youtube} alt="youtube" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
        <div className="flex flex-col gap-3 md:gap-20 md:flex-row md:text-left">
          <div className="flex flex-col gap-3">
            <p>About Us</p>
            <p> Contact</p>
            <p>Blog</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>Carees</p>
            <p>Suport</p>
            <p>Privacy Polity</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:text-right">
        <div>
          <Button text="Request Invite" />
        </div>
        <p>@ EastBanck . All Rightt Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
