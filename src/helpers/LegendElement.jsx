import {Box,Typography} from "@mui/material";
const LegendElement = ({color,txt,qSize,fSize}) => {
 return<><Box
        sx={{
          width: qSize,
          height: qSize,
          bgcolor: color,
          marginLeft: '5px',
        }}
      /><Typography sx={{fontSize:fSize,fontFamily:"Karla"}}>{txt}</Typography></>
}
export default LegendElement;