import React, {useState} from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { Box, Button, TextField, Typography, Paper } from '@mui/material'

const Signup = () => {
  const [form, setForm] = useState({
    username:"",
    email:"",
    password:""
  })

  const valChangeHandler = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  const signupHandler = () => {
    console.log("signed up", form)
    setForm({
      username: "",
      email: "",
      password: ""
    })
}

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
          }}>Sign Up</Typography>
        </Box>
        <TextField id="standard-basic" value={form.username} onChange={(e) => valChangeHandler("username", e.target.value)} label="UserName" variant="filled" sx={{width:'90%',
          backgroundColor:'#DCE8FF',
          }} />
        <TextField id="standard-basic" value={form.email} onChange={(e) => valChangeHandler("email", e.target.value)} label="Email" variant="filled" sx={{width:'90%',
          backgroundColor:'#DCE8FF',
          }} />
        <TextField id="standard-basic" value={form.password} onChange={(e) => valChangeHandler("password", e.target.value)} label="Password" variant="filled" sx={{width:'90%',
          backgroundColor:'#DCE8FF',
          }} />
        <Button type='button' variant="contained" sx={{
          backgroundColor:'#0D43AA'
        }} onClick={(e)=>{signupHandler()}} >Register</Button>
      </Paper>
    </Box>
  )
}

export default Signup