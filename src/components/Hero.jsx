import bgMobile from "../assets/images/bg-intro-mobile.svg";
import bgDesktop from "../assets/images/bg-intro-desktop.svg";
import imagenMockups from "../assets/images/image-mockups.png";
import Button from "./Button";
const Hero = () => {
  return (
    <div className="md:grid md:grid-cols-2 items-center  gap-2 h-screen ">
      <div className="relative  md:order-1 ">
        <img src={bgMobile} alt="Imagen hero" className="relative -top-12   md:hidden" />
        <img
          src={bgDesktop}
          alt=" imagen hero"
          className="relative  hidden md:block md:scale-[2] md:-top-40 left-56 "
        />
        <img
          src={imagenMockups}
          alt="bg"
          className="absolute bottom-28  md:-bottom-20 md:-right-52 md:scale-[1.4] z-20"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 md:gap-8 relative  text-center px-4 -top-20 md:items-start md:text-left md:-top-14  ">
        <h1 className="text-4xl text-gray-600  md:text-6xl">
          Next generation digital banking
        </h1>
        <p className="text-gray-500 text-lg md:pr-20 ">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button text={"Request Invite"} />
      </div>
    </div>
  );
};

export default Hero;
