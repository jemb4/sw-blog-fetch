import React, {useContext, useEffect, useState} from "react";
import { Context } from "../../store/appContext";

const DetailsPlanet = ({match}) => {

    useEffect(() => {console.log(match)}, [])
    const {store, actions} = useContext(Context);


    let detailsId = match.params.id.slice(2);

    const [details, setDetails] = useState({
        description: "Loading...",
        properties: {
            population: "Loading...",
            orbital_period: "Loading...",
            rotation_period: "Loading...",
            gravity: "Loading...",
            diameter: "Loading...",
            climate: "Loading...",
            name: "Loading..."
        }
    });


    let url = `https://www.swapi.tech/api/planets/${detailsId}`

    useEffect(() => {
        if (store.planetsDetails.find(x => x.uid == detailsId)) {
            setDetails(store.planetsDetails.find(x => x.uid == detailsId))
        } else {
            actions.loadDetails(url, "planet")
        }
    }, [store.planetsDetails])


    const imgUrl = (
        match.params.id == "p-1" ?
        "https://picsum.photos/300/300"
        :
        `https://starwars-visualguide.com/assets/img/planets/${detailsId}.jpg`
    )

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={imgUrl} alt="character of Star Wars universe" />
                </div>
                <div className="col-6">
                    <h1>{details.properties.name}</h1>
                    <p>{details.description}</p>
                </div>
                <hr className="dropdown-divider text-danger" />
                <div className="text-danger d-flex justify-content-around">
                    <div>
                        <p className="fw-bold">Name</p>
                        <p>{details.properties.name}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Population</p>
                        <p>{details.properties.population}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Orbital Period</p>
                        <p>{details.properties.orbital_period}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Rotation Period</p>
                        <p>{details.properties.rotation_period}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Gravity</p>
                        <p>{details.properties.gravity}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Diameter</p>
                        <p>{details.properties.diameter}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Climate</p>
                        <p>{details.properties.climate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPlanet;