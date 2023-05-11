import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  const user = {
    id: "1234",
    firstname: "Sabrina",
    lastname: "Sharmin",
    age: 23,
    address: {
      country: "USA",
      city: "NY",
    },
    url: "https://github.com/polin103109",
  };
  return (
    <div className="App">
      <Profile user={user} />
    </div>
  );
}

export default App;
