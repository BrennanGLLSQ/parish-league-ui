import React, {useRef, useState, useEffect} from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Select from 'ol/interaction/Select'
import XYZ from 'ol/source/XYZ'
import { makeStyles } from "@material-ui/core/styles"
import {pointerMove} from 'ol/events/condition'
import { makeColors, makeParishStyles } from './olHelpers'
import MapSelectInteraction from './components/MapSelectInteraction'
import { parishVectorSource } from './parishVectorSource'


const useStyles = makeStyles({
  map: {
      height: '100vh',
      width: '100%',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0, 
      right: 0
  }
})




const ParishMap = ({features, onFeatureSelect}) => {
    const [ map, setMap ] = useState()
    const [ featuresLayer, setFeaturesLayer ] = useState()

    const mapElement = useRef()
    const classes = useStyles()


  
    useEffect( () => {
      
      const initialFeaturesLayer = new VectorLayer()
      initialFeaturesLayer.setSource(parishVectorSource)
      
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

        makeColors()
        makeParishStyles(featuresLayer, [], map)
        
      }
    }, [map])

    const handleFeatureSelect = (event) => {
      const clickedFeatures = map.getFeaturesAtPixel(event.pixel)
      onFeatureSelect(clickedFeatures[0])
    }

    return (      
        <div ref={mapElement} className={classes.map}>
          <MapSelectInteraction onFeatureSelect={handleFeatureSelect} map={map} />
        </div>
    )
}

export default ParishMap