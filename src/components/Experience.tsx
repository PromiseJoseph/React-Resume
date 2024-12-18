import React from "react"
import { ExperienceItem } from "../types/interface"
import { experienceData } from "./store/experienceData"
const Experience = () => {

  const experiences: ExperienceItem[] = experienceData
  return (<>
    <div className="mb-8 ">
      <h3 className="text-3xl font-bold">Experience</h3>
      <hr className="border-t-2 border-blue-500 w-12 my-2" />
      <div className="pl-6">
        {
          experiences.map((experience: ExperienceItem) => (
            <div className="mb-4" key={experience.id}>

              <p className="font-bold text-2xl">{experience.title}</p>
              <p className="font-bold text-xl">{experience.companyName}</p>
              <p className="text-gray-500 italic font-semibold"> {experience.date}</p>

              {/* <p>
                {experience.details.}
              </p> */}
              <ul className="list-disc pl-5">
                {experience.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  </>)
}
export default Experience