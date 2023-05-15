import React from "react";
const UseContext = React.createContext({
  id: "1234",
  firstname: "Sabrina",
  lastname: "Sharmin",
  age: 23,
  address: {
    country: "USA",
    city: "NY",
  },
  url: "https://github.com/polin103109",
});
export default UseContext;
