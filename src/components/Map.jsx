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

            <LoadScript googleMapsApiKey={`${process.env.GOOGLE_MAPS_API_KEY}`}>
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