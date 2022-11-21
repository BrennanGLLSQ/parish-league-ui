import VectorSource from 'ol/source/Vector'
import {toOlFeature} from './geoconverters'



const parishBoundariesCollection = require('./ParishBoundaries.json')
const parishBoundaries = parishBoundariesCollection.features.map(feature => toOlFeature(feature))

const parishVectorSource = new VectorSource({features: parishBoundaries})

export {parishVectorSource}