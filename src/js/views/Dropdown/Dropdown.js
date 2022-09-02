import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../../store/appContext";


const Dropdown = ({match}) => {

    const {store, actions} = useContext(Context);

    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                Favorites <span className="badge bg-secondary rounded-circle">{store.favorites.length}</span>
            </button>
            <ul className="dropdown-menu p-1" aria-labelledby="dropdownMenuButton1">
                {
                    !store.favorites.length ?
                    `Empty! Add favorites!`
                    :
                    [...store.favorites].map((x, i) => (
                        <li className="d-flex justify-content-between" key={i}> 
                            <Link to={x.id.includes('p') ? `/planets/${x.id}` : x.id.includes('v') ? `/vehicles/${x.id}` : `/people/${x.id}`}>
                                <p className="">
                                {x.name}
                                </p>
                            </Link>
                            <span id={x.id} onClick={actions.removeFavorite}>
                                🗑️
                            </span>
                        </li>
            ))}
            </ul>
        </div>
    )
}

export default Dropdown;