import React from 'react'
import ParishCard from './ParishCard'
import { Typography, Card } from "@material-ui/core"


const ParishSelect = ({selectedParishes, onRemove}) =>{

    return (
        <>
            <Card key="footer">
                    <Typography color="textSecondary" variant={"subtitle1"}>Select ten parishes which you think will stay open!</Typography>
            </Card>
            {selectedParishes.map((parish, index) =><ParishCard parish={parish} onRemove={onRemove} index={index+1}/>)}
        </>
    )
}

export default ParishSelect