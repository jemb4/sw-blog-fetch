import React, {useContext, useEffect, useState} from "react";
import { Context } from "../../store/appContext";

const DetailsVehicles = ({match}) => {

    const {store, actions} = useContext(Context);

    let detailsId = match.params.id.slice(2);
    let general = store.vehicles.find(x => x.uid == detailsId)

    const [generalInfo, setGeneralInfo] = useState(general);
    const [details, setDetails] = useState({
        description: "Loading...",
        properties: {
            model: "Loading...",
            vehicle_class: "Loading...",
            manufacturer: "Loading...",
            crew: "Loading...",
            cargo_capacity: "Loading...",
        }
    });


    let url = `https://www.swapi.tech/api/vehicles/${detailsId}`

    useEffect(() => {
        if (store.vehiclesDetails.find(x => x.uid == detailsId)) {
            setDetails(store.vehiclesDetails.find(x => x.uid == detailsId))
        } else {
            actions.loadDetails(url, "vehicle")
        }
    }, [store.vehiclesDetails])

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${match.params.id.slice(2)}.jpg`} alt="vehicle of Star Wars universe" />
                </div>
                <div className="col-6">
                    <h1>{generalInfo.name}</h1>
                    <p>{details.description}</p>
                </div>
                <hr className="dropdown-divider text-danger" />
                <div className="text-danger d-flex justify-content-around">
                    <div>
                        <p className="fw-bold">Name</p>
                        <p>{generalInfo.name}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Model</p>
                        <p>{details.properties.model}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Vehicle Class</p>
                        <p>{details.properties.vehicle_class}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Manufacturer</p>
                        <p>{details.properties.manufacturer}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Crew</p>
                        <p>{details.properties.crew}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Cargo Capacity</p>
                        <p>{details.properties.cargo_capacity}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsVehicles;