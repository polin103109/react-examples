import "./App.css";
function StudentIntro(props) {
  // const name = "Sabrina Sharmin";
  // const institute = "RUET";
  // const department = "ECE";
  return (
    <div>
      <h1>{`Name:${props.name}`}</h1>
      <h2>{`Institute:${props.institute}`}</h2>
      <h3>{`Department:${props.department}`}</h3>
    </div>
  );
}

function App() {
  const student1 = {
    name: "Sabrina",
    institute: "Ruet",
    department: "ECE",
  };
  const student2 = {
    name: "Sharmin",
    institute: "JU",
    department: "CSE",
  };
  return (
    <div className="App">
      <StudentIntro {...student1} />
      <StudentIntro {...student2} />
    </div>
  );
}

export default App;
