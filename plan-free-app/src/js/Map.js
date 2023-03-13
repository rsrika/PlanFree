import React from 'react';
import {MapContainer, Marker, TileLayer, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Map with markers
let getRedIcon = () => {
    return L.icon({
        iconUrl: require("./red-icon.png"),
        iconSize: [30]
    })
}
export function Map(props) {


    return (
        <div id="map">
            <MapContainer center={[47.65561509005415, -122.30829152328273]} zoom={16} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[47.6566756988074, -122.31029922925379]} id="Odegaard" icon={getRedIcon()}>
                    <Popup>
                        <h4>Emergency Contraception Vending Machine</h4>
                        <p>Location: Basement of Odegaard Library</p>
                        <p>Price EC: $12 (Plan B)</p>
                        <p>Notes: Self serve. Offers a range of OTC products, such as ibuprofen</p>
                    </Popup>
                </Marker>

                <Marker position={[47.65546870754816, -122.3050630610055]} id="Q Center" icon={getRedIcon()}>
                    <Popup>
                        <h4>Q Center Office</h4>
                        <p>Location: Husky Union Building #305</p>
                        <p>Price EC: Free (Plan B)</p>
                        <p>Notes: The Q Center is an affirming space for people of all sexual and gender identities.
                            Must go during open hours and talk to a person at the front desk.</p>
                    </Popup>
                </Marker>

                <Marker position={[47.65636329997489, -122.30436347527915]} id="Hall Health" icon={getRedIcon()}>
                    <Popup>
                        <h4>Hall Health</h4>
                        <p>Location: Hall Health Room 187</p>
                        <p>Price EC: Free (Plan B)</p>
                        <p>Notes: Can pick up 10 free supplies a week.
                            Must go during open hours and talk to a person at the front desk.</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
