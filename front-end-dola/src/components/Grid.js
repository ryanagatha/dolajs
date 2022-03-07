import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import CustomBtn from './CustomBtn'
import Button from '@mui/material/Button';

const styles = makeStyles({
    wrapper: {
       display: "flex",
       flexDirection: "column",
       float:"left",
       alignItems: "center", 
       padding: "0 3rem 0 3rem"
    }, 
    item: {
       paddingTop: "1rem"
    }
})

function Grid(props) {
    const {icon, title, btnTitle} = props;
    const classes = styles(); 
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>{icon}</div>

            <Button variant="contained">{title}</Button>

            <div className={classes.item}>

            </div>
        </div>
    )
}



export default Grid
