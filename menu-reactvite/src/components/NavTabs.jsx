import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../pages/Login';
import Registro from '../pages/Informacion';
import Home from '../pages/Home'
import { Link } from 'react-router-dom'
import Informacion from '../pages/Informacion';
import { useState } from 'react';
import { ButtonSing } from './Button';
import PrincipalView from '../pages/PrincipalView';


function TabPanel({ children, value, index}) {
  
  return (
    <div
      
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}



function NavLine(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
        >
          <LinkTab label="Home" to={"/"} {...NavLine(0)} />
          <LinkTab label="Información" to={"/register"} {...NavLine(1)} />
          <LinkTab label={isRegister ? "Login" :  "Registro"} {...NavLine(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <PrincipalView />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Informacion /> 
      </TabPanel>
      <TabPanel value={value} index={2}>
         <Login />
         
      
      </TabPanel>
    </div>
  );
}