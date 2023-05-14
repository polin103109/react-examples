import React from "react";
const UseContext = React.createContext({
  id: "",
  firstname: "-------------",
  lastname: "-------",
  age: 0,
  address: {
    country: "",
    city: "",
  },
  url: "",
});
export default UseContext;
