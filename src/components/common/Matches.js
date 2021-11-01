import styled from 'styled-components';

const Matches = () => {
  return (
      <Wrapper className="matches-container competitions">
          <h4 className="matches-header">Matchweek 15</h4>
          <div className="matches-item">
            <div className="matches-details">
              <div className="matches-team">
                <div className="matches-team-details">
                  {/* <img className="matches-image-thumbnail" src={} alt="" /> */}
                  <h4 className="matches-team-name">
                    Queens Park Rangers FC
                  </h4>
                </div>
                <div className="matches-team-score">
                  <strong>1</strong>
                </div>
              </div>
              <div className="matches-team">
                <div className="matches-team-details">
                  {/* <img className="matches-image-thumbnail" src={} alt="" /> */}
                  <h4 className="matches-team-name">
                    Queens Park Rangers FC
                  </h4>
                </div>
                <div className="matches-team-score">
                  <strong>1</strong>
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
      </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #fff;
`
 
export default Matches;