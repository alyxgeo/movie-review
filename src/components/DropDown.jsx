import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Button } from "@mui/material";

export default function DropDown(props) {
  //console.log(shows)


  const [name, setName] = useState("");
  //console.log(name);


  const handleChange = (event) => {
    setName(event.target.value);
    props.getData(true);
    props.selectData(event.target.value);
  };


const nextPgeChanger =()=>{
  setCount(count+1)
  setOptions(false);

}



  return (
    <>
      <h2>Select a Show</h2>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>Shows</InputLabel>

          <Select
            defaultValue=""
            value={name}
            label="name"
            onChange={handleChange}
          >
            {props.shows.map((show, index) => (
              <MenuItem key={index} value={show.name}>
                {show.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
