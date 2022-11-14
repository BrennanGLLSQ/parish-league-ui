import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles"
import {Card, Paper} from '@material-ui/core'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import IconButton from '@material-ui/core/IconButton'
import { rotate } from 'ol/coordinate'
import { display } from '@mui/system'
import CloseFullscreenRounded from '@mui/icons-material/CloseFullscreenRounded'




const useStyles = makeStyles({
    closedTray: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    openButton: {
        transform: "rotate(90deg)",
        display: 'inline-block'
    },
    openTray: {
        overflow: 'hidden',
        position: 'absolute',
        zIndex: 100,
        left: '0px',
        display: 'block',
        bottom: '0px',
        right: '0px',
        backgroundColor: 'rgba(255,255,255)',
        borderLeft: '1px solid #777',
        borderRight: '1px solid #777',
        outline: 'none',
        opacity: '1.0',
        height: '30%'

    },
    trayRoot: {
        overflow: 'hidden',
        zIndex: 1,
        display: ({show}) => show ? 'block' : 'none' 
    },
    closeButton: {
        float: 'right',
        display: 'inline-block'
    }
})

const Tray = () => {
    const [open, setOpen] = useState()

    const classes = useStyles({show: open})

    return (
        <>
        { open ? 
        
        <div className={classes.trayRoot} >
        <Paper elevation={7} className={classes.openTray}>
                Some tray content
                <IconButton onClick={()=>setOpen(false)} className={classes.closeButton}>
                    <CloseFullscreenRounded/>
                </IconButton>

            </Paper>
            </div> :
        <Paper elevation={3} className={classes.closedTray}>
            <IconButton onClick={()=>setOpen(true)} className={classes.openButton}>
                <OpenInFullIcon/>
            </IconButton>

        </Paper>
        }
        </>

        
    )
}

export default Tray