import './App.css';
import JoiditEditor from "jodit-react";
import { useRef, useState, useEffect } from 'react';

function App() {
  const editorRef = useRef(null)
  const [Data, setData] = useState('')
  const [Img, setImg] = useState('')
  const inputRef = useRef(null)

  const convert = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setImg(reader.result.toString())
    }

    reader.readAsDataURL(file)
  }

  const check = () => {
    const thatData = inputRef.current.value
    console.log(thatData)
  }

  const [Time, setTime] = useState(new Date())
  
  return (
    <div>
      <JoiditEditor
        ref={editorRef}
        value={Data}
        onChange={(newData) => setData(newData)}
      />
      <div dangerouslySetInnerHTML={{ __html: Data }} />
      <input type='file' onChange={convert}/>
      <img src={Img} alt='Converted' />
      <input type='text' ref={inputRef} />
      <button onClick={check}>
        Check
      </button>


      <div>
        {/* Clock in React JS */}
        <h2>
          Clock
        </h2>
        <div>
          Date -&nbsp;
          {
            Time.getUTCDate() + " " + (Time.getMonth() + 1) + " " + Time.getFullYear()
          }
          <br />
          Time -&nbsp;
          {
            Time.getHours() + " " + Time.getMinutes() + " " + Time.getSeconds()
          }
        </div>
      </div>
    </div>
  );
}

export default App;
