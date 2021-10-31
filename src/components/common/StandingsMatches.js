import styled from 'styled-components';
const StandingsMatches = () => {
    return (
        <Wrapper>
            <div className="standings-matches-container">
                <div className="standings-matches-text">
                    <p className="standings">
                        STANDINGS
                    </p>
                    <p className="matches">
                        MATCHES
                    </p>
                </div>
            </div>
        </Wrapper>      
    );
}

const Wrapper = styled.div`
    background-color: #dd7c00;
    color: #fff;
    margin: 15px;
    margin-top: -45px;
    height: 59px;

    .standings-matches-text {
        display: flex;
        justify-content: space-around;

        * {
            font-size: 20px;
            padding-bottom: 10px;
            :hover, :active {
            border-bottom: 3px solid #fff;
            cursor: pointer;
            }
        }
    }
`
 
export default StandingsMatches;