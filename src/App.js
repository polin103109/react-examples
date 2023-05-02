import "./App.css";
function StudentIntro(props) {
  const { name, institute, department } = props;
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
