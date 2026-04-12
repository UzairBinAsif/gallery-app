import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { Box, Button, TextField, Typography, Paper } from '@mui/material'

const Login = () => {
  return (
    <Box sx={{width:"100vw",
      height:"100vh",
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Paper sx={{
        width:"350px",
        backgroundColor:"#96B8FA",
        borderRadius:"10px",
        display:'flex',
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center',
        gap:'20px',
        paddingY:'20px'
      }}>
        <Box sx={{
          display:'flex',
          alignItems:'center',
          gap:'15px',
          color:'#0D43AA',
          fontSize:'20px',
        }}>
          <LoginIcon sx={{fontSize:'50px',
            fontWeight:'bolder'
          }} />
          <Typography sx={{fontSize:'40px',
          fontWeight:'bolder',
          color:'#FFFFFF'
          }}>Login Now</Typography>
        </Box>
        <TextField id="standard-basic" label="Email" variant="filled" sx={{width:'90%',
          backgroundColor:'#DCE8FF'
          }} />
        <TextField id="standard-basic" label="Password" variant="filled" sx={{width:'90%',
          backgroundColor:'#DCE8FF'
          }} />
        <Button variant="contained" sx={{
          backgroundColor:'#0D43AA'
        }}>Login</Button>
      </Paper>
    </Box>
  )
}

export default Login