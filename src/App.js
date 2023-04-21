import './css/App.css';
import React from 'react';
import Preview from './components/preview'


function App() {

  const [text, setText] = React.useState("");

  const handleChange = (e)=>setText(e.target.value);

  return (
    <div className="text-center px-4">
      <h1 className="p-4">Markdown previewer</h1>
      <textarea name="text" id="editor" value={text} rows="10" className="textarea" onChange={handleChange}></textarea>
      <h3 className="mt-3">Output</h3>
      <Preview markdown={text} />
    </div>
  );
}

export default App;
