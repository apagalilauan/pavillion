import React from "react";
import Card from "../card/Card";
import Chip from "../chip/Chip";

interface Props {
  data: String;
}

const SampleSection = ({ data }: Props) => {
  return (
    <div className="mb-5 font-satoshi">
      <div className="flex flex-col sm:flex-row gap-5  bg-gray-800 items-center rounded-lg px-10 py-10">
        <div className="flex-1 w-full">
          <div className="flex flex-col mb-5">
            <h1 className="text-white font-bold text-3xl">Hi!</h1>
            <h1 className="text-white font-bold text-5xl">I'm {data.name}!</h1>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1676323600455-b4c7a3d48bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80"
              alt=""
              className="w-full h-36 rounded-lg object-cover"
            />
          </div>

          <div>
            <h1 className="text-white font-satoshi font-bold text-xl mt-4 mb-1">
              {data.jobTitle}
            </h1>
            <p className="text-white font-satoshi">{data.description}</p>
          </div>
        </div>
        <div className="flex-1 w-full">
          <Card variant="tertiary" className=" text-white mb-5 ">
            <div>
              <h1 className="text-white font-bold text-lg">Quick Overview</h1>

              {data.overview.map((item) => {
                return <div>{item.info}</div>;
              })}
            </div>
          </Card>

          <Card variant="tertiary" className=" text-white ">
            <div className="mb-5">
              <h1 className="text-lg font-bold">Latest Project</h1>
              <p>{data.latestProjects.desc}</p>
            </div>
            <div className="flex gap-3 ">
              {data.latestProjects.projects.tags.map((item) => {
                return <Chip variant="outlined">{item.tagName}</Chip>;
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SampleSection;
