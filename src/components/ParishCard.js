import React from 'react'
import {Card, Typography} from '@material-ui/core'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const ParishCard = ({parish, onRemove, index}) =>{
    return (
        <Card key={parish} style={{margin: '4px 0'}}>
            <Typography variant={'body2'} color={'primary'} style={{width: '100%'}}>{`${index}.${parish.get('Name')}`}</Typography>
            <IconButton onClick={()=>onRemove(parish)} style={{float: 'right'}}>
                <DeleteIcon/>
            </IconButton>
        </Card>
    )
}

export default ParishCard