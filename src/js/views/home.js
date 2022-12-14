import React from "react";
import SectionCharacters from "../component/List/SectionCharacters";
import SectionPlanets from "../component/List/SectionPlanets"
import SectionVehicles from "../component/List/SectionVehicles";

export const Home = () => {
    return (
        <>
            <SectionCharacters sectionTitle="Characters" />
            <SectionPlanets sectionTitle="Planets" />
            <SectionVehicles sectionTitle="Vehicles" />
        </>
    )
}