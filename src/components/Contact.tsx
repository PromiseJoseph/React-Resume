import React from "react";
import { ContactItem } from "../types/interface";



const Contact = () => {
  const contacts : ContactItem[] = [
    {
      id: 1,
      name: "Phone",
      detail: "+234 .....",
    },
    {
      id: 2,
      name: "Email",
      detail: "....",
    },
  ];

  return (
    <>
      <div className=" mb-8">
        <h3 className="text-3xl font-bold">Contact</h3>
        <hr className="border-t-2 border-blue-500 w-12 my-2" />
        <div className="block">
          {
            contacts.map((contact: ContactItem) => (
              <div key={contact.id} className="flex">
                <p className="pl-6 font-bold mr-2">{contact.name} :</p>
                <p>{contact.detail}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};
export default Contact;
