import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import dotenv from 'dotenv';

import championshipLogo from '../assets/championship-logo.png';
// import premierLeagueLogo from '../assets/premier-league-logo.png';
// import europeanChampionshipLogo from '../assets/european-championship-logo.png';
// import ligue1Logo from '../assets/ligue1-logo.png';
// import bundesligaLogo from '../assets/bundesliga-logo.png';
// import eredivisieLogo from '../assets/eredivisie-logo.png';
// import primeiraLigaLogo from '../assets/primeira-liga-logo.png';
// import primeraDivisionLogo from '../assets/primera-division-logo.png';


const AllCompetitions = () => {

  const corsUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = "https://api.football-data.org/v2/competitions?areas=2077&plan=TIER_ONE";

  const url = `${corsUrl}${apiUrl}`;

  const config = {
    url,
    headers: {
      'X-Auth-Token': process.env.REACT_APP_API_TOKEN,
    },
  }
  const [comp, setComp] = useState(null);

  useEffect(() => {
    // console.log(process.env.REACT_APP_API_TOKEN, "abcd")
      axios(config)
      .then(response => {
        // console.log(response.data)
        setComp(response.data);
      }).catch(error => console.log(error))
  });


    return (
      <Wrapper className="competitions">
          <h4 className="competitions-title">
            <strong>All Competitions</strong>
          </h4>

          {
            comp && comp.competitions.map(element => (
              <div className="competition-list">
                {/* <div className="competition-list-1"> */}
                  <div className="competition-item">
                    <div className="competition-image">
                      <img className="competition-image-thumbnail" src={element.emblemUrl || championshipLogo} alt="" />
                    </div>
                    <div className="competition-text">
                      <h4>
                        {element.name}
                      </h4>
                      <h6>
                        {element.area.name}
                      </h6>
                    </div>
                  </div>
                {/* </div> */}
              </div>
            ))
          }
      </Wrapper>
          
    )
}

const Wrapper = styled.div`

  .competition-list {
    display: flex;
    flex-direction: column;
  }

	.competition-item {
		margin-bottom: 1.5rem;
		display: flex;
		align-items: center;
		width: 93%;
		height: 142px;
		padding: 12px 25px;
		box-sizing: border-box;
		margin-right: auto;
		margin-left: auto;
		margin-top: 0px;
		font-family: 'Poppins', sans-serif;
		word-wrap: break-word;
		box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

		.competition-text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			padding: 0px 10px;
			h4 {
				font-size: 1.25rem;
				margin: 0px;
				margin-bottom: .25rem;
				color: #4d4d4d;
				font-weight: bold;
				line-height: 1.2;
			}
			h6 {
				margin: 0px;
				font-size: 80%;
				font-weight: normal;
				line-height: 1.2;
			}
		}

    :hover {
      box-shadow: 0 3px 20px rgb(0 0 0 / 0.2);
    }
	}

	@media screen and (min-width: 576px) {
			.competition-list
       {
          flex-direction: row;
          align-items: flex-start;
        
        .competition-item {
          max-width: 45%;
          text-align: left;

          .competition-text {
            width: 100%;
          }
        }
			}
		}
	}
`
 
export default AllCompetitions;