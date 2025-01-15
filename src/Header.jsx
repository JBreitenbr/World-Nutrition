import {
  Stack,
  Toolbar,
  Typography,
  Container,
  AppBar
} from "@mui/material";
import { NavLink } from "react-router-dom";

const pages = [
  {name:"Start", id:"/World-Nutrition"},
  { name: "Page 1", id: "/World-Nutrition/dashboard1" },
  { name: "Page 2", id: "/World-Nutrition/dashboard2" },
  { name: "Page 3", id: "/World-Nutrition/dashboard3" },
];

const NavList = ({ ...props }) => {
  return (
    <Stack
      overflow="auto"
      direction="row"
      gap={2}
      width={{ xs: "100%", sm: "initial" }}
      textAlign="initial"
      fontSize={{ xs: 11, sm: 16 }}
      {...props}
    ><NavLink key="/MUI-Navbar" to={pages[0].id} style={{textDecoration:"none",color:"white"}}>{pages[0].name}</NavLink>
      {pages.slice(1,4).map(page => (
        <NavLink
          key={page.id}
          to= {page.id}
          style={({ isActive }) => {
 return isActive ? { color: "#6699cc" ,textDecoration:"none",backgroundColor:"white",padding:"2px"} : {textDecoration:"none",color:"white"};}}
>

          {page.name} 
        </NavLink>
      ))}
    </Stack>
  );
};
const Header = () => {
  return (
    <AppBar sx={{backgroundColor:"#6699cc"}}>
      <Container>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h6" sx={{fontSize:{xs:14,sm:18}}}>World Nutrition</Typography>
            <NavList />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;