import React from 'react'
import { useQuery } from 'react-query'





const getPlanets = async () => {
    const endpoint = 'https://swapi.dev/api/planets';

    const request = await (await fetch(endpoint)).json();
    return request

}


const Planets = (): JSX.Element => {
    const { data, status } = useQuery('planets', getPlanets)
    console.log(data, status);
    

    return (
        <div>
            <h1>Planets</h1>
            {status}
        </div>
    )
}

export default Planets
