import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import StandingsMatches from './common/StandingsMatches.js';
import Standings from './common/Standings.js';

const Championship = () => {

    const corsUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://api.football-data.org/v2/competitions/2016/standings?standingType=TOTAL";

    const url = `${corsUrl}${apiUrl}`;

    const config = {
        url,
        headers: {
        'X-Auth-Token': process.env.REACT_APP_API_TOKEN,
        },
    }
    const [standings, setStandings] = useState(null);

    useEffect(() => {
        // console.log(process.env.REACT_APP_API_TOKEN, "abcd")
        axios(config)
        .then(response => {
            // console.log(response.data)
            setStandings(response.data);
        }).catch(error => console.log(error))
    });

    return (
        <Wrapper className="competitions">
            <div className="navigation">
                <p>
                    <a href="/">All Competitions</a> / <span className="faint-text">Championship</span>
                </p>
            </div>
            <h4 className="competitions-title championship-title">
                <strong>Championship</strong>
            </h4>
            <StandingsMatches />

            <div className="standings-header standings-row faint-text">
                <div className="standings-header-team">
                    <p>Team</p>
                </div>
                <div className="standings-header-details">
                    <p>MP</p>
                    <p>W</p>
                    <p>D</p>
                    <p>L</p>
                    <p>GF</p>
                    <p>GA</p>
                    <p>Pts</p>
                </div>
            </div>

            {
                standings && standings.standings[0].table.map(element =>
                    <div className = "competitions-standings">
                        <div className="standings-item standings-row faint-text">
                            <div className="standings-item-team">
                                <p>{element.position}</p>
                                <img className="standings-image-thumbnail" src={element.team.crestUrl} alt="" />
                                <p>{element.team.name}</p>
                            </div>
                            <div className="standings-item-details">
                                <p>{element.playedGames}</p>
                                <p>{element.won}</p>
                                <p>{element.draw}</p>
                                <p>{element.lost}</p>
                                <p>{element.goalsFor}</p>
                                <p>{element.goalsAgainst}</p>
                                <p>{element.points}</p>
                            </div>
                        </div>
                    </div>

                )
            }
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .championship-title {
        color: #347ab8;
    }
`
 
export default Championship;