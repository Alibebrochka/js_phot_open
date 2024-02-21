import React, { useState } from "react";
export function OpenPhoto() {
    const [file, setFile] = useState();
    function handleChange(e) {
        //console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <>
            <h1>Photo</h1>
            <div className="App">
                <input type="file" onChange={handleChange} />
                <img src={file} />
            </div>
        </>
    )
}