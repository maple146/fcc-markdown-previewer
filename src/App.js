import './App.css';
import {useState} from 'react';

function App() {
  const [textAreaValue, setTextAreaValue] = useState("")

  const handleChange = (event) => {
    setTextAreaValue(event.target.value)
  }

  return (
    <div className="App">
      <div className="editor">
        <h1>Editor</h1>
        <textarea name="editor" id="editor" cols="30" rows="10" defaultValue="Blabla" onChange={handleChange}></textarea>
      </div>
      <div className="preview">
        <h1>Preview</h1>
        <h2 id="preview">{textAreaValue}</h2>
      </div>
    </div>
  );
}

export default App;
