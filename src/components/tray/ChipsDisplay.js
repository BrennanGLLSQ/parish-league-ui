import React from 'react'
import {Paper, Chip} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles({
    paper: {
        flexWrap: 'wrap',
        backgroundColor: 'rgba(0,0,0,0.09)',
        width: '50%',
        height: '100%',
        margin: '4px'
    },
    chipContainer: {
        paddingTop: '8px'
    }
})


const ChipsDisplay = ({values, onDelete}) => {
    const classes = useStyles()

    return (
        <Paper className={classes.paper}>
            <div className={classes.chipContainer}> 
                {
                    values.map(entry => {
                        return (
                            <Chip 
                                key={entry.value}
                                label={entry.label}
                                onDelete={() => onDelete(entry.value)}
                                color={'primary'}/>
                        )
                    })
                } 
            </div>

        </Paper>


    )


}

export default ChipsDisplay
