import React from "react";
import Name from "./Name.tsx";
import Education from "./Education.tsx";
import Profile from "./Profile.tsx";
import Experience from "./Experience.tsx";
import Contact from "./Contact.tsx";
import '../css/Layout.css'

const Layout = () => {
  const customScrollbarStyle: {} = {
    maxHeight: '100vh',
    overflowY: 'scroll',
    msOverflowStyle: 'none',  /* IE and Edge */
    scrollbarWidth: 'none',  /* Firefox */
  };
  return (
    <div className="bg-gray-900 text-gray-300 h-full ">
      <div className=" p-8 md:grid md:grid-cols-2 flex fle flex-col-reverse">
        <div className="container-one w-full text-left pl-10 mx-auto">
          <div className="mt-8 ">
            <div className="hidden md:block">
            <ProfileImage />
            </div>
            <div className="max-h-screen custom-scrollbar " style={customScrollbarStyle} >
              <Education />
              <Contact />
            </div>

          </div>
        </div>
        <div className="container-two  text-left w-full pl-10 mx-auto">
          <div className="mt-8">
            <div className="md:hidden">
            <ProfileImage />
            </div>
            <Name />
            <div className="max-h-screen custom-scrollbar " style={customScrollbarStyle} >
              <Profile />
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;

export const ProfileImage = () => {
  return (
    <>
      <div className="mb-8  mx-auto">
        <img
          src="https://placehold.co/100x100"
          alt="Profile picture of Odelola Promise"
          className="rounded-full w-56 mb-4"
        />
      </div>
    </>
  );
};
