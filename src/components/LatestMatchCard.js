import React from "react";
import { Link } from "react-router-dom";
import '../css/LatestMatchCard.css'


function LatestMatchCard({match, teamName}){

    if(!match) return null;

    const matchStatus = (match.matchWinner === teamName) ? true : false;
    const color = matchStatus ? "#7ee787" : "#cd5c5c";
    const opponant = (teamName == match.team1) ? match.team2 : match.team1;

    return(
        <div className="lastestMatchCard" style={{backgroundColor: "none", color: color, border: `4px solid ${color}`}}>
            <div className="match-details-section1">
                <div className="opponantTeamName">
                        <h1 className="VS">Vs</h1>
                        <h1><Link to={`/teams/${opponant}`}>{opponant}</Link></h1>
                </div>
                <h2 className="status">{match.matchWinner} Won By {match.margin} {match.wonBy}</h2>
            </div>
            <div className="match-details-section2">
                <div className="matchDetails">
                    <button className="matchDetailsBtn">
                            <Link to={`/match/${match.id}`}> </Link> Match Details
                    </button>
                </div>
                <div className="season">
                    <h3>Season</h3>
                    <p>{match.season}</p>
                </div>
                <div className="umpires">
                    <h3>Umpires</h3>
                    <p>{match.umpire1}, {match.umpire2}</p>
                </div>
                <div className="venue">
                    <h3>Venue</h3>
                    <p>{match.venue}</p>
                </div>
            </div>
        </div>
    )
}

export default LatestMatchCard;