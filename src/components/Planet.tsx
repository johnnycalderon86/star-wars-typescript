import React from 'react'



type Results = {
    name: string,
    population: string,
    terrain: string,

}


interface IPlantes {
    planet: Results
}





const Planet: React.FC<IPlantes> = ({ planet }) => {
    return (
        <div className="card">
            <h3>{planet.name}</h3>
            <p>Population - {planet.population}</p>
            <p>Terrain - {planet.terrain}</p>
        </div>
    )
}
export default Planet