import React, {useContext, useEffect, useState} from "react";
import { Context } from "../../store/appContext";

const DetailsCharacter = ({match}) => {

    const {store, actions} = useContext(Context);

    let detailsId = match.params.id.slice(2);
    let general = store.characters.find(x => x.uid == detailsId)

    const [generalInfo, setGeneralInfo] = useState(general);
    const [details, setDetails] = useState({
        description: "Loading...",
        properties: {
            gender: "Loading...",
            hair_color: "Loading...",
            eye_color: "Loading...",
            skin_color: "Loading...",
            birth_year: "Loading...",
            height: "Loading..."
        }
    });


    let url = `https://www.swapi.tech/api/people/${detailsId}`

    useEffect(() => {
        if (store.charactersDetails.find(x => x.uid == detailsId)) {
            setDetails(store.charactersDetails.find(x => x.uid == detailsId))
        } else {
            actions.loadDetails(url, "character")
        }
    }, [store.charactersDetails])

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${match.params.id.slice(2)}.jpg`} alt="character of Star Wars universe" />
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
                        <p className="fw-bold">Birth Year</p>
                        <p>{details.properties.birth_year}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Gender</p>
                        <p>{details.properties.gender}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Height</p>
                        <p>{details.properties.height}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Skin Color</p>
                        <p>{details.properties.skin_color}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Eye Color</p>
                        <p>{details.properties.eye_color}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsCharacter;