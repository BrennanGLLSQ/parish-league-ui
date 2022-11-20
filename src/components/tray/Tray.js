import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles"
import {Paper, Typography} from '@material-ui/core'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import IconButton from '@material-ui/core/IconButton'
import CloseFullscreenRounded from '@mui/icons-material/CloseFullscreenRounded'
import ChipsDisplay from './ChipsDisplay'
import LongSwitch from './LongSwitch'



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
    },
    switch: {
        width: "100%",
        display: 'inline-flex'
    },
    headerContent:{
        display: 'inline',
    },
    chipsDisplay: {
        width: '100%',
        display: 'inline-flex',
        height: '100%',
    },
    buttonRow: {
        overflow: 'hidden'
    }
})

const Tray = () => {
    const [open, setOpen] = useState()
    const [selectingClosings, setSelectingClosings] = useState(false) //could be in store, will need it for select interaction

    const classes = useStyles({show: open})


    return (
        <>
        { open ? 
        
        <div className={classes.trayRoot} >
            <Paper elevation={7} className={classes.openTray}>
                <div className={classes.headerContent}>
                    <div className={classes.buttonRow}>
                        <IconButton onClick={()=>setOpen(false)} className={classes.closeButton}>
                            <CloseFullscreenRounded/>
                        </IconButton>
                    </div>
                    <div className={classes.switch}>
                        <Typography variant="body1" >Staying Open</Typography>
                        <LongSwitch />
                        <Typography variant="body1">Closing</Typography>

                    </div>
                </div>
                <div className={classes.chipsDisplay}>
                    <ChipsDisplay values={[]} onDelete={()=>{}} />
                    <ChipsDisplay values={[]} onDelete={()=>{}} />
                </div>
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