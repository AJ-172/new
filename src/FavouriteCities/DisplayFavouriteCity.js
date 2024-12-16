import React from "react";
import { deleteFavouriteCityApi } from '../util/ApiUtil';

const DisplayFavouriteCity = ({
  cityId,
  cityName,
  latitude,
  longitude,
  lastUpdated,
  token,
  loadOnDelete = false,
  onDeleteSuccess,
}) => {
  // Handle delete action
  const handleDelete = async () => {
    const response = await deleteFavouriteCityApi(token, cityId);
    if (response.status === 1) {
      console.log("City deleted successfully");
      if (onDeleteSuccess) onDeleteSuccess(cityId);
    } else {
      console.log("Failed to delete city:", response.payLoad);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between p-5 m-4 bg-white shadow-lg rounded-lg w-72">
      <h3 className="text-xl font-bold text-indigo-900">{cityName}</h3>
      <div className="mt-4 text-gray-700">
        <div className="flex items-center">
          <span className="material-icons mr-2 text-indigo-500">location_on</span>
          <span>Latitude: {latitude}</span>
        </div>
        <div className="flex items-center">
          <span className="material-icons mr-2 text-indigo-500">explore</span>
          <span>Longitude: {longitude}</span>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500">Last Updated: {lastUpdated}</p>

      {loadOnDelete && (
        <button
          className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700"
          onClick={handleDelete}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default DisplayFavouriteCity;
