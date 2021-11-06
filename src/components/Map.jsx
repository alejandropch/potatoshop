import React from 'react'
import {GoogleMap,LoadScript,Marker} from '@react-google-maps/api'


const MapStyles={
    height:'50vh',
    width:'100%'
}
const defaultcenter={
    lat:-12.076707976618735,lng:  -77.08312523198977
}

const Map=()=>(
        
    <LoadScript googleMapsApiKey='AIzaSyBL7RfcPc7r2g-uC-v8uAymeRVfqNsxLqA'>
        <GoogleMap
            mapContainerStyle={MapStyles}
            zoom={16}
            center={defaultcenter}>
            <Marker position={defaultcenter} />
        </GoogleMap>
    </LoadScript>
    
)
export default Map