import React, { useState } from "react";

const Name = () => {
  const firstName = 'Promise'
  const otherNames = 'Odelola'
  const profession = 'Software Engineer'

  return (
    <>
      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          <div className="">
            <span>{firstName}</span>
            <span> {otherNames}</span>
          </div>
          
        
        </h1>
        <h2 className="text-xl text-gray-500">{profession}</h2>
      </div>
    </>
  );
};
export default Name;
