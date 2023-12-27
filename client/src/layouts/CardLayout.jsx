import PropTypes from "prop-types";
import PlayOnce from "../components/Animations";
const CardLayout = ({ header, title, text, component, icon }) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h5 className="card-title m-0">{header}</h5>
        </div>
        <div className="card-body">
          <div className="card-title">
            <h2>{title}</h2>
          </div>

          <div className="card-text">
            <div className="row">
              {icon ? (
                <>
                  <div
                    className="col col-lg-3"
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    <PlayOnce ICON={icon} />
                  </div>
                  <div className="col">{text || component}</div>
                </>
              ) : (
                <>{text || component}</>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardLayout.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  component: PropTypes.element,
  icon: PropTypes.object,
};

export default CardLayout;
