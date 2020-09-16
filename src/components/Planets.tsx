import React from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet';


export type Result = {
    climate: string;
    created: string;
    diameter: string
    edited: string
    films: string[]
    gravity: string
    name: string
    orbital_period: string
    population: string
    residents: string[]
    rotation_period: string
    surface_water: string
    terrain: string
    url: string
}


const getPlanets = async () => {
    const endpoint: string = 'https://swapi.dev/api/planets';

    const request = await (await fetch(endpoint)).json();
    return request

}



const Planets = (): JSX.Element => {
    const { data, status } = useQuery('planets', getPlanets)
    console.log(data);




    return (
        <div>
            <h1>Planets</h1>
            {status === 'loading' && (
                <div>Loading data...</div>
            )}
            {status === 'error' && (
                <div>Error fetching data</div>
            )}
            {status === 'success' && (

                <div>
                    {data.results.map((planet: Result) => {
                        return <Planet key={planet.name} planet={planet} />
                    })}</div>
            )}
        </div>
    )
}

export default Planets
