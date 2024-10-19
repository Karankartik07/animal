import React from "react";
import { FaDog } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { FaMoneyCheck } from "react-icons/fa";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function navbar() {
  const links = [
    {
      Icon: <IoHome />,
      Name: "Home",
    },
    {
      Icon: <FcAbout />,
      Name: "About ",
    },
    {
      Icon: <FaMoneyCheck />,
      Name: "Appointment ",
    },
    {
      Icon: <MdOutlineAssignmentInd />,
      Name: "Sign In ",
    },
  ];

 const brief =[
  {
    topic:"Advocacy :",
    details:"  Support animal rights organizations and campaigns that work towards improving the lives of animals"
  },
  {
    topic:"",
    details:""
  },
  {
    topic:"",
    details:""
  },
  {
    topic:"",
    details:""
  },
  {
    topic:"",
    details:""
  }

 ];
  return (
    <>
      <div className="w-full h-screen  text-black">
        <nav className="w-full h-[100px] flex items-center gap-4 ">
          <div className="animallogo h-[150px] w-[150px] flex items-center justify-center">
            <FaDog className="size-10" />
          </div>
          <input
            type="text"
            className="w-[400px] h-8 rounded-md flex items-center ml-auto"
          />
          <div className="flex items-center cursor-pointer">
            <FaSearch />
          </div>

          <div className="list-none flex items-center gap-4 ml-auto mr-6">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-[3px] cursor-pointer"
                >
                  {link.Icon}
                  {link.Name}
                </li>
              );
            })}
          </div>
        </nav>
        <div className="w-full h-[80px] flex">
          <p className=" uppercase text-black font-bold flex justify-center items-center text-4xl gap-4 p-3 ">
            animal friendly
          </p>
          <div className="flex gap-2 items-center ml-auto mr-3">
            <div className="w-5 h-5 rounded-full ml-1 flex items-center justify-center bg-gray-400">
              <FaArrowLeft />
            </div>
            <div className="w-5 h-5 rounded-full  flex items-center justify-center bg-gray-400">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className=" h-[69.8%] w-[40%] p-6 ">
          <p className="font-bold uppercase">
            Expressing love for animals involves both actions and sentiments
            that reflect care, respect, and empathy. Here are a few ways to
            articulate this affection:
          </p>
          {/* <ul>
            <li>
              <span className="font-semibold">Advocacy</span>: Support animal
              rights organizations and campaigns that work towards improving the
              lives of animals.
            </li>
            <li>
              <span className="font-semibold">Kindness</span> : Show compassion
              by adopting pets from shelters, providing them with a loving home,
              and ensuring their well-being.
            </li>
            <li>
              <span className="font-semibold">Education</span> : Share knowledge
              about the importance of humane treatment and responsible pet
              ownership.
            </li>
            <li>
             
              <span className="font-semibold"> Action</span>: Participate in or
              donate to wildlife conservation efforts to protect animals in
              their natural habitats.
            </li>
            <li>
             
              <span className="font-semibold">Empathy</span>: Understand and
              respond to the needs and emotions of animals, whether they are
              pets or wildlife.
            </li>
          </ul> */}
          <ul>
          {
            brief.map((brief, index)=>
            <li  key={index} className="font-semibold" >
              {brief.topic  }
              {brief.details}
            </li>
            )
          }
          </ul>
        </div>
      </div>
    </>
  );
}

export default navbar;
