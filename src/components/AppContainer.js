import React, { useState, useRef } from "react"
import {toOlFeature} from '../geoconverters'
import ParishMap from '../ParishMap'
import Tray from "./tray/Tray"


const parishBoundariesCollection = require('../ParishBoundaries.json')
const parishBoundaries = parishBoundariesCollection.features.map(feature => toOlFeature(feature))

const AppContainer = () => {
    const [selectingClosings, setSelectingClosings] = useState(true)

    //this state is too high, should be down on chip display
    //might be a good time to bring in store
    const [selectedClosings, setSelectedClosings] = useState([])
    const [selectedStayOpens, setSelectedStayOpens] = useState([])

    const handleSelect = (feature) => {
        const featureId = feature.get('OID')
        if(selectingClosings && !selectedClosings.includes(featureId)){
            setSelectedClosings([...selectedClosings, featureId])
        } else if(!selectedStayOpens.includes(featureId)){
            setSelectedStayOpens([...selectedStayOpens, featureId])
        }
    }

    const handleRemove = (key) => (id) => {
        const filter = (parishId) => parishId !== id
        if(key === 'closing'){
            setSelectedClosings(selectedClosings.filter(filter))
        } else if(key === 'open') {
            setSelectedStayOpens(selectedStayOpens.filter(filter))
        }
    }

    return (
        <div>
            <ParishMap features={parishBoundaries} onFeatureSelect={handleSelect} />
            <Tray 
                selectingClosings={selectingClosings} 
                setSelectingClosings={setSelectingClosings} 
                selectedClosings={selectedClosings} 
                selectedStayOpens={selectedStayOpens} 
                onRemove={handleRemove} />
        </div>
    )
}

export default AppContainer