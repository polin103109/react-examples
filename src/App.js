import React, { useEffect, useState } from "react";
import Profile from "./Profile/Profile";
import UseContext from "./context/UserContext";
import "./App.css";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    setTimeout(() => {
      setUser({
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
    }, 5000);
  }, []);
  if (!user) {
    return <div>Loading....</div>;
  }

  return (
    <div className="App">
      <UseContext.Provider value={user}>
        <Profile />
      </UseContext.Provider>
    </div>
  );
}

export default App;
