import GeoJSON from 'ol/format/GeoJSON'


const projectionOpts = {
    decimals: 8,
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857',
    rightHanded: undefined,
}

const format = new GeoJSON()


export const toOlFeature = (f) =>{
    return format.readFeature(f, projectionOpts)
}