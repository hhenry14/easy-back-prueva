import iconBudgeting from "../assets/images/icon-online.svg";
import iconBanking from "../assets/images/icon-budgeting.svg";
import iconOnboarding from "../assets/images/icon-onboarding.svg";
import iconOpenAPI from "../assets/images/icon-api.svg";
const SecctionOne = () => {
  return (
    <div className="text-center px-4 py-10 md:text-left md:py-20 ">
      <div className=" p-6 flex flex-col gap-4 md:gap-8 md:pb-20">
        <h2 className="text-4xl">Why choose Easybank?</h2>
        <p className="text-gray-500 text-sm md:pr-[33rem]">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 px-4 md:flex-row">
        <section className=" flex flex-col justify-center items-center gap-4 md:items-start md:gap-8">
          <img src={iconBudgeting} alt="Simple Budgeting" />
          <h2 className="text-xl font-semibold">Simple Budgeting</h2>
          <p className="text-gray-500 text-sm">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </section>
        <section className=" flex flex-col justify-center items-center gap-4 md:items-start md:gap-8">
          <img src={iconBanking} alt="Fast Onboarding" />
          <h2 className="text-xl font-semibold">Fast Onboarding</h2>
          <p className="text-gray-500 text-sm">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </section>
        <section className=" flex flex-col justify-center items-center gap-4 md:items-start md:gap-8">
          <img src={iconOnboarding} alt="Online Banking" />
          <h2 className="text-xl font-semibold">Online Banking</h2>
          <p className="text-gray-500 text-sm">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </section>
        <section className=" flex flex-col justify-center items-center gap-4 md:items-start md:gap-8">
          <img src={iconOpenAPI} alt="Open API" />
          <h2 className="text-xl font-semibold"> Open API</h2>
          <p className="text-gray-500 text-sm">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </section>
      </div>
    </div>
  );
};
export default SecctionOne;
