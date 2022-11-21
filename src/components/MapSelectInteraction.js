import React, {useEffect} from 'react'


const MapSelectInteraction = ({map, onFeatureSelect}) => {


    useEffect(()=>{
        //first render cycle does not have a map since it is initialized in a useEffect
        if(map){
            map.on('singleclick', onFeatureSelect)

            return () => {
                map.un('singleclick', onFeatureSelect)
            }
        }
        
    }, [onFeatureSelect, map])


    return null
}

export default MapSelectInteraction