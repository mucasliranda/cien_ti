import { ResponsiveBar } from '@nivo/bar'
import { Box } from '@mui/material'


export default function BarChart({dataChart}){

  const theme = {
    background: "#121212",
    axis: {
      fontSize: "14px",
      tickColor: "#eee",
      ticks: {
        line: {
          stroke: "#555555"
        },
        text: {
          fill: "#E6E6E699"
        }
      },
      legend: {
        text: {
          fill: "#E6E6E699"
        }
      }
    },
    grid: {
      line: {
        stroke: "#555555"
      }
    }
  };

  return (
    <Box sx={{width: "100%", height: "70vh"}} >
      <h1></h1>
      <ResponsiveBar
        data={dataChart}
        keys={["key"]}
        indexBy="show"
        margin={{ top: 50, right: 10, bottom: 50, left: 60 }}
        padding={0.4}
        colors = {dataChart.map(c => c.color)}
        colorBy = "index"
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          tickValues: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          legend: "Votos",
          legendPosition: "middle",
          legendOffset: -40,
        }}

        theme={theme}
      />
    </Box>
  )
  
}