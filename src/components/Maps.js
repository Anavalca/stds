import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export default function Maps() {
    const position = [37.798242, -3.782315]
    
    return (
      <Map center={position} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
}