import React from "react";
import { Link } from "react-router-dom";
import '../css/TeamNameCard.css'
import ktk from "../static/Kochi Tuskers Kerala.jpg"
import dc from '../static/Delhi Capitals.jpg'
import srh from '../static/Sunrisers Hyderabad.jpg'
import gt from '../static/Gujarat Titans.jpg'
import kkr from '../static/Kolkata Knight Riders.jpg'
import rps from '../static/Rising Pune Supergiants.jpg'
import pk from '../static/Punjab Kings.jpg'
import pw from '../static/Pune Warriors.jpg'
import lsg from '../static/Lucknow Super Giants.jpg'
import mi from '../static/Mumbai Indians.jpg'
import csk from '../static/Chennai Super Kings.jpg'
import rr from '../static/Rajasthan Royals.jpg'
import rcb from '../static/Royal Challengers Bangalore.jpg'

const teamImages = {
    'Kochi Tuskers Kerala': ktk,
    'Delhi Capitals': dc,
    'Sunrisers Hyderabad': srh,
    'Gujarat Titans': gt,
    'Kolkata Knight Riders': kkr,
    'Rising Pune Supergiants': rps,
    'Punjab Kings': pk,
    'Pune Warriors': pw,
    'Lucknow Super Giants': lsg,
    'Mumbai Indians': mi,
    'Chennai Super Kings': csk,
    'Rajasthan Royals': rr,
    'Royal Challengers Bangalore': rcb,
  };

export function TeamNameCard({teamName, index}) {
     return(
         <div >
             <Link to={`/teams/${teamName}`}>
                <div className="TeamNameCard" key={index} style={{backgroundImage: `url(${ktk})`}}><div className="team-name-label"><span>{teamName}</span></div></div>
            </Link>
        </div>
     );
}

export default TeamNameCard;