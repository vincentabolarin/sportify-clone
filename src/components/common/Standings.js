import styled from 'styled-components';

const Standings = () => {
    return (
        <Wrapper className="standings-container competitions">
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

            <div className="standings-item standings-row faint-text">
                <div className="standings-item-team">
                    <p>Team</p>
                </div>
                <div className="standings-item-details">
                    <p>MP</p>
                    <p>W</p>
                    <p>D</p>
                    <p>L</p>
                    <p>GF</p>
                    <p>GA</p>
                    <p>Pts</p>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 20px;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`
 
export default Standings;