import PropTypes from "prop-types";
import PlayOnce from "../components/Animations.jsx";

const CardLayout = ({ header, title, body, component, icon, cardTools }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">
            <i className="ri-dashboard-line"></i> {header}
          </h3>
          {cardTools}
        </div>
        <div className="card-body">
          <div
            className="card-title d-flex justify-content-between"
            style={{
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PlayOnce ICON={icon} />
            <h1>{title}</h1>
          </div>
          <div className="card-text">
            {body}
            {component}
          </div>
        </div>
      </div>
    </>
  );
};

CardLayout.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  component: PropTypes.object,
  icon: PropTypes.object.isRequired,
  cardTools: PropTypes.object,
};

export default CardLayout;
