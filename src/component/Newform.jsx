import React, { useState } from "react";
import { PhotoUpload, FormInput } from "./new form component";
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePlus } from "react-icons/ai";

import { Add } from "../store and slider/slider/ContactSlicer";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Newform = ({ id }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const imageTag = useRef();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    id: uuidv4(),
    photo: "",
    firstName: "",
    surName: "",
    companyName: "",
    jobTitle: "",
    phone: "",
    email: "",
  });
  const handleSummit = (imgSrc) => {
    if (formData.firstName == "" || formData.phone == "") {
      setShow(true);
      return;
    }
    setFormData((prev) => ({ ...prev, photo: imgSrc }));

    dispatch(Add(formData));

    nav("/");
  };

  const handleImageChange = (img) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener("load", (event) => {
      imageTag.current.src = event.target.result;
      setFormData((prev) => ({ ...prev, photo: event.target.result }));
    });
  };

  const handleInputChange = (value, name) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-[100%]">
      <div className="flex">
        <PhotoUpload
          handleImageChange={handleImageChange}
          imageTag={imageTag}
        />

        <div className="flex">
          <button
            onClick={handleSummit}
            className=" mt-auto mb-5 text-[0.9rem]  px-7 py-2 text-white rounded bg-sky-500"
          >
            save
          </button>
        </div>
      </div>

      <hr />
      <FormInput handleInputChange={handleInputChange} />
      {show && (
        <div className="w-[100%] h-[500px] z-10 bg-black bg-opacity-[0.8] absolute top-0 bottom-0 m-auto left-0 right-0 flex justify-center items-center">
          <h1 className="text-white">
            You need to fill Name and Phone to save
          </h1>
          <div
            onClick={() => setShow(!show)}
            className="text-white rotate-45 text-3xl absolute top-5 right-10"
          >
            <AiOutlinePlus />
          </div>
        </div>
      )}
    </div>
  );
};

export default Newform;
