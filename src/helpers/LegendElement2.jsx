import {Box,Typography} from "@mui/material";
const LegendElement2 = ({color,txt,qSize,fSize}) => {
 return<><Box
        sx={{
          width: qSize,
          height: qSize,
          bgcolor: color,
          marginLeft: '5px',
          borderRadius:"50%"
        }}
      /><Typography sx={{fontSize:fSize,fontFamily:"Karla"}}>{txt}</Typography></>
}
export default LegendElement2;