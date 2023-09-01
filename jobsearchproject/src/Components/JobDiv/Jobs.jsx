import React from "react";
// imported icons
import { BiTimeFive } from "react-icons/bi";
    // imported images
import circle from "../../../Assets/circle.png";
import asset from "../../../Assets/asset.png";
import future from "../../../Assets/future.png";
import goverment from "../../../Assets/goverment.png";
import product from "../../../Assets/product.png";
import research from "../../../Assets/research.png";
import eco from "../../../Assets/eco.png";
import databse from "../../../Assets/databse.png";


// High order array method(map)
const Data = [
  {
    id: 1,
    image: circle,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing     elit. Dicta, totam!",
    company: "Novac Linus Com.",
  },
  {
    id: 2,
    image: asset,
    title: "UI Designer",
    time: "16Hrs",
    location: "Manchester",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing     elit. Dicta, totam!",
    company: "Liquid Assessments",
  },
  {
    id: 3,
    image: future,
    title: "Software Eng",
    time: "4Hrs",
    location: "Austria",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing     elit. Dicta, totam!",
    company: "Web Tech Agency",
  },
  {
    id: 4,
    image: goverment,
    title: "UI/UX Designer",
    time: "10Hrs",
    location: "Germany",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing     elit. Dicta, totam!",
    company: "Government",
  },
  {
    id: 5,
    image: product,
    title: "Product Designer",
    time: "2Hrs",
    location: "Morroco",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing     elit. Dicta, totam!",
    company: "VividSculpt Innovations",
  },
  {
    id: 6,
    image: research,
    title: "Researcher",
    time: "14Hrs",
    location: "Norway",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing     elit. Dicta, totam!",
    company: "Nin Co.",
  },
  {
    id: 7,
    image: eco,
    title: "Lead Developer",
    time: "30min",
    location: "Leads",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing     elit. Dicta, totam!",
    company: "EcoTech Dynamics",
  },
  {
    id: 8,
    image: databse,
    title: "Data Scientist",
    time: "2 Days",
    location: "Turkey",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing     elit. Dicta, totam!",
    company: "Name and Sons",
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location} </h6>

              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="Company Logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>

              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-textColor">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
