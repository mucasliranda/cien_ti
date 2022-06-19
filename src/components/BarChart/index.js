import { ResponsiveBar } from '@nivo/bar'
import { Box } from '@mui/material'
import { useIndexBy } from '../../provider/IndexBy'


export default function BarChart({dataChart}){

  const { FindIndex } = useIndexBy()

  return (
    <Box sx={{width: "100%", maxHeight: "70vh"}} >
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
      />
    </Box>
  )
  
}