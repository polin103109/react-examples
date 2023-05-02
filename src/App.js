import "./App.css";
function StudentIntro({ name, institute, department }) {
  return (
    <div>
      <h1>{`Name:${name}`}</h1>
      <h2>{`Institute:${institute}`}</h2>
      <h3>{`Department:${department}`}</h3>
    </div>
  );
}

function App() {
  const student1 = {
    name: "Sabrina",
    institute: "Ruet",
    department: "ECE",
  };

  return (
    <div className="App">
      <StudentIntro {...student1} />
      <StudentIntro name={"Sharmin"} institute={"DU"} department={"CSE"} />
    </div>
  );
}

export default App;
