import React, {useContext} from "react";
import Card from "./Card";
import {Context} from "../../store/appContext";
import Loading from "../Loading";


const SectionVehicles = ({sectionTitle, url}) => {

    const {store, actions} = useContext(Context)


    return (
        <div className="container mb-2">
            <h2 className="text-danger mb-5">{sectionTitle}</h2>
            <div className="d-flex overflow-auto gap-5">
            {
                    store.vehicles.length != 0 ? 
                        [...store.vehicles].map((x, i) => (
                            <Card 
                                key={i}
                                sectionTitle={sectionTitle}
                                url={x.url}
                                cardTitle={x.name}
                                id={`v-${x.uid}`}
                                imgId={x.uid}
                            />
                        ))
                    :

                    <Loading />

                }          
            </div>
        </div>
    )
} 

export default SectionVehicles;