import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";


export default function TopBar({data}){

  const [ value, setValue ] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const names = Object.keys(data[0])

  names.shift()

  console.log(names)

  return(
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      sx={{
        width: "100%",
        position: "absolute",
        top: 0,
        [`& .MuiTabs-scrollButtons`]: 
          {'&.Mui-disabled': { 
            opacity: 0.3 
          }
        }
      }}
    >
      {/* {names.map( (each) => {
        return <Tab label={each} />
      })} */}
    </Tabs>
  )

}