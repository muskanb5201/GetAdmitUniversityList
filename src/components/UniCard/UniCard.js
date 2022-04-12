import "./UniCard.css";

const UniCard = ({ universities }) => {
  return (
    <div className="universities-container">
      {universities.map((uni) => {
        return (
          <div className="card-container">
            <div className="section left">
              <img className="img" src={uni.img} />
            </div>

            <div className="section middle">
              <h2 onClick={() => window.open(uni.link)} className="heading">
                {uni.name}
              </h2>

              <p className="location">{uni.location}</p>
              <h4>#{uni.rank} in Best Engineering Schools</h4>
            </div>

            <div className="section" id="right">
              <div className="fees-section">
                <p className="fees"> Tution fees:</p>
                <h3 className="heading">${uni.tutionFees}</h3>
              </div>
              <div className="fees-section">
                <p className="fees">Application fees:</p>
                <h4 className="heading">{uni.applicationFee}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UniCard;
