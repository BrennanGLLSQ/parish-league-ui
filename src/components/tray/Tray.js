import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles"
import {Paper, Typography} from '@material-ui/core'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import IconButton from '@material-ui/core/IconButton'
import CloseFullscreenRounded from '@mui/icons-material/CloseFullscreenRounded'
import ChipsDisplay from './ChipsDisplay'
import LongSwitch from './LongSwitch'
import { parishVectorSource } from '../../parishVectorSource'



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
    },
    switchLabel: {
        width: '35%'
    }
})

const Tray = ({selectingClosings, setSelectingClosings, selectedClosings, selectedStayOpens, onRemove, open, setOpen }) => {


    const classes = useStyles({show: open})

    const handleSwitch = (e) => {
        setSelectingClosings(e.target.checked)
    }

    const chipValues = (ids) => {
        const olFeatures = ids.map(id => parishVectorSource.getFeatures().find(f => f.get('OID') === id))
        return olFeatures.map(f => ({value: f.get('OID'), label: f.get('Name')}))
    }

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
                        <Typography variant="body1" className={classes.switchLabel} >Staying Open</Typography>
                        <LongSwitch checked={selectingClosings} onChange={handleSwitch} />
                        <Typography variant="body1" className={classes.switchLabel}>Closing</Typography>

                    </div>
                </div>
                <div className={classes.chipsDisplay}>
                    <ChipsDisplay values={chipValues(selectedStayOpens)} onDelete={onRemove('open')} />
                    <ChipsDisplay values={chipValues(selectedClosings)} onDelete={onRemove('closing')} />
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