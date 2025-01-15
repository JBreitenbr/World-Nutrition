import React, { useState,useEffect } from "react";
import { Box,Select,MenuItem,Grid  } from "@mui/material";
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { AreaPlot } from "@mui/x-charts/LineChart";
import { ChartsTooltip, ChartsXAxis, ChartsYAxis,ChartsGrid,ChartsLegend} from '@mui/x-charts';
import StoreIcon from '@mui/icons-material/Store';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import LegendElement from './helpers/LegendElement'
const yLabels = [1000,2000,3000,4000,5000];

const Chart2 = () => {
const [country,setCountry]=useState("Germany")
const [countries,setCountries]=useState([])
const handleChange=(e)=> {
  setCountry(e.target.value)
}
const [othComm,setOthComm]=useState([])
const [alc,setAlc]=useState([])
const [sugar, setSugar] = useState([]);
const [oils, setOils] = useState([]);
const [meat, setMeat] = useState([]);
const [dairy, setDairy] = useState([]);
const [fruits, setFruits] = useState([]);
const [roots,setRoots]=useState([]);
const [pulses,setPulses]=useState([]);
const [cereals,setCereals]=useState([]); 
const [oth, setOth]= useState([]);
  const [sheep, setSheep]= useState([]);
  const [beef, setBeef]= useState([]);
  const [pig, setPig]= useState([]);
  const [poultry, setPoultry]= useState([]);
const [w, setW]=useState(window.innerWidth);
const [h, setH]=useState(window.innerHeight);
const years= ["1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"];
const baseUrl='https://raw.githubusercontent.com/JBreitenbr/World-Nutrition/refs/heads/main/src/Data/';
const paired1=[[setOthComm,"Other commodities"],[setAlc,"Alcoholic beverages"],[setSugar,"Sugar"],[setOils,"Oils and fats"],[setMeat,"Meat"],[setDairy,"Dairy and eggs"],[setFruits,"Fruits and vegetables"],[setRoots,"Starchy roots"],[setPulses,"Pulses"],[setCereals,"Cereals and grains"]]; 
const paired2=[[setOth,"Other"],[setSheep,"Sheep and goat"],[setBeef,"Beef"],[setPig,"Pig"],[setPoultry,"Poultry"]];
const colored1 = [[othComm,"#beaed4","Other"],[alc,"#386cb0","Alcohol"],[sugar,"#66c2a5","Sugar"],[oils,"gold", "Oils/fats"],[meat,"#ffccaa","Meat"],[dairy,"#e78ac3","Dairy/eggs"],[fruits,"#a6d854","Fruits/vegetables"],[roots,"sienna","Starchy roots"],[pulses,"coral","Pulses"],[cereals,"sandybrown","Cereals/grains"]];
const colored2 = [[oth,"#beaed4","Other"],[sheep,"#bbaa99","Sheep/goat"],
[beef,"#854242","Beef"],[pig,"pink","Pig"],[poultry,"darksalmon","Poultry"]];
const serArr1=[];
 for(let pair of paired1){
  useEffect(() =>{
    fetch(baseUrl+"comm.json")
    .then(res => res.json())
    .then(data => pair[0](data[country][pair[1]]))
  },[country]);
 } 

for(let pair of paired2){
  useEffect(() =>{
    fetch(baseUrl+"meat.json")
    .then(res => res.json())
    .then(data => pair[0](data[country][pair[1]]))
  },[country]);
 }
for(let el of colored1){
serArr1.push({
              type: "line",
              data: el[0],
              label: el[2],
              area: true,
              color:el[1],
              showMark: false,
              stack: "stack",
            })
}
const serArr2=[];
for(let el of colored2){
  serArr2.push({
              type: "line",
              data: el[0],
              label: el[2],
              area: true,
              color:el[1],
              showMark: false,
              stack: "stack",
            })
}
    useEffect(() =>{
    fetch(baseUrl+"meat.json")
    .then(res => res.json())
    .then(data => setCountries(Object.keys(data)))
  },[])
  return (   
      <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"65px"}}> <Select
    id="country-select"
    value={country}
    label="Country"
    sx={{ height: {xs:"20px",sm:"30px" ,md:"40px"},display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#f2f2f2",margin:{xs:"8px",sm:"15px"},fontSize:"0.9em"}}
    onChange={handleChange}
  >{countries.map((country,index)=><MenuItem key={index} value={country}>{country}</MenuItem>)}
  </Select>
      <Grid container sx={{width:'100%', display: 'flex', minHeight:'200px', boxShadow: 3, justifyContent:'space-evenly'}}
        >
            <Grid
                item xs={12} sm={12} md={6} lg={4}
                sx={{minHeight: '200px', padding:'10px', borderRight: '1px dotted #d3d3d3'}}
            ><Box sx={{marginBottom: '10px', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}><StoreIcon/></Box>
                    <Box>Table 3: Dietary compositions by
commodity group, {country},
1992 to 2021
</Box>
                </Box><Box sx={{width:"100%"}}><ResponsiveChartContainer series={serArr1.reverse()} xAxis={[{ scaleType: "point", data: years}]} yAxis={[{ scaleType: "linear",data: yLabels}]}  height={w<1400?(w<1100?(w<700?200:300):470):650}>
          <ChartsGrid horizontal={true} /><AreaPlot/><ChartsXAxis label="Year" />
<ChartsYAxis label="Calories (kcal)" valueFormatter={(item)=>`${item/1000}K`}/>
          <ChartsTooltip /></ResponsiveChartContainer>
                </Box>
<Box sx={{display:"flex",flexDirection:"column",gap:"5px"}}>
<Box sx={{display:"flex",marginLeft:{xs:"12vw",sm:"7vw",md:"4vw"}}}>{w<1200?(w<700?(colored1.slice(7,10).map((el,index)=>(<LegendElement key={index} color={el[1]} txt={el[2]} qSize="12px" fSize="10px"/>)).reverse()):(colored1.slice(7,10).map((el,index)=><LegendElement key={index} color={el[1]} txt={el[2]} qSize="18px" fSize="14px"/>)).reverse()):(colored1.slice(7,10).map((el,index)=><LegendElement key={index} color={el[1]} txt={el[2]} qSize="25px" fSize="20px"/>)).reverse()}</Box>
  <Box sx={{display:"flex",marginLeft:{xs:"12vw",sm:"7vw",md:"4vw"}}}>{w<1200?(w<700?(colored1.slice(4,7).map((el,index)=>(<LegendElement key={index} color={el[1]} txt={el[2]} qSize="12px" fSize="10px"/>)).reverse()):(colored1.slice(4,7).map((el,index)=><LegendElement key={index} color={el[1]} txt={el[2]} qSize="18px" fSize="14px"/>)).reverse()):(colored1.slice(4,7).map((el,index)=><LegendElement key={index} color={el[1]} txt={el[2]} qSize="25px" fSize="20px"/>)).reverse()}</Box>
  <Box sx={{display:"flex",marginLeft:{xs:"12vw",sm:"7vw",md:"4vw"}}}>{w<1200?(w<700?(colored1.slice(0,4).map((el,index)=>(<LegendElement key={index} color={el[1]} txt={el[2]} qSize="12px" fSize="10px"/>)).reverse()):(colored1.slice(0,4).map((el,index)=><LegendElement key={index} color={el[1]} txt={el[2]} qSize="18px" fSize="14px"/>)).reverse()):(colored1.slice(0,4).map((el,index)=><LegendElement key={index} color={el[1]} txt={el[2]} qSize="25px" fSize="20px"/>)).reverse()}</Box>
</Box> </Grid>   <Grid
                item xs={12} sm={12} md={6} lg={4}
                sx={{minHeight: '200px', padding:'20px', borderRight: '1px solid #d3d3d3'}}
            ><Box sx={{marginBottom: '5px', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}><KebabDiningIcon/></Box>
                    <Box>Table 4: Per capita meat consumption by
type, {country}, 1992 to 2021
</Box>
</Box>
  <Box sx={{"width":"100%"}}>
  <ResponsiveChartContainer series={serArr2.reverse()} xAxis={[{ scaleType: "point", data: years}]} yAxis={[{ scaleType: "linear", data: yLabels, label:"Grams" }]}
        height={w<1400?(w<1100?(w<700?200:300):470):650}
    ><ChartsGrid horizontal={true}/><AreaPlot/><ChartsXAxis label="Year"/><ChartsYAxis label="Kilograms (kg)"/><ChartsTooltip/></ResponsiveChartContainer>
  </Box><Box sx={{display:"flex",flexDirection:"row",gap:"5px",marginBottom:"5px",marginLeft:"30px"}}><Box sx={{display:"flex",marginLeft:"2vw"}}>{w<1200?(w<700?(colored2.map((el,index)=>(<LegendElement key={index} color={el[1]} txt={el[2]} qSize="12px" fSize="10px"/>)).reverse()):(colored2.map((el,index)=><LegendElement key={index} color={el[1]} txt={el[2]} qSize="18px" fSize="14px"/>)).reverse()):(colored2.map((el,index)=><LegendElement key={index} color={el[1]} txt={el[2]} qSize="25px" fSize="20px"/>)).reverse()}</Box>
</Box></Grid></Grid>
</Box>
  );
};

export default Chart2;