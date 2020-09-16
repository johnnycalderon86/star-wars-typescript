import React from 'react'
import {useQuery} from 'react-query'

const getPlanets = ()


 const Planets = () => {
    const {} = useQuery('planets', getPlanets)


    return (
        <div>
        <h1>Planets</h1>
        </div>
    )
}

export default Planets
