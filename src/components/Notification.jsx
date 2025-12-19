import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Notification = () => {
  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, error?";
  const link = "/about"; // You can change this to any link you want

  return (
    <>
      <div className=" bottom-0 w-full bg-blue-800 text-white z-50">
        <Marquee>
          <div className="flex items-center whitespace-nowrap p-4 py-2 shrink-0">
            <Link
              to={link}
              className="text-sm md:text-base font-medium flex gap-10 hover:underline cursor-pointer"
            >
              {message}
              {message}
            </Link>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Notification;
