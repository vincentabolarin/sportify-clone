import styled from 'styled-components';

import championshipLogo from '../assets/championship-logo.png';
import premierLeagueLogo from '../assets/premier-league-logo.png';

const AllCompetitions = () => {
    return (
        <Wrapper className="competitions">
                <h4 className="competitions-title">
                    <strong>All Competitions</strong>
                </h4>
                <div className="competition-list">
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
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    top: -81.5px;
    background: white;
    color: #212529;
    width: 100%;
    // padding: 40px;
    // box-sizing: border-box;

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
    }
`
 
export default AllCompetitions;