import styled from 'styled-components';

import championshipLogo from '../assets/championship-logo.png';
import premierLeagueLogo from '../assets/premier-league-logo.png';
import europeanChampionshipLogo from '../assets/european-championship-logo.png';
import ligue1Logo from '../assets/ligue1-logo.png';
import bundesligaLogo from '../assets/bundesliga-logo.png';
import eredivisieLogo from '../assets/eredivisie-logo.png';
import primeiraLigaLogo from '../assets/primeira-liga-logo.png';
import primeraDivisionLogo from '../assets/primera-division-logo.png';


const AllCompetitions = () => {
	return (
		<Wrapper className="competitions">
				<h4 className="competitions-title">
					<strong>All Competitions</strong>
				</h4>
				<div className="competition-list">

					<div className="competition-list-1">
						<div className="competition-item championship">
							<div className="competition-image">
								<img src={championshipLogo} alt="Championship Logo" />
							</div>
							<div className="competition-text">
								<h4>
									Championship
								</h4>
								<h6>
									England
								</h6>
							</div>
						</div>
						<div className="competition-item premier-league">
							<div className="competition-image">
								<img src={premierLeagueLogo} alt="Premier League Logo" />
							</div>
							<div className="competition-text">
								<h4>
									Premier League
								</h4>
								<h6>
									England
								</h6>
							</div>
						</div>
					</div>

					<div className="competition-list-2">
						<div className="competition-item champions-league">
							<div className="competition-image">
								<img src="https://upload.wikimedia.org/wikipedia/en/b/bf/UEFA_Champions_League_logo_2.svg" alt="Champions League Logo" />
							</div>
							<div className="competition-text">
								<h4>
									UEFA Champions League
								</h4>
								<h6>
									Europe
								</h6>
							</div>
						</div>
						<div className="competition-item european-championship">
							<div className="competition-image">
								<img src={europeanChampionshipLogo} alt="European Championship Logo" />
							</div>
							<div className="competition-text">
								<h4>
									European Championship
								</h4>
								<h6>
									Europe
								</h6>
							</div>
						</div>
					</div>

					<div className="competition-list-3">
						<div className="competition-item ligue-1">
							<div className="competition-image">
								<img src={ligue1Logo} alt="Ligue 1 Logo" />
							</div>
							<div className="competition-text">
								<h4>
									Ligue 1
								</h4>
								<h6>
									France
								</h6>
							</div>
						</div>
					
						<div className="competition-item premier-league">
							<div className="competition-image">
								<img src={bundesligaLogo} alt="Bundesliga Logo" />
							</div>
							<div className="competition-text">
								<h4>
									Bundesliga
								</h4>
								<h6>
									Germany
								</h6>
							</div>
						</div>
					</div>

					<div className="competition-list-4">
						<div className="competition-item serie-a">
							<div className="competition-image">
								<img src="https://crests.football-data.org/SA.svg" alt="Serie A Logo" />
							</div>
							<div className="competition-text">
								<h4>
									Serie A
								</h4>
								<h6>
									Italy
								</h6>
							</div>
						</div>
						<div className="competition-item eredivisie">
							<div className="competition-image">
								<img src={eredivisieLogo} alt="Eredivisie Logo" />
							</div>
							<div className="competition-text">
								<h4>
									Eredivisie
								</h4>
								<h6>
									Netherlands
								</h6>
							</div>
						</div>
					</div>

					<div className="competition-list-5">
						<div className="competition-item primeira-liga">
							<div className="competition-image">
								<img src={primeiraLigaLogo} alt="Primeira Liga Logo" />
							</div>
							<div className="competition-text">
								<h4>
									Primeira Liga
								</h4>
								<h6>
									Portugal
								</h6>
							</div>
						</div>
						<div className="competition-item primera-division">
							<div className="competition-image">
								<img src={primeraDivisionLogo} alt="Primera Division Logo" />
							</div>
							<div className="competition-text">
								<h4>
									Primera Division
								</h4>
								<h6>
									Spain
								</h6>
							</div>
						</div>
					</div>
				</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`

	.competitions-title {
		font-family: 'Montserrat', sans-serif;
		text-align: left;
		font-size: 1.5rem;
		line-height: 1.2;
		padding: 25px;
		padding-left: 21.2px;
	}

	.competition-list {
		margin-top: -50px;
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

		.competition-image img {
			max-height: 93px;
			max-width: 70px;
		}
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
			.competition-list-1,
      .competition-list-2,
      .competition-list-3,
      .competition-list-4,
      .competition-list-5 {
				display: flex;
				justify-content: space-around;

        div {
          width: 45%;
          text-align: left;
          display: flex;
          justify-content: flex-start;

          .competition-text {
            width: 100%;
          }
        }
			}
		}
	}
`
 
export default AllCompetitions;