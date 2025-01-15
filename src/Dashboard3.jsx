import React, { useState,useEffect } from "react";
import { Box,Select,MenuItem,Grid  } from "@mui/material";
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { ChartsTooltip, ChartsXAxis, ChartsYAxis,ChartsGrid} from '@mui/x-charts';
import { ScatterPlot } from "@mui/x-charts/ScatterChart";
import SpaIcon from '@mui/icons-material/Spa';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LegendElement2 from './helpers/LegendElement2'
const yLabels = [35,40,50,60,70,80,90];

const Chart3 = () => {
const [year,setYear]=useState("2021")
const handleChange=(e)=> {
  setYear(e.target.value)
}
  const [eur1, setEur1] = useState([]);
  const [asia1, setAsia1] = useState([]);
  const [africa1, setAfrica1] = useState([]);
  const [namerica1, setNamerica1] = useState([]);
  const [samerica1, setSamerica1] = useState([]);
  const [oceania1, setOceania1] = useState([]);
  const [eur2, setEur2] = useState([]);
  const [asia2, setAsia2] = useState([]);
  const [africa2, setAfrica2] = useState([]);
  const [namerica2, setNamerica2] = useState([]);
  const [samerica2, setSamerica2] = useState([]);
  const [oceania2, setOceania2] = useState([]);

  let conts1=[[setEur1,"Europe"],[setAsia1,"Asia"],[setAfrica1,"Africa"],[setNamerica1,"North America"],
 [setSamerica1,"South America"],
          [setOceania1,"Oceania"]];
let conts2=[[setEur2,"Europe"],[setAsia2,"Asia"],[setAfrica2,"Africa"],[setNamerica2,"North America"],
 [setSamerica2,"South America"],[setOceania2,"Oceania"]];
let colors=["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f"];
let paired=[[colors[0],"Europe"], [colors[1],"Asia"], [colors[2],"Africa"], [colors[3],"North America"],
[colors[4],"South America"],
[colors[5],"Oceania"]];
let tArr1=[eur1,asia1,africa1,namerica1,samerica1,oceania1];
let tArr2=[eur2,asia2,africa2,namerica2,samerica2,oceania2];
const [w, setW]=useState(window.innerWidth);
const [h, setH]=useState(window.innerHeight);
const years= ["1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"];
const baseUrl='https://raw.githubusercontent.com/JBreitenbr/World-Nutrition/refs/heads/main/src/Data/';
for(let pair of conts1){
  useEffect(() =>{
    fetch(baseUrl+"lex.json")
    .then(res => res.json())
    .then(data => pair[0](data[year][pair[1]]))
  },[year]) 
}
for(let pair of conts2){
    useEffect(() =>{
      fetch(baseUrl+"GDP.json")
      .then(res => res.json())
      .then(data => pair[0](data[year][pair[1]]))
    },[year]) 
  }
let serArr1=[];
for(let el of tArr1){
  serArr1.push({
    type:"scatter",
    data: el.map((item) => ({id:item.id,
      x: item.x,
      y: item.y,country: item.country,population:item.population})),valueFormatter: (item) =>
        {
          return `${item.country}  ( Daily caloric supply: ${item.x} kcal / Life expectancy: ${item.y} years / Population: ${item.population} )` }
  });
}
let serArr2=[];
for(let el of tArr2){
  serArr2.push({
    type:"scatter",
    data: el.map((item) => ({id:item.id,
      x: item.x,
      y: item.y,country: item.country,population:item.population})),valueFormatter: (item) =>
        {
          return `${item.country}  ( GDP: $${item.x} / Daily caloric supply: ${item.y} kcal / Population: ${item.population} )` }
  });
}
  
  return (   
      <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"65px"}}> <Select
    id="year-select"
    value={year}
    label="Year"
    sx={{ height: {xs:"20px",sm:"30px" ,md:"40px"},display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#f2f2f2",margin:{xs:"8px",sm:"15px"},fontSize:"0.9em"}}
    onChange={handleChange}
  >{years.map((year,index)=><MenuItem key={index} value={year}>{year}</MenuItem>)}
  </Select>
      <Grid container sx={{width:'100%', display: 'flex', minHeight:'200px', boxShadow: 3, justifyContent:'space-evenly'}}
        >
            <Grid
                item xs={12} sm={12} md={6} lg={4}
                sx={{minHeight: '200px', padding:'10px', borderRight: '1px dotted #d3d3d3'}}
            ><Box sx={{marginBottom: '10px', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}><SpaIcon/></Box>
                    <Box>Table 5: Food supply vs. life expectancy, {year}
</Box></Box>
<Box sx={{width:"100%"}}>             <ResponsiveChartContainer height={w<1400?(w<1100?(w<700?200:300):470):650} series= {serArr1} colors={colors} yAxis={[{data:yLabels,tickCount:5,
    min: 35,
  },
]}><ChartsGrid horizontal={true} vertical={true}/><ScatterPlot/><ChartsTooltip trigger="item"/><ChartsXAxis label="Calories (kcal/day)" scaleType="linear"/><ChartsYAxis label="Life expectancy (years)" scaleType="linear"/></ResponsiveChartContainer></Box>  <Box sx={{display:"flex",flexDirection:"column",gap:"5px"}}>
<Box sx={{display:"flex",marginLeft:{xs:"12vw",sm:"7vw",md:"4vw"}}}>      {w<1200?(w<700?(paired.slice(0,4).map((el,index)=>(<LegendElement2 key={index} color={el[0]} txt={el[1]} qSize="12px" fSize="10px"/>))):(paired.slice(0,4).map((el,index)=><LegendElement2 key={index} color={el[0]} txt={el[1]} qSize="18px" fSize="14px"/>))):(paired.slice(0,4).map((el,index)=><LegendElement2 key={index} color={el[0]} txt={el[1]} qSize="25px" fSize="20px"/>))}</Box><Box sx={{display:"flex",marginLeft:{xs:"12vw",sm:"7vw",md:"4vw"}}}>      {w<1200?(w<700?(paired.slice(4,7).map((el,index)=>(<LegendElement2 key={index} color={el[0]} txt={el[1]} qSize="12px" fSize="10px"/>))):(paired.slice(4,7).map((el,index)=><LegendElement2 key={index} color={el[0]} txt={el[1]} qSize="18px" fSize="14px"/>))):(paired.slice(4,7).map((el,index)=><LegendElement2 key={index} color={el[0]} txt={el[1]} qSize="25px" fSize="20px"/>))}</Box></Box>
</Grid>   <Grid
                item xs={12} sm={12} md={6} lg={4}
                sx={{minHeight: '200px', padding:'20px', borderRight: '1px solid #d3d3d3'}}
            ><Box sx={{marginBottom: '5px', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}><AccountBalanceIcon/></Box>
                    <Box>Table 6: Daily per capita supply of
calories vs. GDP per capita, {year}
</Box>
                </Box><Box sx={{width:"100%"}}>             <ResponsiveChartContainer  height={w<1400?(w<1100?(w<700?200:300):470):650}series= {serArr2} colors={colors}
                                                             xAxis={[{scaleType: 'linear',
              id: 'x-axis-id',tickCount:5}]}
                                      yAxis={[{scaleType:'linear',id:'y-axis-id',min:1000}]}><ChartsGrid horizontal={true} vertical={true}/><ScatterPlot/><ChartsTooltip trigger="item"/><ChartsXAxis label="GDP ($)" axisId="x-axis-id"/><ChartsYAxis label="Calories (kcal/day)" scaleType="linear" valueFormatter={(item)=>`${item/1000}K`} axisId="y-axis-id"/></ResponsiveChartContainer></Box>
  <Box sx={{display:"flex",flexDirection:"column",gap:"5px"}}>
<Box sx={{display:"flex",marginLeft:{xs:"12vw",sm:"7vw",md:"4vw"}}}>      {w<1200?(w<700?(paired.slice(0,4).map((el,index)=>(<LegendElement2 key={index} color={el[0]} txt={el[1]} qSize="12px" fSize="10px"/>))):(paired.slice(0,4).map((el,index)=><LegendElement2 key={index} color={el[0]} txt={el[1]} qSize="18px" fSize="14px"/>))):(paired.slice(0,4).map((el,index)=><LegendElement2 key={index} color={el[0]} txt={el[1]} qSize="25px" fSize="20px"/>))}</Box><Box sx={{display:"flex",marginLeft:{xs:"12vw",sm:"7vw",md:"4vw"}}}>      {w<1200?(w<700?(paired.slice(4,7).map((el,index)=>(<LegendElement2 key={index} color={el[0]} txt={el[1]} qSize="12px" fSize="10px"/>))):(paired.slice(4,7).map((el,index)=><LegendElement2 key={index} color={el[0]} txt={el[1]} qSize="18px" fSize="14px"/>))):(paired.slice(4,7).map((el,index)=><LegendElement2 key={index} color={el[0]} txt={el[1]} qSize="25px" fSize="20px"/>))}</Box>
  </Box></Grid></Grid>
</Box>
  );
};

export default Chart3;