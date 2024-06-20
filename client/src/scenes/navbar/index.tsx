import {useState} from 'react'
import TollTwoToneIcon from '@mui/icons-material/TollTwoTone';
import {Link} from "react-router-dom"
import { Box, Typography, useTheme } from '@mui/material'
import { Palette } from '@mui/material'
import FlexBetween from '@/components/FlexBetween'

type Props =object;

const Navbar = (props: Props) => {
    const [selected, setSelected] = useState("dashboard")
    const {palette} = useTheme();
  return (
    <FlexBetween mb="0.25rem" p = "0.5rem 0rem" color={palette.grey[300]}>
        {/*LEFT SIDE*/}
        <FlexBetween gap="0.75rem">
            <TollTwoToneIcon sx = {{fontSize: "30px"}}></TollTwoToneIcon>
            <Typography variant='h4' fontSize="18px">CoTradr </Typography>
        </FlexBetween>
        {/*RIGHT SIDE*/}
        <FlexBetween gap="2rem">
            <Box sx={{"&:hover":{color:palette.primary[100]}}}>
                <Link 
                    to = "/" 
                    onClick={()=>setSelected("dashboard")} 
                    style={{
                        color: selected === "dashboard" ? "inherit" : palette.grey[700],
                        textDecoration: "inherit"
                        }}>
                    Dashboard
                </Link>
            </Box>
            <Box sx={{"&:hover":{color:palette.primary[100]}}}>
                <Link 
                    to = "/predictions" 
                    onClick={()=>setSelected("predictions")} 
                    style={{
                        color: selected === "predictions" ? "inherit" : palette.grey[700],
                        textDecoration: "inherit"
                        }}>
                    Predictions
                </Link>
            </Box>
        </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar