import React from "react";
import { educationData } from "./store/educationData";
import { EducationItem } from "../types/interface";

const Education = () => {
 
  const educations: EducationItem[] =  educationData;
  return (
    <>
      <div className="mb-8">
        <div>
          <h3 className="text-3xl font-bold ">Education</h3>
          <hr className="border-t-2 border-blue-500 w-12 my-2" />
        </div>
        <div className="mt-4 pl-6">
          {
            educations.map((education: EducationItem) => (
              <div className="mb-4 text-left " key={education.id}>
                <p className="font-bold text-2xl">{education.degree}</p>
                <p className="font-bold text-xl">{education.institution}</p>
                <p className=" font-semibold italic text-gray-500 ">{education.date}</p>
                <p>{education.details}</p>
              </div>
            ))
          }
         
        </div>
      </div>
    </>
  );
};
export default Education;
