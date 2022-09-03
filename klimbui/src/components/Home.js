    import React from "react";
    import { useEffect } from "react";
    import "./Home.css";

    function Home() {
        const [text, setText] = React.useState("Upload a .xlsx or .xls file here");
        const [submit,setSubmit] = React.useState(false);

        const handleFileName = (e) =>{
            setText(e.target.files[0].name);
            console.log(e.target.files[0].name);
            setSubmit(true);
        }

        useEffect(() => {
            if(submit){
                document.getElementById("submit").click();
            }
        }, [submit,text])
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
            <div class="image-upload">
            <label for="file-input">
                <img src="https://static.thenounproject.com/png/1058226-200.png" style={{height:'100px',width:'100px'}} onSubmit={handleFileName}/>
            </label>
            <input id="file-input" type="file" />
            </div>
            <div>
                {text}
            </div>
        </div>
        </div>
    );
    }

    export default Home;
