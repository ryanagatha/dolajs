import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

import Grid2 from "./Grid2";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import PolylineIcon from "@mui/icons-material/Polyline";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import AssessmentIcon from "@mui/icons-material/Assessment";

const styles = makeStyles({
    bar:{
        paddingTop: "1rem",
        backgroundColor: "white",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "10%",
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                <img src={logoMobile} className={classes.logoMobile}/> 
                <Typography variant="h6" className={classes.menuItem}>
                   Tentang Kami
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                   Laman Masuk
                </Typography>
                                <Typography variant="h6" className={classes.menuItem}>
                    Kontak Kami
                </Typography>
                                <Typography variant="h6" className={classes.menuItem}>
                   Daftar Teman Dola
                </Typography>
             <div style={{ color: "#3597FBff" }} className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid2   title="Coba Sekarang Tanpa Biaya" />

        </div>
            </Toolbar>
    )
}

export default NavBar
