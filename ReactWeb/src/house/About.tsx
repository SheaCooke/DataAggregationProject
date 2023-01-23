import Bids from "../bids/Bids";
import { Link, useParams } from "react-router-dom";
import { useDeleteHouse, useFetchHouse } from "../hooks/HouseHooks";
import ApiStatus from "../apiStatus";
import { currencyFormatter } from "../config";
import defaultImage from "./defaultPhoto";
import { useFetchBids } from "../hooks/BidHooks";

const About = () => {


    return (
      <div className="row">
      <h1>About section</h1>
      </div>
    );
  };
  
  export default About;