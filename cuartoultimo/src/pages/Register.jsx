import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import firebaseApp from '../firebase/credenciales';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import {getFirestore, doc, setDoc} from 'firebase/firestore';
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);



const defaultTheme = createTheme();



function SignUp ({rol}) {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: "",
    rol: ""
  })
  
  const [error, setError] = useState()

  async function registrarUsuario(email, password, rol) {
    const infoUsuario = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password
      ).then((usuarioFirebase) => {
        return usuarioFirebase;
      });
    
      // console.log(infoUsuario.user.uid);
      const docRef = doc(firestore, `user/${infoUsuario.user.uid}`);
      setDoc(docRef, {correo: email, rol: rol});
      
    }
  
  const handleChange = ({target: {name, value}}) =>(
    setUser({... user, [name]: value}),
    console.log(user)
    
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('')
    try {
      registrarUsuario (user.email, user.password, user.rol);
      navigate("/login")
      console.log("creado con exito")
      console.log(user)
      
    } catch (error) {
      setError(error.message)
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
            Sign up
          </Typography>
          
          {error && <p>{error}</p> }
          
          
          <Box component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required 
                  fullWidth
                  name = "rol"
                  id="select" 
                  value = {user.rol}
                  label="Rol dentro de App"  
                  select
                  onChange={handleChange}
                  >
                  <MenuItem value="admin">Administrador</MenuItem>
                  <MenuItem value="supervJ">Supervisor Jefe</MenuItem>
                  <MenuItem value="superv">Supervisor</MenuItem>
                  <MenuItem value="direc">Director</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={NavLink} to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp
