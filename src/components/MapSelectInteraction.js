import React, {useEffect, useState} from 'react'


const MapSelectInteraction = ({map, onFeatureSelect}) => {
    const [singleClickKey, setSingleClickKey] = useState()

    useEffect(()=>{
        //first render cycle does not have a map since it is initialized in a useEffect
        if(map){
            if(singleClickKey){
                map.un('singleClick', singleClickKey)
            }
            const eventKey = map.on('singleclick', onFeatureSelect)
            setSingleClickKey(eventKey)

            return () => {
                map.un('singleclick', onFeatureSelect)
            }
        }
        
    }, [onFeatureSelect, map])


    return null
}

export default MapSelectInteraction