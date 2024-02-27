import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import firebaseApp from '../firebase/credenciales';
import {getFirestore, collection, addDoc} from 'firebase/firestore';
const firestore = getFirestore(firebaseApp);




const defaultTheme = createTheme();



function ResgistrarEscuelas () {

  const [error, setError] = useState()
  const navigate = useNavigate()

  const [escuela, setEscuela] = useState({
    CantAdministrativo: "",
    CantDocentes: "",
    CantEstudiantes: "",
    CantObreros: "",
    Director: "",
    Nombre: "",
    NumPlantel: ""
  })
  
  const handleChange = ({target: {name, value}}) =>(
    setEscuela({... escuela, [name]: value})
    
    
  )


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await addDoc(collection(firestore, 'DatosPlanteles'),{
        ...escuela
      })
    }
    catch (e) {
      console.error(error)
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
            Registrar Escuelas
          </Typography>
          
          {error && <p>{error}</p> }
          
          
          <Box component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Nombre"
                  label="Nombre Escuela"
                  name="Nombre"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  id="NumPlantel"
                  label="Número del Plantel"
                  name="NumPlantel"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  id="CantAdministrativo"
                  label="Cantidad de Personal Administrativo"
                  name="CantAdministrativo"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id=" CantObreros"
                  label="Cantidad de Personal Obrero"
                  name=" CantObreros"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="CantDocentes"
                  label="Cantidad de Personal Docente"
                  name="CantDocentes"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="CantEstudiantes"
                  label="Cantidad de Estudiantes"
                  name="CantEstudiantes"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Director"
                  label="Nombre del Director"
                  name="Director"
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
              Terminar
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

export default ResgistrarEscuelas
