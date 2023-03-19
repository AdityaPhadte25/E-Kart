import React from 'react'
import { useLocation } from 'react-router-dom'
import CardComponent from './CardComponent'
import Header from './Header'

export default function () {

    const location = useLocation()

    return (
        <div>
            <Header/>
            <div>
               <CardComponent location={location}/>
            </div>
        </div>
    )
}
