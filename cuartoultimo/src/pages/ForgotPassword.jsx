import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink} from 'react-router-dom';
import { useAuth } from '../components/contex/authContex'



const defaultTheme = createTheme();



export default function ForgotPassword() {
  
    const [user, setUser] = useState({
        email: ""
      })
      const [error, setError] = useState()
      const {resetPassword}= useAuth()
      
      const handleChange = ({target: {name, value}}) =>(
        setUser({... user, [name]: value})
      )
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      } 

      const handleResetPassword = async() => {
        if (!user.email) return setError("Please enter your email");
        try {
            await resetPassword(user.email)
            setError ('Te hemos enviado el correo de recuperación')
        } catch (error) {
            setError(`Oh no! ${error.message}` )
        }
      }
        
      
  
    return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingresar Email
          </Typography>

          {error && <p>{error}</p> }

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
           
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleResetPassword}
           
            >
              Recuperar
            </Button>
              <Grid item>
                 <Link component={NavLink } to="/register" variant="body2">
                  {"¿No tienes cuenta? Regístrate"}
                </Link>
              </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}