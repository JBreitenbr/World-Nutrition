import React, { useState,useEffect } from "react";
import { Box,Select,MenuItem,Grid  } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import StoreIcon from '@mui/icons-material/Store';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import SetMealIcon from '@mui/icons-material/SetMeal';
import LegendElement from './helpers/LegendElement'
const yLabels = [1000,2000,3000,4000,5000];

const Chart = () => {
const [country,setCountry]=useState("Germany")
const [countries,setCountries]=useState([])
const handleChange=(e)=> {
  setCountry(e.target.value)
}
const [aniProts,setAniProts]=useState([])
const [vegiProts,setVegiProts]=useState([])
const [fats, setFats] = useState([]);
const [carbs, setCarbs] = useState([]);
const [proteins, setProteins] = useState([]);
const [years, setYears] = useState([]); useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/stacked.json')
    .then(res => res.json())
    .then(data => setProteins(data[country]))
  },[country]) 
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setAniProts(data[country]["Animal protein"]))
  },[country])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setVegiProts(data[country]["Vegetal protein"]))
  },[country])
    useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setCountries(Object.keys(data).slice(1,Object.keys(data).length)))
  },[])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setFats(data[country]["Fat"]))
  },[country])
    useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setCarbs(data[country]["Carbohydrates"]))
  },[country])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setYears(data["Years"]))
  },[])
  
  return (   
      <Box sx={{marginTop:"60px"}}> <Select
    id="country-select"
    value={country}
    label="Country"
    sx={{ height: "20px",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Karla",backgroundColor:"#f2f2f2",margin:"15px",fontSize:"0.9em"}}
    onChange={handleChange}
  >{countries.map((country,index)=><MenuItem key={index} value={country}>{country}</MenuItem>)}
  </Select>
      <Grid container sx={{width:'100%', display: 'flex', minHeight:'200px', boxShadow: 3, justifyContent:'space-evenly'}}
        >
            <Grid
                item xs={12} sm={12} md={6} lg={4}
                sx={{minHeight: '200px', padding:'20px', borderRight: '1px dotted #d3d3d3'}}
            ><Box sx={{marginBottom: '10px', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}><RamenDiningIcon/></Box>
                    <Box sx={{fontSize:"0.7em"}}>Daily caloric supply derived from
carbohydrates, protein and fat,  {country}, 1992 to 2021
</Box>
                </Box>
        <LineChart
          width={300}
          height={200}
          
          series={[
            {
              type: "line",
              data: carbs,
              label: "Carbo",
              area: true,
              color:"#beaed4",
              showMark: false,
              stack: "stack",
            },
            {
              type: "line",
              data: fats,
              label: "Fat",
              area: true,
              color:"#386cb0",
              showMark: false,
              stack: "stack",
            },
            {
              type: "line",
              data: vegiProts,
              label: "Veg. prot.",
              color:"#66c2a5",
              area: true,
              showMark: false,
              stack: "stack",
            },
            {
              type: "line",
              data: aniProts,
              label: "Animal prot.",
              color:"#fc8d62",
              area: true,
              showMark: false,
              stack: "stack",
            }
          ]}
          grid={{ horizontal: true }}
          xAxis={[{ scaleType: "point", tickLabelStyle:{fontSize:9,angle:20,fontFamily:"Karla"},data: years,label:"Year",labelStyle:{fontSize:"0.8em",fontFamily:"Karla"}}]}
          yAxis={[{ scaleType: "linear", tickLabelStyle:{fontSize:9},data: yLabels, label:"Calories",labelStyle: {fontSize: "0.8em",fontFamily:"Karla"} }]}
          slotProps={{ legend: { hidden: true } }}
          sx={{
            width: "360px",
            height: "100%",
            fontSize:"10px",
            marginLeft: "10px",
            "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
              fill:"#333",
              fontFamily:"Karla",
            },"& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
              fill:"#333",
              fontFamily:"Karla"
            },
           "& .MuiChartsAxis-directionY": {
          "& .MuiChartsAxis-tickLabel": {
            rotate: "-45deg"
          }
            },
            }}
        /><Box sx={{display:"flex",flexDirection:"row",gap:"5px",marginBottom:"5px",marginLeft:"30px"}}><LegendElement color="#fc8d62" txt="Animal prot." qSize="12px" fSize="10px"/><LegendElement color="#66c2a5" txt="Vegetal prot." qSize="12px" fSize="10px"/>
          <LegendElement color="#386cb0" txt="Fats" qSize="12px" fSize="10px"/>
  <LegendElement color="#beaed4" txt="Carbohydrates" qSize="12px" fSize="10px"/>
</Box> </Grid>   <Grid
                item xs={12} sm={12} md={6} lg={4}
                sx={{minHeight: '200px', padding:'20px', borderRight: '1px dotted #d3d3d3'}}
            ><Box sx={{marginBottom: '5px', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}><SetMealIcon/></Box>
                    <Box sx={{fontSize:"0.75em"}}>Per capita sources of protein, {country}, 1992 to 2021
</Box>
                </Box><BarChart
      dataset={proteins}
      xAxis={[{ 
          scaleType: 'band', 
          dataKey: "Year", 
          tickLabelStyle: {
            angle: 20,
            textAnchor: 'start',
            fontSize: 9,
        },label:"Year",labelStyle:{fontSize:"0.8em",fontFamily:"Karla"}
        }]}
yAxis={[{ scaleType: "linear", tickLabelStyle:{fontSize:9},data: yLabels, label:"Grams",labelStyle: {fontSize: "0.8em",fontFamily:"Karla"} }]}
            slotProps={{ legend: { hidden: true } }}
      grid= {{ horizontal: true }}
      series={[
    { dataKey: 'Vegetal Products', stack: 'proteins',label:"Vegetal Products",color:"#7fc97f",labelStyle:{fontSize:9}},
    { dataKey: 'Fish and seafood', stack: 'proteins',label:"Fish and seafood",color:"#a6cee3"},
    { dataKey: 'Meat, total', stack: 'proteins',label:"Meat, total",color:"#fb9a99"},
    { dataKey: 'All egg products', stack: 'proteins',label:"All egg products",color:"#fdc086"},
    { dataKey: 'Milk', stack: 'proteins',label:"Milk",color:"#ffff99" }
  ]}
      sx={{ "& .MuiChartsLegend-series tspan": { fontSize: "0.7em" },  }}
width = {300}
height= {230}/><Box sx={{display:"flex",flexDirection:"row",gap:"5px",marginBottom:"5px",marginLeft:"30px"}}><LegendElement color="#ffff99" txt="Dairy" qSize="12px" fSize="10px"/><LegendElement color="#fdc086" txt="Egg prod." qSize="12px" fSize="10px"/><LegendElement color="#fb9a99" txt="Meat" qSize="12px" fSize="10px"/><LegendElement color="#a6cee3" txt="Fish" qSize="12px" fSize="10px"/><LegendElement color="#7fc97f" txt="Vegetal prod." qSize="12px" fSize="10px"/>
</Box></Grid></Grid>
</Box>
  );
};

export default Chart;