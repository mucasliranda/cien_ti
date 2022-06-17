import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";


export default function TopBar(){

  const [ value, setValue ] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <Tab label="aaaa" />
      <Tab label="aaaa" />
      <Tab label="aaaa" />
      <Tab label="aaaa" />
      <Tab label="aaaa" />
      <Tab label="aaaa" />
      <Tab label="aaaa" />
      <Tab label="aaaa" />
    </Tabs>
  )

}