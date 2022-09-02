import React from "react";
import SectionCharacters from "./SectionCharacters";
import SectionPlanets from "./SectionPlanets"
import SectionVehicles from "./SectionVehicles";

const List = () => {
    return (
        <>
            <SectionCharacters sectionTitle="Characters" />
            <SectionPlanets sectionTitle="Planets" />
            <SectionVehicles sectionTitle="Vehicles" />
        </>
    )
}

export default List;