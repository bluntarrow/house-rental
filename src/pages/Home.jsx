// init framer
import MotionDiv from "../components/utils/MotionDiv";

import img from "../assets/img (1).jpg";
import img1 from "../assets/img (2).jpg";
import img2 from "../assets/img (3).jpg";
import img3 from "../assets/img (4).jpg";
import img4 from "../assets/img (5).jpg";
import img5 from "../assets/img (6).jpg";
import map from "../assets/map.png";

import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  StarIcon,
  HomeIcon,
  TvIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Home = () => {
  const imgs = [img1, img2, img3, img4, img5,img];
  return (
    <MotionDiv>
      <div className="px-20">
        <div className="relative">
          <img
            src={img}
            className="aspect-[2/1] rounded-md object-cover shadow-sm"
            alt=""
          />
          <div className="absolute top-0 p-20">
            <h1 className="text-7xl font-bold max-w-min text-gray-800">
              Modern house
            </h1>
            <h3 className="font-medium mt-2 text-gray-600">
              3 bedrooms, 1 kitchen, 2 bathrooms
            </h3>
            <h4 className="font-bold mt-10 text-gray-600">
              -2&deg;C Very cold
            </h4>
            <div className="flex text-gray-600 mt-2">
              <ArrowLeftCircleIcon className="h-8" />
              <ArrowRightCircleIcon className="h-8" />
            </div>
          </div>
          <ul className="absolute right-0 top-0 p-8 flex flex-col">
            <li>
              {[1, 2, 3].map((i) => (
                <img
                  src={img5}
                  className="h-20 aspect-square border-4 rounded object-cover mb-4"
                  alt=""
                />
              ))}
            </li>
          </ul>
          <div className="absolute -bottom-20 flex justify-center w-full px-20">
            <div className=" w-full h-40 bg-gray-50 rounded-md rounded-tl-none relative shadow-sm p-5 grid grid-cols-7 gap-5">
              {/* tabs */}
              <ul className="absolute -top-14 h-14 flex font-semibold text-gray-800 text-lg">
                <li className="h-full w-32 bg-gray-50 flex justify-center items-center gap-1 rounded-tl-md">
                  <HomeIcon className="h-5" />
                  Stays
                </li>
                <li className="h-full w-32 bg-gray-900/90 text-gray-50 flex justify-center items-center gap-1 border-x border-gray-200/50">
                  <StarIcon className="h-5" />
                  Ratings
                </li>
                <li className="h-full w-32 bg-gray-900/90 text-gray-50 flex justify-center items-center gap-1 rounded-tr-md">
                  <TvIcon className="h-5" />
                  Facilities
                </li>
              </ul>

              {/* content */}
              <div className="col-span-2 border-2 p-5 text-gray-700 rounded flex flex-col justify-between">
                <h6 className="text-sm font-medium uppercase">City</h6>
                <h5 className="text-xl font-bold text-gray-900">Los Angeles</h5>
                <h6 className="text-sm font-medium">United States</h6>
              </div>
              <div className="col-span-2 border-2 p-5 text-gray-700 rounded flex flex-col justify-between">
                <h6 className="text-sm font-medium uppercase">Tenants</h6>
                <h5 className="text-xl font-bold text-gray-900">4 people</h5>
                <h6 className="text-sm font-medium flex gap-4">
                  <div className="border-b-2 border-gray-700">Less</div>{" "}
                  <div>More</div>
                </h6>
              </div>
              <div className="col-span-3 border-2 p-5 text-gray-700 rounded grid grid-cols-2">
                <div className="flex flex-col justify-between">
                  <h6 className="text-sm font-medium uppercase">Check In</h6>
                  <h5 className="text-xl font-bold text-gray-900 capitalize flex items-center gap-1">
                    fri, 4 oct 2022 <CalendarDaysIcon className="h-5" />{" "}
                  </h5>
                  <h6 className="text-sm font-medium flex gap-4">
                    <div className="border-b-2 border-gray-700">Prev</div>{" "}
                    <div>Next</div>
                  </h6>
                </div>
                <div className="flex flex-col justify-between">
                  <h6 className="text-sm font-medium uppercase">Check Out</h6>
                  <h5 className="text-xl font-bold text-gray-900 capitalize flex items-center gap-1">
                    fri, 4 nov 2022 <CalendarDaysIcon className="h-5" />
                  </h5>
                  <h6 className="text-sm font-medium flex gap-4">
                    <div className="border-b-2 border-gray-700">Prev</div>{" "}
                    <div>Next</div>
                  </h6>
                </div>
              </div>

              {/* button */}
              <button className="absolute -bottom-12 right-5 py-4 px-8  bg-gray-900 text-gray-50 rounded flex items-center gap-1">
                Search Stays
                <ArrowRightIcon className="h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -z-50 -mt-20 -mb-40">
        <img
          src={map}
          className=" aspect-[2/1] rounded-md object-cover grayscale opacity-40 relative w-screen"
          alt=""
        />
        <div className="absolute top-0 w-full h-full flex items-center justify-center">
          <div className="h-10 w-10 bg-gray-700 rounded-full flex justify-center items-center animate-pulse">
            <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full flex items-center px-48">
          <div className="px-6 py-4 bg-gray-50 shadow rounded flex items-center gap-6 justify-betweentext-gray-900 relative">
            <div>
              <h3 className="text-sm text-gray-700">Location</h3>
              <p className=" text-xl font-medium">Lane 5 Off John Road, 17</p>
            </div>
            <ArrowsPointingOutIcon className="h-6 cursor-pointer" />
          </div>
        </div>
      </div>

      <div>
        <div className=" flex justify-center">
          <h2 className="text-5xl font-bold text-gray-800">
            Explore more houses
          </h2>
        </div>

        <div className="grid grid-cols-4 px-40 py-8 gap-4">
          {imgs.map((i) => (
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.05 * imgs.indexOf(i), type: "tween" },
              }}
              viewport={{ once: false }}
            >
              <img
                src={i}
                alt=""
                className="aspect-[3/4] object-cover rounded shadow"
              />
              <div className="absolute w-full h-1/4 bg-gray-900/60 bottom-0 rounded-b px-4 py-2 text-gray-100">
                <h3 className="text-lg">Modern House</h3>
              </div>
              <button className="absolute top-4 right-4 bg-gray-900/60 rounded-full p-2 text-gray-50">
                <HeartIcon className="h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
};

export default Home;
