import L from "leaflet";

import mapMarker from '../images/Local.svg';

const mapIcon = L.icon({
    iconUrl: mapMarker,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })
  
  export default mapIcon;