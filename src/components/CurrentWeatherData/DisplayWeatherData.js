import React, { useState, useEffect } from "react";
import { BsEye, BsWater, BsThermometer, BsWind, BsStarFill, BsStar } from "react-icons/bs";
import {
  WiCelsius,
  WiSunrise,
  WiSunset,
  WiWindDeg,
  WiBarometer,
  WiDegrees,
} from "react-icons/wi";
import { TbWorldLatitude, TbWorldLongitude } from "react-icons/tb";
import {
  getFavouriteCitiesApi,
  createFavouriteCityApi,
} from "../../util/ApiUtil";

const DisplayWeatherData = ({ apiResponse, token }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [favouriteCities, setFavouriteCities] = useState([]);

  const cityId = apiResponse.city.id;

  // Fetch favourite cities
  const fetchFavouriteCities = async () => {
    const response = await getFavouriteCitiesApi(token);
    if (response.status === 1) {
      setFavouriteCities(response.payLoad);
      checkIfCityIsFavourite(response.payLoad);
    }
  };

  // Check if the current city is a favourite
  const checkIfCityIsFavourite = (cities) => {
    const found = cities.some((city) => city.cityId === cityId);
    setIsFavourite(found);
  };

  // Add city to favourites
  const addCityToFavourites = async () => {
    const response = await createFavouriteCityApi(token, cityId);
    if (response.status === 1) {
      setIsFavourite(true);
      fetchFavouriteCities();
    }
  };

  useEffect(() => {
    fetchFavouriteCities();
  }, []);

  let iconCode = apiResponse.icon;

  let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

  return (
    <div>
      {/* card top */}
      <div className="flex items-center gap-x-5">
        {/* icon */}
        <div className="text-[87px]">
          <img src={iconUrl} />
        </div>
        <div>
          {/* city name, country code */}
          <div className="text-2xl font-semibold">
            {apiResponse.city.name}, {apiResponse.city.country.countryCode}
          </div>
          {/* date */}
          <div>Last Updated: {apiResponse.updatedOn}</div>
        </div>
        {/* Favourite Star */}
        <div>
          <button onClick={addCityToFavourites} disabled={isFavourite}>
            {isFavourite ? (
              <BsStarFill className="text-yellow-500 text-3xl" />
            ) : (
              <BsStar className="text-gray-500 text-3xl hover:text-yellow-500" />
            )}
          </button>
        </div>
      </div>
      {/* card body */}
      <div className="my-20">
        <div className="flex justify-center items-center">
          {/* temp */}
          <div className="text-[144px] leading-none font-light">
            {parseInt(apiResponse.temp)}
          </div>
          {/* celsius icon */}
          <div className="text-6xl">
            <WiCelsius />
          </div>
        </div>
        {/* weather description */}
        <div className="capitalize text-center">
          {apiResponse.description}
          <br />
          {/* weather cloudiness */}
          Cloudiness {apiResponse.cloudsAll} %
        </div>
      </div>
      {/* card bottom */}
      <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            {/* latitude icon */}
            <div className="text-[20px]">
              <TbWorldLatitude />
            </div>
            <div>
              {/* Latitude */}
              Latitude{" "}
              <span className="ml-2">{apiResponse.city.latitude} </span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            {/* longitude icon */}
            <div className="text-[20px]">
              <TbWorldLongitude />
            </div>
            <div className="flex">
              {/* Longitude */}
              Longitude{" "}
              <span className="ml-2">{apiResponse.city.longitude}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            {/* Visibility icon */}
            <div className="text-[20px]">
              <BsEye />
            </div>
            <div>
              {/* Visibility */}
              Visibility{" "}
              <span className="ml-2">{apiResponse.visibility / 1000} km</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            {/* icon */}
            <div className="text-[20px]">
              <BsThermometer />
            </div>
            <div className="flex">
              {/* Feels Like */}
              Feels like
              <div className="flex ml-2 text-3xl">
                {parseInt(apiResponse.feelsLike)}
                <WiCelsius />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            {/* icon */}
            <div className="text-[20px]">
              <BsWater />
            </div>
            <div>
              {/* Humidity */}
              Humidity
              <span className="ml-2">{apiResponse.humidity} %</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            {/* icon */}
            <div className="text-[20px]">
              <BsWind />
            </div>
            <div>
              {/* Wind Speed*/}
              Wind Speed{" "}
              <span className="ml-2">{apiResponse.windSpeed} m/s</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            {/* icon */}
            <div className="text-[20px]">
              <BsThermometer />
            </div>
            <div className="flex">
              {/* Min Temp */}
              Min Temp
              <div className="flex ml-2 text-3xl">
                {parseInt(apiResponse.tempMin)}
                <WiCelsius />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            {/* icon */}
            <div className="text-[20px]">
              <BsThermometer />
            </div>
            <div className="flex">
              {/* Max Temp */}
              Max Temp
              <div className="flex ml-2 text-3xl">
                {parseInt(apiResponse.tempMax)}
                <WiCelsius />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            {/* icon */}
            <div className="text-[20px]">
              <WiSunrise />
            </div>
            <div className="flex">
              {/* Sunrise*/}
              Sunrise
              <div className="flex ml-2 text-1xl">
                {new Date(apiResponse.sunrise).toLocaleTimeString()}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            {/* icon */}
            <div className="text-[20px]">
              <WiSunset />
            </div>
            <div className="flex">
              {/* Sunset */}
              Sunset
              <div className="flex ml-2 text-1xl">
                {new Date(apiResponse.sunset).toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            {/* icon */}
            <div className="text-[20px]">
              <WiWindDeg />
            </div>
            <div className="flex">
              {/* Wind direction */}
              Wind Direction
              <div className="flex ml-2 text-1xl">
                {apiResponse.windDirection}
                <div className="text-3xl">
                  <WiDegrees />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            {/* icon */}
            <div className="text-[20px]">
              <WiBarometer />
            </div>
            <div className="flex">
              {/* Pressure */}
              Pressure
              <div className="flex ml-2 text-1xl">
                {apiResponse.pressure} hPa
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayWeatherData;
