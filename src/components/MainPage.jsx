import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import DropDown from "./DropDown";
import DetailPage from "./DetailPage";

const MainPage = () => {


  const [count, setCount] = useState(0);
  //console.log(count);


  const [options, setOptions] = useState(false);


  const [shows, setShows] = useState([]);
  //console.log(shows)



 const [select , setSelect] = useState("")
//console.log(select);

  async function fetchShowHandler() {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();

    const showList = data.map((dta)=>({
      id:dta.show.id,
      name:dta.show.name,
      image:dta.show.image.medium,
    summary:dta.show.summary

    }))
    setShows(showList);

  }







  useEffect(() => {
    fetchShowHandler();
  }, []);

  const nextPageChanger = () => {
    setCount(count + 1);
    setOptions(false);
  };


const getData=(data)=>{
//console.log(data);
setOptions(data)
}

const selectData=(optionData)=>{
setSelect(optionData)
}



const backPageHandler=()=>{
  setCount(count-1); 
}


  return (

    <div>
      {count == 0 && <DropDown shows={shows} selectData={selectData}  getData={getData} />}

      {count == 1 && <DetailPage shows={shows} select={select} />}



{count == 0 &&
<Box>
      <Button
        variant="contained"
        sx={{
          marginTop: "40px",
          width: "129px",
          height: "54px",
          padding: "20px",
        }}
        disabled={!options}
        onClick={nextPageChanger}
      >
        details
      </Button>
</Box>
}


{count == 1 &&
<Box>
<Button
        variant="contained"
        sx={{
          marginTop: "40px",
          width: "129px",
          height: "54px",
          padding: "20px",
        }}
       onClick={backPageHandler}
      >
        Back
      </Button>
</Box>
}    

    </div>
  );
};

export default MainPage;
