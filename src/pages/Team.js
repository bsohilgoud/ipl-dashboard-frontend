import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LatestMatchCard from "../components/LatestMatchCard";
import SmallMatchCard from "../components/SmallMatchCard";
import '../css/Team.css'
import { BASE_API_URL } from "../config";

// Format the date in a readable text format
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
};


function TeamPage () {
    const {teamName} = useParams();
    const [matches, setMatches] = useState([])
    const[matchDetails, setMatchDetails] = useState({})

    function getSmallCardMatchDetails(match){
            if(!match) return null;
            const opponant = (teamName == match.team1) ? match.team2 : match.team1;
            

            let matchStatus =  `${match.matchWinner} Won  by  ${match.margin} ${match.wonBy}`

            return {id: match.id, status:  matchStatus, opponant: opponant, matchWinner: match.matchWinner}
    }

    useEffect(( ) => {
        async function getTeamMatches(){
            let fetchUrl =  `http://${BASE_API_URL}:8080/teams/` + teamName;
            console.log(fetchUrl)
            let response = await fetch(fetchUrl);
            let data = await response.json();
            setMatchDetails(data);
            setMatches(data.matches)
            console.log(data)
        }

        getTeamMatches();
    }, [teamName])

    return(
        (matches.length === 0) ? <h1 className="team-not-found">Team Not Found</h1> :

        <div className="teamPage">
            <div className="teamPageHeader">
                <div className="teamNameHeader"> {teamName} </div>
                <div className="statictics">Wins: {matchDetails.totalWins}/{matchDetails.totalMatches}</div>
             </div>
             <div id="matchesContainer">
                    <LatestMatchCard match={matches[0]} teamName={teamName}/>
                    <div className="smallMatchCardContainer">
                        { 
                            matches.slice(1).slice(0, 3).map((match) => ( 
                            <SmallMatchCard key={match.id} match={getSmallCardMatchDetails(match)}  teamName={teamName}/>))
                        }
                       <div  className="moreMatchCard">{<Link to={`/teams/${teamName}/season/${matches[0].season}`} > More -> </Link>} </div> 
                    </div>
             </div> 
        </div>
    )
}

export default TeamPage;