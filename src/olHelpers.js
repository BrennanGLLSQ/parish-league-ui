import Style from 'ol/style/Style'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Text from 'ol/style/Text'
import { toOlFeature } from './geoconverters'
import { parishVectorSource } from './parishVectorSource'

const parishColors = {}

export const makeParishStyles = (layer, features=[], map) =>{
    if(features.length){
        makeColors(features)
    }
    layer.setStyle((feature) =>{
        const color = parishColors[feature.get('OID')]
        const zoom = map.getView().getZoom()
        const fontSize = zoom

        return new Style({
          text: new Text({
            font: `${fontSize}px Calibri,sans-serif`,
            fill: new Fill({ color: '#000' }),
            stroke: new Stroke({
              color: '#fff', width: 2
            }),
            text: feature.get('Name').split(' - ')[0]
          }),
          fill: new Fill({color}),
          stroke: new Stroke({
            color,
            width: 1
          })
        })
      })

}


export const makeColors = () =>{
    parishVectorSource.getFeatures().forEach(feature =>{
        parishColors[feature.get('OID')] =  `rgba(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)}, 0.5)`
    })
}

const getRandomInt= (max) =>{
    return Math.floor(Math.random() * max);
  }


const parishBoundariesCollection = require('./ParishBoundaries.json')
const parishBoundaries = parishBoundariesCollection.features.map(feature => toOlFeature(feature))
export const featuresLayer = new VectorLayer().setSource(new VectorSource({features: parishBoundaries}))
  