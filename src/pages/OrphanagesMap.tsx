import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarker from '../images/Local.svg';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/orphanages-map.css';
import api from '../services/api';
import Orphanage from './Orphanage';

interface Orphanage{
    id: number,
    latitude: number,
    longitude: number,
    name: string
}

function OrphanagesMap(){
    let [orphanages,setOrphanages] = useState<Orphanage[]>([])
    
    useEffect(()=>{
        api.get('orphanages')
        .then(response=>{
            setOrphanages(response.data)
        })
    },[])
    
    return (
        <div id="page-map">
        <aside>
        <header>
        <img src={mapMarker} alt="Map marker img"/>
        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
        <strong>Guarulhos</strong>
        <span>São Paulo</span>
        </footer>
        </aside>
        
        <Map 
        center={[-23.5440109,-46.6445682]} 
        zoom={15}
        style={{width: "100%", height: "100%"}}
        >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        {/* <TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        /> */}
        <TileLayer 
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        
        {
            orphanages.map(orphanage=>(
                <Marker 
                    icon={mapIcon}
                    position={[orphanage.latitude,orphanage.longitude]}
                    key={orphanage.id}
                >
                    <Popup 
                        closeButton={false}
                        minWidth={240}
                        maxWidth={240}
                        className="map-popup"
                    >
                        {orphanage.name}
                        <Link to={`/orphanages/${orphanage.id}`}>
                            <FiArrowRight size={20} color="#fff"/>
                        </Link>
                    </Popup>
                </Marker>
                ))
            }
            
            </Map>
            
            <Link 
            to='/orphanages/create'
            className='create-orphanage'
            >
            <FiPlus size={32} color="#fff"/>
            </Link>
            </div>
            )
        }
        
        export default OrphanagesMap;