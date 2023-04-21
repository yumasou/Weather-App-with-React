import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
const Temp = (props) => {
  return (
    <div className="col-6 col-lg-2 mx-auto">
      <div className="card card-body my-5 shadow-lg py-4 bg-secondary rounded opacity-75">
        <h1 className="card-title"> {props.temp} °C </h1>
      </div>
      {props.status === "Clear" ? (
        <FontAwesomeIcon
          icon={faSun}
          fade
          size="2xl"
         
        />
      ) : (
        <FontAwesomeIcon
          icon={faCloud}
          fade
          size="2xl"
          
        />
      )}

      <p className="h4 mt-4 ">{props.status}</p>
    </div>
  );
};
export default Temp;
