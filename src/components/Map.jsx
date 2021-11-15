/* eslint-disable use-isnan */
import React from 'react'
 import {GoogleMap,LoadScript,Marker} from '@react-google-maps/api'
 
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map= ({ data })=> {
    
    const defaultcenter = {
            lat: Number(data.lat), lng: Number(data.lng)
        }
        const MapStyles = {
            height: '50vh',
            width: '100%'
        }
        return (

            <LoadScript googleMapsApiKey='AIzaSyBL7RfcPc7r2g-uC-v8uAymeRVfqNsxLqA'>
                <GoogleMap
                    mapContainerStyle={MapStyles}
                    zoom={16}
                    center={defaultcenter}>
                    <Marker position={defaultcenter} />
                </GoogleMap>
            </LoadScript>
        )
}
export default Map