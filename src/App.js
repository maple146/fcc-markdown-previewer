import './App.css';
import {useState} from 'react';
import marked from 'marked';
import placeholder from './placeholder.js'

function App() {
  const [textAreaValue, setTextAreaValue] = useState(placeholder)
  const markedText = marked(textAreaValue);
  marked.setOptions({
    breaks: true
  })

  const handleChange = (event) => {
    setTextAreaValue(event.target.value)
  }

  return (
    <div className="App">
      <div className="editor-section">
        <h3>Editor</h3>
        <textarea name="editor" id="editor" defaultValue={placeholder} onChange={handleChange}></textarea>
      </div>
      <div className="preview-section">
        <h3>Preview</h3>
        <div id="preview" dangerouslySetInnerHTML={{__html: markedText}}></div>
      </div>
    </div>
  );
}

export default App;
