import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    photo:
      "https://i.pinimg.com/736x/80/e9/fd/80e9fdeb5548e1efa6fcaf28c0664761.jpg",
    firstName: "Lwin Min",
    surName: "Oo",
    companyName: "MMS Junior",
    jobTitle: "Web Developer",
    phone: "09123456",
    email: "moemaylin@gmail.com",
  },
  {
    id: uuidv4(),
    photo:
      "https://i.pinimg.com/564x/f3/7d/34/f37d34650654d25711666a8460099929.jpg",
    firstName: "Min Lwin",
    surName: "Z",
    companyName: "Junior MMS",
    jobTitle: "Developer Web",
    phone: "09945239485",
    email: "minmay@gmail.com",
  },
];

const ContactSlicer = createSlice({
  name: "Contact",
  initialState,
  reducers: {
    Add: (state, action) => {
      console.log(action.payload);
      return [...state, action.payload];
    },
    Remove: (state, action) => {
      // state.map(e=>console.log(e))
      return state.filter((each) => each.id != action.payload);
    },
    MultiRemove: (state, action) => {
      console.log(action.payload);
      // state.map(each=> console.log(action.payload.includes))

      return state.filter((each) => !action.payload.includes(each.id));
    },
    update: (state, action) => {
      console.log(action.payload);
      return state.map((ea) =>
        ea.id == action.payload.id
          ? {
              ...ea,
              id: action.payload.id,
              photo: action.payload.photo,
              firstName: action.payload.firstName,
              surName: action.payload.surName,
              companyName: action.payload.companyName,
              jobTitle: action.payload.jobTitle,
              phone: action.payload.phone,
              email: action.payload.email,
            }
          : {
              ...ea,
            }
      );
    },
  },
});

export const { Add, Remove, MultiRemove, update } = ContactSlicer.actions;
export default ContactSlicer.reducer;
