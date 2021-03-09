import './App.css';
import {useState} from 'react';
import marked from 'marked';

function App() {
  const [textAreaValue, setTextAreaValue] = useState("")
  const markedText = marked(textAreaValue);

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
        {/* <div id="preview">{textAreaValue}</div> */}
        <div id="preview" dangerouslySetInnerHTML={{__html: markedText}}></div>
      </div>
    </div>
  );
}

export default App;
