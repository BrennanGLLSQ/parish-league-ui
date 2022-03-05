import React, {useRef, useState, useEffect} from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Select from 'ol/interaction/Select'
import XYZ from 'ol/source/XYZ'

import {pointerMove} from 'ol/events/condition'
import { makeColors, makeParishStyles } from './olHelpers'


const ParishMap = ({features, onSelect}) => {

    const [ map, setMap ] = useState()
    const [ featuresLayer, setFeaturesLayer ] = useState()

    const mapElement = useRef()
    const mapRef = useRef()
    mapRef.current = map

  
    useEffect( () => {
      
      const initialFeaturesLayer = new VectorLayer()
      initialFeaturesLayer.setSource(new VectorSource({features}))
      
      const initialMap = new Map({
        target: mapElement.current,
        layers: [
          // USGS Topo
          new TileLayer({
            source: new XYZ({
              url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
            })
          }),
          initialFeaturesLayer
        ],
        view: new View({
          projection: 'EPSG:3857',
          center: [0, 0],
          zoom: 2
        }),
        controls: []
      })


      setMap(initialMap)
      setFeaturesLayer(initialFeaturesLayer)
      return () => {
        map.un('singleclick')
      }
    },[])

    useEffect(()=>{
      if(map){
        map.getView().fit(featuresLayer.getSource().getExtent(), {
          padding: [100,100,100,100]
        })
    
  
        const hoverInteraction = new Select({
          condition: pointerMove,
          layers:[featuresLayer] 
        })
        map.addInteraction(hoverInteraction)
  
        map.on('singleclick', (e) =>{
          const clickedFeatures = map.getFeaturesAtPixel(e.pixel)
          onSelect(clickedFeatures[0])
        })

        
  
        makeColors(features)
        makeParishStyles(featuresLayer, [], map)
        
      }
    }, [map])


     


    const handleMapClick = (feature, layer) => {
      console.log('layer',layer)
      //you can add a condition on layer to restrict the listener
      return feature;
    }

    

    return (      
        <div ref={mapElement} className="map-container"></div>
    )
}

export default ParishMap