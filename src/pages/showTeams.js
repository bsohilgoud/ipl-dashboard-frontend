import React from "react";
import { useEffect, useState } from "react";
import { TeamNameCard } from "../components/TeamNameCard";
import '../css/TeamNames.css'
import { BASE_API_URL } from "../config";

function ShowTeams(){
    const [teams, setTeams] =  useState([]);

    useEffect (() => { 
        const fetchTeamNames = async () => {
            console.log("The spring boot container id is - " + BASE_API_URL)
            console.log(`Trying to fetch the data - as http://${BASE_API_URL}:8080/teams`)
            const response = await fetch(`http://${BASE_API_URL}:8080/teams`);
            const data =  await response.json();
            setTeams(data);
        }

        fetchTeamNames();

    }, []);

    return(
        <div className="TeamsPage">
            <div id="TeamNameCards">
                {teams.map( (teamName, index) => (
                    <TeamNameCard teamName={teamName} index={index}/>
                ))}
            </div>
        </div>
    );
}

export default ShowTeams;