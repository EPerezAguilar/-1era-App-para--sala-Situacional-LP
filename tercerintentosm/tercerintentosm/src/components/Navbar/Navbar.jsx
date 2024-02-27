import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import NavListDrawer from './NavListDrawer'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';



function Navbar({navArrayLinks}) {

  const [open, setOpen]= useState(false)
  return (
    <>


      <AppBar position='static'>
        <Toolbar>
          
            <Typography
              variant='h6'
              sx={{flexGrow: 1}}
            >
              Menú
            </Typography>
            <IconButton
            color='inherit'
            size='large'
            onClick={() => setOpen(true)}
            sx={{display:{ xs: "flex", sm: "none"}}}
          >
            <MenuIcon />
          </IconButton>
            <Box sx={{display: {xs: "none", sm: "block"}}}>
              {navArrayLinks.map(i =>(
                  <Button  
                    color='inherit' 
                    key={i.title}
                    component= {NavLink}
                    to={i.path}
                  >
                    {i.title}
                  </Button>
                ))}
            </Box>
        </Toolbar>

      </AppBar>

      <Drawer
        open={open}
        anchor='right'
        onClose={() => setOpen(false)}
        sx={{display:{ xs: "flex", sm: "none"}}}>
          
        

        <NavListDrawer navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={setOpen} />
      </Drawer>
    

    </>
  )
}

export default Navbar