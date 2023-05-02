import "./App.css";
function StudentIntro() {
  return (
    <div>
      <h1>Name:Sabrina Sharmin</h1>
      <h2>Institute:RUET</h2>
      <h3>Department:ECE</h3>
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
