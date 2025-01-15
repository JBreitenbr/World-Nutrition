import {Box,Typography,List,ListItem} from "@mui/material";
import {NavLink} from "react-router-dom";
const StartPage = () => {
    return(
       <>
           <Typography sx={{marginTop:"80px"}} variant="h5">Table of Contents:</Typography>
<List><ListItem><NavLink to="/World-Nutrition/dashboard1" className="nav">Table 1: Daily caloric supply derived from carbohydrates, protein and fat, by country, 1992 to 2021</NavLink></ListItem><ListItem><NavLink to="/World-Nutrition/dashboard1" className="nav">Table 2: Per capita sources of protein, by country, 1992 to 2021</NavLink></ListItem><ListItem><NavLink to="/World-Nutrition/dashboard2" className="nav">Table 3: Dietary compositions by commodity group, by country, 1992 to 2021</NavLink></ListItem><ListItem><NavLink to="/World-Nutrition/dashboard2" className="nav">Table 4: Per capita meat consumption by type, by country, 1992 to 2021</NavLink>
</ListItem><ListItem><NavLink to="/World-Nutrition/dashboard3" className="nav">Table 5: Food supply vs. life expectancy, by year</NavLink></ListItem><ListItem><NavLink to="/World-Nutrition/dashboard3" className="nav">Table 6: Daily per capita supply of calories vs. GDP per capita, by year</NavLink></ListItem></List>
<Box>Data sources: Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data and some processing by my own</Box>
  </>  )
}

export default StartPage