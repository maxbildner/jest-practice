import "./App.css";
import Button from "./components/button/button.js";
// JEST NOTES FROM VIDEO TUTORIAL:
// https://www.youtube.com/watch?v=3e1GHCA3GP0
// - can test css/visuals with jest
// - use "data" html attributes instead of id's to differentiate testing from css
// when you run the __test__ file,
// - jest looks for the file names that end with .test.js
// - to run tests, in terminal run "npm test"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="click me please"></Button>
        {/* For Button Testing- best is to do it inside button? */}
      </header>
    </div>
  );
}

export default App;
