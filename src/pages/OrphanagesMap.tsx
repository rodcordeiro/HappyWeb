import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import mapMarker from '../images/Local.svg'

function OrphanagesMap(){
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
            <div></div>

            <Link 
                to=''
                className='create-orphanage'
            >
                <FiPlus />
            </Link>
        </div>
    )
}

export default OrphanagesMap;