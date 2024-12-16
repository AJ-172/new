import React, { useState, useEffect } from "react";
import { getFavouriteCitiesApi } from '../util/ApiUtil';
import NoFavouriteCityPresent from "./NoFavouriteCityPresent";
import TokenExpirationPage from '../components/TokenExpirationPage/TokenExpirationPage'
import DisplayFavouriteCity from "./DisplayFavouriteCity";

const FavouriteCities = ({ token }) => {
  const [loading, setLoading] = useState(true);
  const [favouriteCities, setFavouriteCities] = useState([]);
  const [tokenExpired, setTokenExpired] = useState(false);

  // Fetch favourite cities
  const fetchFavouriteCities = async () => {
    setLoading(true);
    const response = await getFavouriteCitiesApi(token);

    if (response.status === 1) {
      setFavouriteCities(response.payLoad); // Set cities data
    } else if (response.payLoad.toLowerCase().includes("expired")) {
      setTokenExpired(true); // Handle token expiration
    } else {
      setFavouriteCities([]); // No data or error
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchFavouriteCities();
  }, []);

  if (tokenExpired) {
    return <TokenExpirationPage />;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-indigo-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-5">
      {favouriteCities.length === 0 ? (
        <NoFavouriteCityPresent />
      ) : (
        <div className="flex flex-wrap justify-center">
          {favouriteCities.map((city) => (
            <DisplayFavouriteCity
              key={city.cityId}
              cityId={city.cityId}
              cityName={city.cityName}
              latitude={city.latitude}
              longitude={city.longitude}
              lastUpdated={city.lastUpdated}
              token={token}
              loadOnDelete={true}
              onDeleteSuccess={fetchFavouriteCities}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouriteCities;
