import React, { useEffect, useState } from "react";
import Profile from "./Profile/Profile";
import "./App.css";
import UseContext from "./context/UserContext";
const Url = ({ url }) => <a href={url}>{url}</a>;
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
      <UseContext.Consumer>
        {({ url }) => <Url url={url} />}
      </UseContext.Consumer>
    </div>
  );
}

export default App;
