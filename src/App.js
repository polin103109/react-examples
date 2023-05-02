import "./App.css";
function StudentIntro() {
  const name = "Sabrina Sharmin";
  const institute = "RUET";
  const department = "ECE";
  return (
    <div>
      {console.log("rendered")}
      <h1>{`Name:${name}`}</h1>
      <h2>{`Institute:${institute}`}</h2>
      <h3>{`Department:${department}`}</h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <StudentIntro />;
    </div>
  );
}

export default App;
