import React, { useState, useRef } from "react"
import {toOlFeature} from '../geoconverters'
import ParishMap from '../ParishMap'
import Sidebar from './sidebar/Sidebar';
import ParishCard from "./ParishCard";
import { Button, Typography, Dialog, DialogContent, DialogActions, Card, TextField, DialogTitle } from "@material-ui/core";
import { getUser, createUser } from "../services/parishLeagueApiServices";

const parishBoundariesCollection = require('../ParishBoundaries.json')
const parishBoundaries = parishBoundariesCollection.features.map(feature => toOlFeature(feature))

const AppContainer = () => {
    const selectedRef = useRef({})
    const [selected, setSelected] = useState([])
    const [dialogOpen, setDialogOpen] = useState(false)
    const [email, setEmail] = useState('')

    selectedRef.current = selected

    const handleSelect = (feature) =>{
        const oid = feature?.get('OID')
        if(!oid) return
        const includesFeature = selectedRef.current.some(f => f.get('OID') === oid)
        if(includesFeature){
            handleRemove(feature)
        }
        else if(selectedRef.current.length < 10){
            setSelected([...selectedRef.current, feature])
        }
    }

    const handleRemove = (feature) => {
        const oid = feature.get('OID')
        setSelected(selectedRef.current.filter(f => f.get('OID') !== oid))
    }

    const handleSave = async () =>{
        const selections = selected.map(parish => parish.get('OID')).join(',')
        await createUser(email, selections)
        setDialogOpen(false)
        setSelected([])
    }


    return (
        <div>
            <ParishMap features={parishBoundaries} onSelect={handleSelect}/>

            <Sidebar width={'300px'}>
                {selected.map((parish, index) =><ParishCard parish={parish} onRemove={handleRemove} index={index+1}/>)}
                {selected.length < 10 ?
                <Card key="footer">
                    <Typography color="textSecondary" variant={"subtitle1"}>Select ten parishes which you think will stay open!</Typography>
                </Card> : <Button variant="contained" color="primary" onClick={()=>setDialogOpen(true)}>Save Picks</Button>}
            </Sidebar>
            <Dialog open={dialogOpen}>
                <DialogTitle>
                    <Typography variant="h6" color="textPrimary">Save Your Picks!</Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography color="textSecondary" variant="body1">Enter your email to save your picks!</Typography>
                    <TextField placeholder="myemail@email.com" label="Email" required value={email} onChange={e => setEmail(e.target.value)} />
                    
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="primary" onClick={()=>setDialogOpen(false)}>Close</Button>
                    <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
            
        </div>


    )
}

export default AppContainer