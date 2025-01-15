import React, { useState,useEffect } from "react";
import { Box,Select,MenuItem,Grid  } from "@mui/material";
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { AreaPlot,MarkPlot } from "@mui/x-charts/LineChart";
import { ChartsTooltip, ChartsXAxis, ChartsYAxis,ChartsGrid,ChartsLegend} from '@mui/x-charts';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import SetMealIcon from '@mui/icons-material/SetMeal';
import LegendElement from './helpers/LegendElement'
import LegendItem from './helpers/LegendItem'
const yLabels = [1000,2000,3000,4000,5000];

const Chart1 = () => {
const [country,setCountry]=useState("Germany")
const [countries,setCountries]=useState([])
const handleChange=(e)=> {
  setCountry(e.target.value)
}
const [aniProts,setAniProts]=useState([])
const [vegiProts,setVegiProts]=useState([])
const [fats, setFats] = useState([]);
const [carbs, setCarbs] = useState([]);
const [plantProt, setPlantProt] = useState([]);
const [fish, setFish]=useState([]);
const [meat, setMeat]=useState([]);
const [eggs, setEggs]=useState([]);
const [dairy, setDairy]=useState([]);
const [w, setW]=useState(window.innerWidth);
const [h, setH]=useState(window.innerHeight);
const years= ["1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"];
const baseUrl='https://raw.githubusercontent.com/JBreitenbr/MUI-Navbar/refs/heads/main/src/Data/';
const paired1=[[setAniProts,"Animal protein"],[setVegiProts,"Vegetal protein"],[setFats,"Fat"],[setCarbs,"Carbohydrates"]]; 
const paired2=[[setPlantProt,"Vegetal Products"],[setFish,"Fish and seafood"],[setMeat,"Meat, total"],[setEggs,"All egg products"],[setDairy,"Milk"]]
const colored1 = [[carbs,"#beaed4","Carbohydrates"],[fats,"#386cb0","Fats"],[vegiProts,"#66c2a5","Veg. prot."],[aniProts,"#fc8d62", "Animal prot."]];
const colored2 = [[plantProt,"#7fc97f","Plant prot."],[fish,"#a6cee3","Fish/seafood"],[meat,"#fb9a99","Meat"],[eggs,"#fdc086","Eggs"],[dairy,"#ffff99","Dairy"]];
const serArr1=[];
 for(let pair of paired1){
  useEffect(() =>{
    fetch(baseUrl+"pfc.json")
    .then(res => res.json())
    .then(data => pair[0](data[country][pair[1]]))
  },[country]);
 } 
  
for(let pair of paired2){
  useEffect(() =>{
    fetch(baseUrl+"protein.json")
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
    fetch(baseUrl+"pfc.json")
    .then(res => res.json())
    .then(data => setCountries(Object.keys(data)))
  },[])
  return (   
      <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"65px"}}> <Select
    id="country-select"
    value={country}
    label="Country"
    sx={{ height: {xs:"20px",sm:"30px" ,md:"40px"},display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Karla",backgroundColor:"#f2f2f2",margin:{xs:"8px",sm:"15px"},fontSize:"0.9em"}}
    onChange={handleChange}
  >{countries.map((country,index)=><MenuItem key={index} value={country}>{country}</MenuItem>)}
  </Select>
      <Grid container sx={{width:'100%', display: 'flex', minHeight:'200px', boxShadow: 3, justifyContent:'space-evenly'}}
        >
            <Grid
                item xs={12} sm={12} md={6} lg={4}
                sx={{minHeight: '200px', padding:'10px', borderRight: '1px dotted #d3d3d3'}}
            ><Box sx={{marginBottom: '10px', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}><RamenDiningIcon/></Box>
                    <Box>Table 1: Daily caloric supply derived from
carbohydrates, protein and fat,  {country}, 1992 to 2021
</Box>
                </Box><Box sx={{width:"100%"}}><ResponsiveChartContainer series={serArr1} xAxis={[{ scaleType: "point", data: years}]} yAxis={[{ scaleType: "linear",data: yLabels}]}  height={w<1400?(w<1100?(w<700?200:300):500):650} >
          <ChartsGrid horizontal={true} /><AreaPlot/>{w>400?<ChartsLegend/>:<></>}<ChartsXAxis label="Year" />
<ChartsYAxis label="Calories (kcal)" valueFormatter={(item)=>`${item/1000}K`}/>
          <ChartsTooltip /></ResponsiveChartContainer>
                </Box>
<Box sx={{display:"flex",flexDirection:"row",gap:"5px",marginBottom:"5px",marginLeft:"30px"}}>
 {w<400?(colored1.map((el,index)=>(<LegendElement key={index} color={el[1]} txt={el[2]} qSize="12px" fSize="10px"/>))):(<></>)}  </Box> 
</Grid>   <Grid
                item xs={12} sm={12} md={6} lg={4}
                sx={{minHeight: '200px', padding:'20px', borderRight: '1px solid #d3d3d3'}}
            ><Box sx={{marginBottom: '5px', display:'flex', flexDirection:'row', alignItems: 'center'}}> 
                    <Box sx={{marginRight: '15px'}}><SetMealIcon/></Box>
                    <Box>Table 2: Per capita sources of protein, {country}, 1992 to 2021
</Box>
                </Box>
  <Box sx={{"width":"100%"}}>
  <ResponsiveChartContainer series={serArr2} xAxis={[{ scaleType: "point", data: years}]} yAxis={[{ scaleType: "linear",data:yLabels }]}
    height={w<1400?(w<1100?(w<700?200:300):500):650}  ><ChartsGrid horizontal={true}/><AreaPlot/>{w>400?<ChartsLegend/>:<></>}<ChartsXAxis label="Year"/><ChartsYAxis label="Grams (g)"/><ChartsTooltip/></ResponsiveChartContainer>
  </Box><Box sx={{display:"flex",flexDirection:"row",gap:"5px",marginBottom:"5px",marginLeft:"30px"}}><Box sx={{display:"flex"}}>{w<400?(colored2.map((el,index)=>(<LegendElement key={index} color={el[1]} txt={el[2]} qSize="12px" fSize="10px"/>))):(<></>)}</Box>
</Box></Grid></Grid>
</Box>
  );
};

export default Chart1;