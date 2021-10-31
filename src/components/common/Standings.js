import styled from 'styled-components';

const Standings = () => {
    return (
        <Wrapper className="standings-container">
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

    // .standings-header.standings-row {
    //     font-weight: 600;
    // }

    // .standings-row {
    //     display: flex;
    //     justify-content: space-between;
    //     margin-right: 20px;
    //     margin-left: 20px;
    //     padding-top: 5px;
    //     padding-bottom: 5px;
    //     border-bottom: 0.5px solid #dedede;

    //     .standings-item-team,
    //     .standings-item-details {
    //         color: #000
    //     }
  
    //     .standings-header-details,
    //     .standings-item-details {
    //         display: flex;
    //         justify-content: space-around;

    //         p {
    //             margin-right: 20px;
    //             :last-child {
    //                 margin-right: 0;
    //             }
    //         }
    //     }
    // }    
`
 
export default Standings;