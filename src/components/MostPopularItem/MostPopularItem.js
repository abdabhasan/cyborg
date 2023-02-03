import "./MostPopularItem.scss";
import { FaDownload, FaStar } from "react-icons/fa";

const MostPopularItem = (props) => {
  return (
    <>
      <div className="most-popular-item ">
        <div className="card">
          <div className="card-img">
            <img src={props.image} alt={props.image} />
          </div>
          <div className="card-content ">
            <ul className="list-unstyled ">
              <li className="card-title">{props.cardTitle}</li>
              <li className="card-category ">{props.cardCategory}</li>
            </ul>
            <ul className="list-unstyled ">
              <li className="rate">
                <span className="me-1" style={{ color: "#ffff00" }}>
                  <FaStar />
                </span>
                {props.rate}
              </li>
              <li className="download mt-2 ">
                <span className="me-1" style={{ color: "#ec6090" }}>
                  <FaDownload />
                </span>
                {props.download}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostPopularItem;
