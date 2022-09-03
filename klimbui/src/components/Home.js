import React from "react";
import "./Home.css";
import Axios from "axios";
import {useNavigate} from 'react-router-dom';


function Home() {
  const text= "Upload a .xlsx or .xls file here";
  const [file, setFile] = React.useState();

  const navigate=useNavigate();

  const handleFile = async () => {
    const data = new FormData();
    data.append("file", file);
    Axios.post("http://localhost:5000/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate('/success');
  };

  return (
    <div
      style={{ display: "flex", alignItem: "center", justifyContent: "center" }}
    >
      <div
        style={{
          height: "300px",
          width: "1000px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="image-upload">
          <label for="file-input">
            <img
              src="https://static.thenounproject.com/png/1058226-200.png"
              alt="upload"
              style={{ height: "100px", width: "100px" }}
            />
          </label>
          <input
            id="file-input"
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              setFile(file);
            }}
          />
        </div>
        <div style={{marginBottom:'15px'}}>{file ? file.name:text}</div>
        <div>
        {file ? <button style={{backgroundColor:'#4CAF50',cursor:'pointer',textAlign:'center',border:'none',borderRadius:'20px',padding:'10px 21px',fontSize:'16px'}} onClick={handleFile}>Submit</button> : <></>}
        </div>
      </div>
    </div>      
);
}

export default Home;
