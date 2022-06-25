// import React from "react";
// import { TextField } from "material-ui";
import React, { useState } from "react";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// const name = document.getElementById("userInput");

function Api() {
  const [value, setValue] = useState("");
  // const [api, setApi] = useState();
  function findname() {
    const api = fetch(`https://api.nationalize.io?name=${value}`)
      .then((response) => response.json())
      .then((json) => console.log(json));

    // setApi(api);
  }

  return (
    // the probibilty of different nationalitys will be printed in the console. If you dont write your name you will get an error
    <>
      <div>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <button onClick={findname}>Submit</button>
        {/* {api.country.map((y) => (
          <h1>`${y} is `</h1>
        ))} */}
      </div>
    </>
  );
}

export default Api;
