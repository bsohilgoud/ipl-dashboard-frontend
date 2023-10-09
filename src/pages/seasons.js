import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import LatestMatchCard from '../components/LatestMatchCard';
import '../css/Seasons.css'
import { BASE_API_URL } from "../config";


function SeasonsPage(){
    const {teamName, season} =  useParams();
    const curSeason = season;
    const [seasonMatches, setSeasonMatches] = useState([])
    const [seasons, setSeasons] = useState([])


    useEffect( () => { 
        async function getMatchesOfSeason(){ 
            const response = await fetch(`http://${BASE_API_URL}:8080/teams/${teamName}/season/${season}`)
            const data = await response.json();

            setSeasonMatches(data);

        }

        async function getSeasons(){ 
            const response = await fetch(`http://${BASE_API_URL}:8080/teams/${teamName}/seasons/`)
            const data = await response.json();

            setSeasons(data);

        }

        getMatchesOfSeason();
        getSeasons();

    }, [teamName, season]);


    return(
        (seasonMatches.length === 0) ? <h1 className="no-matches-found">No Matches Found</h1> :
        <div className="seasonsPage">
            <div className="seasons-container">
                <h1> Seasons</h1>
                { 
                    seasons.map((season) => {
                        const seasonValueClassName = (season === curSeason) ? "season-value active": "season-value";
                        return <Link to={`/teams/${teamName}/season/${season}`} ><div className={seasonValueClassName}>{season}</div></Link>
                    })
                }  
            </div>
            <div className='matches-container'>
                <h1>{teamName} - {season}</h1>
                {
                    (seasonMatches.length === 0) ?<h1> No mathes found for the given season</h1> :
                    seasonMatches.map((match => (
                        <LatestMatchCard teamName={teamName} match={match}/>
                    )))
                }
            </div>
        </div>
    )
}

export default SeasonsPage;