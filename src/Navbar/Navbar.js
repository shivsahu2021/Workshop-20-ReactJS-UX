import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    flexGrow: {
      flex: '1',
    },
    card: {
backgroundColor: "white",
'&:hover': {
    backgroundColor:"#c1e2f3  "
}
    },

    })

export default function Navbar() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" style={{backgroundColor:"white"}}>
        <Toolbar>
          
          <img style={{width:"65px"}} src="https://www.clipartmax.com/png/middle/203-2038156_doctor-symbol-clipart-hospital-fit-point-plus-tips.png" alt="" />
          <Button className={classes.card} style={{color:"Black" }}
           variant="text"><h3>PATIENTS</h3></Button>
          <Button className={classes.card} style={{color:"Black"}}
           variant="text"><h3>USER</h3></Button>
          <Button className={classes.card} style={{color:"Black"}}
           variant="text"><h3>BILLING</h3></Button>
          <Button className={classes.card} style={{color:"Black"}}
           variant="text"><h3>CALENDER</h3></Button>
          
         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           
            <IconButton
              size="large"
              aria-label="show 1 new notifications"
              color="inherit"
            >
              <Badge badgeContent={2} color="error">
                <NotificationsIcon style={{color:"Black"}}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle style={{color:"Black"}}/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              
              aria-haspopup="true"
               
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
            
        </div>
    )
}
