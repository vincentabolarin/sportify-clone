import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import StandingsMatches from './common/StandingsMatches.js';
import Standings from './common/Standings.js';
import Matches from './common/Matches.js';

const Championship = () => {

    const corsUrl = "https://cors-anywhere.herokuapp.com/";
    const apiStandingsUrl = "https://api.football-data.org/v2/competitions/2016/standings?standingType=TOTAL";
    const apiMatchesUrl = "https://api.football-data.org/v2/competitions/2016/matches?season=2021&matchday=15";

    const standingsUrl = `${corsUrl}${apiStandingsUrl}`;
    const matchesUrl = `${corsUrl}${apiMatchesUrl}`;


    const standingsConfig = {
        standingsUrl,
        headers: {
        'X-Auth-Token': process.env.REACT_APP_API_TOKEN,
        },
    }

    const matchesConfig = {
        matchesUrl,
        headers: {
        'X-Auth-Token': process.env.REACT_APP_API_TOKEN,
        },
    }

    const [standings, setStandings] = useState(null);
    const [matches, setMatches] = useState(null);

    useEffect(() => {
        axios.all([axios(standingsConfig), axios(matchesConfig)])
        .then(axios.spread((...responses) => {
            const standingsResponse = responses[0];
            const matchesResponse = responses[1];
            setStandings(standingsResponse.data);
            setMatches(matchesResponse.data);
        })).catch(error => console.log(error));
    });

    // useEffect(() => {
    //     axios(matchesConfig)
    //     .then(response => {
    //         setMatches(response.data);
    //     }).catch(error => console.log(error))
    // });

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

            {
                matches && matches.matches[0].map(matches =>
                    <div>
                        <h4 className="matches-header">Matchweek {matches.season.currentMatchday}</h4>
                        <div className="matches-item">
                            <div className="matches-details">
                            <div className="matches-team">
                                <div className="matches-team-details">
                                {/* <img className="matches-image-thumbnail" src={} alt="" /> */}
                                <h4 className="matches-team-name">
                                    {matches.homeTeam.name}
                                </h4>
                                </div>
                                <div className="matches-team-score">
                                <strong>{matches.score.fullTime.homeTeam}</strong>
                                </div>
                            </div>
                            <div className="matches-team">
                                <div className="matches-team-details">
                                {/* <img className="matches-image-thumbnail" src={} alt="" /> */}
                                <h4 className="matches-team-name">
                                    {matches.awayTeam.name}
                                </h4>
                                </div>
                                <div className="matches-team-score">
                                <strong>{matches.score.fullTime.awayTeam}</strong>
                                </div>
                            </div>
                            </div>
                            <div className="matches-dates">
                            <h6 className="matches-ft-or-ht">
                                FT
                            </h6>
                            <p className="matches-date">
                                10/29
                            </p>
                            <p className="matches-time">
                                18:45
                            </p>
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