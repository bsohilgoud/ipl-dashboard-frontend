import React from "react";
import { Link } from "react-router-dom";
import '../css/SmallMatchCard.css'


function SmallMatchCard({match, teamName}){

    if(!match) return null;
    const matchStatus = (match.matchWinner === teamName) ? true : false;
    const color = matchStatus ? "#7ee787" : "#cd5c5c";
    return(
        <div className="smallMatchCard" style={{backgroundColor: "transparent", color: color, border: `4px solid ${color}`}}>
            <div className="opponantTeamName"> 
                <span>Vs</span>
                <h3><Link to={`/teams/${match.opponant}`} >{match.opponant}</Link></h3>
            </div>
            <div className="status">{match.status}</div>
        </div>
    )
}

export default SmallMatchCard;