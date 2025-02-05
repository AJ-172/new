import React, { useState, useEffect } from "react";
import { getHistoryWeatherDataApi } from "../../util/ApiUtil";
import DisplayWeatherData from "../CurrentWeatherData/DisplayWeatherData";
import NoHistoryWeatherPresent from "./NoHistoryWeatherPresent";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import { toast } from "react-hot-toast";
import TokenExpirationPage from "../TokenExpirationPage/TokenExpirationPage";

const HistoryWeatherData = ({ currentUser }) => {
  const [results, setResults] = useState([]);
  const [tokenExpired, setTokenExpired] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyResults();
  }, []);

  const getMyResults = async () => {
    setLoading(true);

    const apiResponse = await getHistoryWeatherDataApi(currentUser.token);

    if (apiResponse.status === 1 && apiResponse.payLoad.length > 0) {
      setResults(apiResponse.payLoad);
      setData(true);
      setLoading(false);
    } else if (apiResponse.status === 1 && apiResponse.payLoad.length === 0) {
      setData(false);
      setLoading(false);
    } else if (
      apiResponse.status === 0 &&
      apiResponse.payLoad === "Token has Expired"
    ) {
      setTokenExpired(true);
      setLoading(false);
    } else {
      toast(apiResponse.payLoad);
    }
  };

  if (tokenExpired) {
    return <TokenExpirationPage />;
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  if (data === false) {
    return (
      <div className="flex items-center justify-center">
        <NoHistoryWeatherPresent />;
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {results.map((item, index) => (
          <div
            key={index}
            className="bg-black/20 text-purple-900 backdrop-blur-[80px] py-12 px-6 rounded-lg overflow-hidden"
          >
            <DisplayWeatherData apiResponse={item} />
          </div>
        ))}
      </div>
    );
  }
};

export default HistoryWeatherData;
