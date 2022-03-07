import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import BlurOnSharpIcon from '@mui/icons-material/BlurOnSharp';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import AnimationIcon from '@mui/icons-material/Animation';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PolylineIcon from '@mui/icons-material/Polyline';
import AssessmentIcon from '@mui/icons-material/Assessment';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#F7F7F7",
    },

    secondary: {
      main:"#eb51d1",
    },

  },
  typography: {
    fontFamily: [
    'BlinkMacSystemFont'
    ],
    h2: {
      fontWeight: 700,
      fontFamily:'Roboto',
      fontSize: 78,
      lineHeight: '19px',
      marginTop:0,
      width:'fit-content'
      },
    h4: {
      fontWeight: 700,
      fontFamily:'BlinkMacSystemFont',
      fontSize: 78,
      lineHeight: '1px',
      },
   h3 : {
      fontWeight: 700,
      fontFamily:'BlinkMacSystemFont',
      fontSize: 78,
      fontcolor:'#eb51d1',
      lineHeight: '1px',
      },
    h5: {
      fontWeight: 100,
      fontFamily:'BlinkMacSystemFont',
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "left"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            Berkembang
          </Typography>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
           Bersama
          </Typography>
          <Typography> </Typography>
          <Typography> </Typography>
                    <Typography> </Typography>
           <h1  style={{ backgroundImage: "linear-gradient(to right, red, blue)", fontFamily:1, fontSize:78, marginTop:45, marginBottom:0, color:"transparent",WebkitBackgroundClip:"text", backgroundClip:"text", position:"relative", backgroundSize:"contain", width:"fit-content"}}>
            dola </h1><Typography variant="h2" className={classes.wrapper}  color="primary">,
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Usaha mikro kelas menengah adalah istilah umum dalam dunia ekonomi yang merujuk kepada usaha ekonomi produktif yang dimiliki perorangan maupun badan usaha sesuai dengan kriteria yang ditetapkan oleh Undang-undang No. 20 tahun 2008.

          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<FingerprintIcon style={{fill: "white", height:"100", width:"10rem"}}/>}   title="Keamanan Data Terjaga" />
          <Grid icon={<PolylineIcon style={{fill: "white", height:"100", width:"10rem"}}/>}   title="Data Saling Terkoneksi" />
          <Grid icon={<AppsRoundedIcon style={{fill: "white", height:"100", width:"10rem"}}/>} title="Dengan Panduan Praktisi Ahli" btnTitle="Show me More"/>
          <Grid icon={<AssessmentIcon style={{fill: "white", height:"100", width:"10rem"}}/>}  title="Input Perkembangan Real Time" btnTitle="Show me More"/>
        </div>

        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
