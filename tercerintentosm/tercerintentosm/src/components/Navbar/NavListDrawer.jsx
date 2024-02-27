import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";


function NavListDrawer({navArrayLinks, NavLink, setOpen}) {
  return (
    <Box sx={{ width: 250, bgcolor: "inherit" }}>
        <Divider/>
        <List>
            {
                navArrayLinks.map((i) => (
                    <ListItem disablePadding key={i.title}>
                        <ListItemButton 
                            component={NavLink}
                            to={i.path}
                            onClick={() => setOpen(false)}>
                            <ListItemIcon>{i.icon}</ListItemIcon>
                            <ListItemText primary={i.title}/>
                            
                        </ListItemButton>
                     </ListItem>   
                ))
            }
                 
        </List>
    </Box>
  )
}

export default NavListDrawer