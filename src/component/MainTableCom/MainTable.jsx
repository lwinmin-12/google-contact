import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { FiEdit3, FiStar } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

import {
  Remove,
  MultiRemove,
} from "../../store and slider/slider/ContactSlicer";

import TableHeader from "./TableHeader";
import { useNavigate } from "react-router-dom";
import CreateContactBtn from "../Side Bar Component/CreateContactBtn";

const MainTable = () => {
  const { Contact } = useSelector((state) => state);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [multiSection, setMultiSection] = useState([]);

  const handleCheck = (e, id) => {
    if (e.target.checked) {
      e.target.classList.replace("hidden", "flex");
      setMultiSection((prev) => [...prev, id]);
    } else {
      e.target.classList.replace("flex", "hidden");
      setMultiSection(multiSection.filter((ea) => ea != id));
    }
  };
  const handleDelete = (id) => {
    dispatch(Remove(id));
  };
  const multiDelete = () => {
    dispatch(MultiRemove(multiSection));
    setMultiSection([]);
  };
  const toPerson = (id) => {
    nav("person", { state: { id } });
  };
  return (
    <div className="w-[100%] lg:w-[85%] relative">
      <table className="w-[100%] text-gray-500">
        <thead>
          {multiSection.length > 0 ? (
            <TableHeader>
              <p>
                Selected{" "}
                <span className="text-sky-500">({multiSection.length})</span>{" "}
              </p>
              <button
                className="bg-red-500 px-2 rounded text-white"
                onClick={multiDelete}
              >
                <FaRegTrashAlt />
              </button>
            </TableHeader>
          ) : (
            <TableHeader phone={"Phone Number"} email={"Email"} job={"Company"}>
              Name
            </TableHeader>
          )}
        </thead>
        <tbody>
          <tr>
            <td className="text-sm pt-3">CONTACT( {Contact.length} )</td>
          </tr>

          {Contact.map((each) => {
            return (
              <tr
                key={each.id}
                name="tr"
                onClick={(e) => {
                  if (e.target.tagName == "TD") {
                    toPerson(each.id);
                  }
                }}
                className="text-center hover:bg-gray-200   group duration-300"
              >
                <td className="text-start py-1 flex items-center my-2 ">
                  <input
                    name="check"
                    onClick={(e) => handleCheck(e, each.id)}
                    type="checkbox"
                    className={`hidden mx-3 group-hover:block w-4 h-4 z-50 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                  />
                  <img
                    className="w-[40px] h-[40px] object-cover rounded-full"
                    src={each.photo}
                    alt=""
                  />

                  <span className="mx-3 hidden">
                    {each.firstName + " " + each.surName}
                  </span>
                </td>
                <td>{each.email}</td>
                <td>{each.phone}</td>
                <td>{each.companyName}</td>
                <td className="text-end  duration-75 text-lg ">
                  <div name="hello" className="scale-0 group-hover:scale-[1]">
                    <button className="mx-2 relative sug after:content-['star_contact']">
                      <FiStar />
                    </button>
                    <button
                      onClick={() => handleDelete(each.id)}
                      className="mr-2 relative sug bg-red-500 text-white p-1 rounded"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="absolute lg:hidden bottom-0 right-0">
        <CreateContactBtn />
      </div>
    </div>
  );
};

export default MainTable;
