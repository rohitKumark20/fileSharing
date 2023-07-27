import {useRef, useState,useEffect} from 'react'
import { uploadFile } from './services/api';

import './App.css';
const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

function App() {

  const [file, setFile] = useState('');
  const [res, setRes] = useState('');
 
  const fileInputRef = useRef();

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  useEffect(() => {
    const getImage = async() => {
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response = await uploadFile(data);
        setRes(response.path);
      }
    }

    getImage();
  }, [file])
  

  return (
    <div className='container'>
      <img src={logo} alt="" />

      <div className="wrapper">
        <h1>File Sharing Application</h1>
        <p>Upload your files here and get a link to the file to access from anywhere!</p>
   
        <button className="btn" onClick = {() => onUploadClick()}>Upload</button>

        <input type="file" 
        ref = {fileInputRef}
        style = {{display: 'none'}}
        onChange={(e)=>setFile(e.target.files[0])}
        />


        <a href={res} target='blank'>{res}</a>
      </div>
    </div>
  );
}

export default App;
