import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormInput, PhotoUpload } from "./new form component";
import { useDispatch, useSelector } from "react-redux";
import { CgTag } from "react-icons/cg";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { update } from "../store and slider/slider/ContactSlicer";

const Edit = () => {
  const location = useLocation();
  const editImageTag = useRef();
  const { Contact } = useSelector((state) => state);
  const inputTag = useRef();
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [editForm, setEditForm] = useState({
    id: null,
    photo: "",
    firstName: "",
    surName: "",
    companyName: "",
    jobTitle: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (value, name) => {
    setEditForm((prev) => ({ ...prev, [name]: value }));
    console.log(value);
  };

  const setImage = (img) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener("load", (event) => {
      editImageTag.current.src = event.target.result;
      setEditForm((prev) => ({ ...prev, photo : event.target.result  }))
    });
  };


  useEffect(() => {
    Contact.map((ea) => {
      ea.id == location.state.id &&
        setEditForm((prev) => ({
          ...prev,
          id: ea.id,
          photo: ea.photo,
          firstName: ea.firstName,
          surName: ea.surName,
          companyName: ea.companyName,
          jobTitle: ea.jobTitle,
          phone: ea.phone,
          email: ea.email,
        }));
    });
  }, []);

  return (
    <>
      <div className="h-[100vh]  w-[100%]">
        {Contact.map((ea) => {
          // i.id == location.state.id
          //   ? console.log("work")
          //   : console.log("not");
          if (ea.id == location.state.id) {
            return (
              <div key={ea.id}>
                <div  className="flex">
                  <div className="w-[80%] mb-3 relative flex items-center space-x-7">
                    <div className="text-gray-500 absolute  text-2xl top-0 ">
                      <AiOutlinePlus
                        onClick={() => nav(-1)}
                        className="rotate-45"
                      />
                    </div>
                    <div className="w-[15%] ml-5 relative">
                      <input
                        ref={inputTag}
                        onChange={() => setImage(inputTag.current.files[0])}
                        type="file"
                        className="hidden"
                      />
                      <img
                        ref={editImageTag}
                        className="w-full rounded-full"
                        src={ea.photo}
                      />
                      <MdOutlineAddAPhoto
                        onClick={() => inputTag.current.click()}
                        className="text-4xl bg-black bg-opacity-[0.3] absolute top-0 right-0 left-0 bottom-0 m-auto rounded-full w-[50px] h-[50px]  p-3 text-white"
                      />
                    </div>
                    <button className="border flex justify-center items-center rounded-full w-[40px] h-[40px]">
                      <CgTag className=" text-[1rem] text-sky-600" />
                    </button>
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => {
                        dispatch(update(editForm));
                        nav("/");
                      }}
                      className=" mt-auto mb-5 text-[0.9rem]  px-7 py-2 text-white rounded bg-sky-500"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <FormInput
                  editForm={editForm}
                  handleInputChange={handleInputChange}
                />
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Edit;
