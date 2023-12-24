import imagen1 from "../assets/images/image-restaurant.jpg";
import imagen2 from "../assets/images/image-currency.jpg";
import imagen3 from "../assets/images/image-confetti.jpg";
import imagen4 from "../assets/images/image-plane.jpg";
const Articles = () => {
  return (
    <div className="flex flex-col gap-5 p-7">
      <h2 className="text-center text-4xl md:text-left md:py-4">Latest Articles</h2>
      <div className="flex flex-col gap-7 justify-center items-center md:flex-row">
        <section className="bg-white rounded-md overflow-hidden max-w-md  grid grid-rows-2 ">
          <img src={imagen2} alt="imagen money" className="h-48 w-full object-cover" />
          <div className="px-6  flex flex-col gap-2">
            <h3 className="text-xs text-gray-400">By Claire Robinson</h3>
            <h2>Receive money in any currency with no fees</h2>
            <p className="text-gray-400 text-sm">
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </section>
        <section className="bg-white rounded-md overflow-hidden max-w-md grid grid-rows-2 ">
          <img src={imagen1} alt="image that food" className="h-48 w-full object-cover" />
          <div className="px-6 flex flex-col gap-2 ">
            <h3 className="text-xs text-gray-400">By Wilson Hutton</h3>
            <h2>Treat yourself without worrying about money</h2>
            <p className="text-gray-400 text-sm">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
        </section>
        <section className="bg-white rounded-md overflow-hidden max-w-md grid grid-rows-2">
          <img src={imagen4} alt="image air" className="h-48 w-full object-cover" />
          <div className="px-6 flex flex-col gap-2">
            <h3 className="text-xs text-gray-400"> By Wilson Hutton</h3>
            <h2> Take your Easybank card wherever you go</h2>
            <p className="text-gray-400 text-sm">
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
        </section>
        <section className="bg-white rounded-md overflow-hidden max-w-md grid grid-rows-2">
          <img src={imagen3} alt="image invite-only" className="h-48 w-full object-cover" />
          <div className="px-6 flex flex-col gap-2">
            <h3 className="text-xs text-gray-400">By Claire Robinson</h3>
            <h2>Our invite-only Beta accounts are now live!</h2>
            <p className="text-gray-400 text-sm">
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Articles;
