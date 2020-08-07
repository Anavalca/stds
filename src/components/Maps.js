import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export default function Maps() {
    const position = [37.798242, -3.782315]
    
    return (
      <div className='MapContainer'> 
        <Map center={position} zoom={16.5}>
          <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
          <Marker position={position}>
            <Popup>
              STDS Pinturas
            </Popup>
          </Marker>
        </Map>
      </div>
    )
}