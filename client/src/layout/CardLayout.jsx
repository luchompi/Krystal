
import "../assets/css/cards.css";
import { PropTypes } from "prop-types";
import PlayOnce from "../components/global/Animations.jsx";
const CardLayout = ({
  cardIcon,
  cardHeader,
  cardTitle,
  cardText,
  cardComponent,
}) => {
  return (
    <div className="card">
      <div className="card-header">{cardHeader}</div>
      <div className="card-body">
        <div className="card-text">
          <div className="row">
            <div className="col col-lg-3">
              <PlayOnce ICON={cardIcon} />
            </div>
            <div
              className="col justify-content-md-center"
              style={{ textAlign: "center", alignSelf: "center" }}
            >
              <h4 className="card-title">{cardTitle}</h4>
              {cardText || cardComponent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardLayout.propTypes = {
  cardIcon: PropTypes.object,
  cardHeader: PropTypes.string,
  cardTitle: PropTypes.string,
  cardText: PropTypes.string,
  cardComponent: PropTypes.object,
};

export default CardLayout;
