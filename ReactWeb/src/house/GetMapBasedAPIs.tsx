import Bids from "../bids/Bids";
import { Link, useParams } from "react-router-dom";
import { useDeleteHouse, useFetchHouse } from "../hooks/HouseHooks";
import ApiStatus from "../apiStatus";
import { currencyFormatter } from "../config";
import defaultImage from "./defaultPhoto";
import { useFetchBids } from "../hooks/BidHooks";

const MapBasedAPIs = () => {


  return (
    <div className="row">
    <h1>Maps here</h1>
    </div>
  );
};

export default MapBasedAPIs;
