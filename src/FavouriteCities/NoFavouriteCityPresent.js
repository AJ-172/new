import React from "react";

const NoFavouriteCityPresent = () => {
  return (
    <div class="flex items-center justify-center min-h-screen p-5 min-w-screen">
      <div class="max-w-xl p-8 text-center text-indigo-900 bg-black/20 shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
        <h3 class="text-2xl font-bold">We're happy you're here. </h3>
        <div class="flex justify-center">
          <svg
            id="icone"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path
              d="M256,149a106,106,0,0,0-84.28,170.28A106,106,0,0,0,320.28,170.72,105.53,105.53,0,0,0,256,149Z"
              fill="#f7ad1e"
            />
            <line
              fill="none"
              stroke="#02005c"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="20"
              x1="235"
              x2="235"
              y1="43"
              y2="102"
            />
            <line
              fill="none"
              stroke="#02005c"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="20"
              x1="99.24"
              x2="140.95"
              y1="99.23"
              y2="140.95"
            />
            <line
              fill="none"
              stroke="#02005c"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="20"
              x1="43"
              x2="102"
              y1="235"
              y2="235"
            />
            <line
              fill="none"
              stroke="#02005c"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="20"
              x1="368"
              x2="426.99"
              y1="235"
              y2="235"
            />
            <line
              fill="none"
              stroke="#02005c"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="20"
              x1="329.04"
              x2="370.76"
              y1="140.95"
              y2="99.23"
            />
            <path
              d="M130.9,221.12A107.63,107.63,0,0,0,130,235a106,106,0,1,0,19.59-61.37"
              fill="none"
              stroke="#02005c"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="20"
            />
            <path
              d="M137.56,195.68c-.17.41-.34.81-.5,1.22"
              fill="none"
              stroke="#02005c"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="20"
            />
            <g data-name="cloud" id="cloud-2">
              <path
                d="M394,296a64.88,64.88,0,0,0-22.86,4.14A106,106,0,0,0,161,320q0,4.08.31,8.08A50,50,0,1,0,147,426H394a65,65,0,0,0,0-130Z"
                fill="#fff"
              />
              <path
                d="M391.14,320.16a105.35,105.35,0,0,0-7.34-23.34,65.11,65.11,0,0,0-12.66,3.33,105.64,105.64,0,0,0-19.9-44.46A106,106,0,0,0,181,340c0,2.72.11,5.42.31,8.09a50,50,0,0,0-58.22,71.82A49.72,49.72,0,0,0,147,426H394a65,65,0,0,0,54.86-99.86,65,65,0,0,0-57.72-6Z"
                fill="#b6c4cf"
              />
              <path
                d="M394,296a64.88,64.88,0,0,0-22.86,4.14A106,106,0,0,0,161,320q0,4.08.31,8.08A50,50,0,1,0,147,426H394a65,65,0,0,0,0-130Z"
                fill="none"
              />
            </g>
            <path
              d="M168.5,280.81c-.07.19-.15.37-.22.56s-.15.36-.22.55"
              fill="none"
              stroke="#02005c"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="20"
            />
            <path
              d="M458.87,364.41c1.86-33.07-22.91-63.16-55.72-67.76a65.39,65.39,0,0,0-32,3.5c-6.45-34.08-30-62.91-61.32-77.47C266,201,209,218,180.85,258.24"
              fill="none"
              stroke="#02005c"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="20"
            />
            <path
              d="M438.65,408.24a64.67,64.67,0,0,0,13.64-18.62"
              fill="none"
              stroke="#02005c"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="20"
            />
            <path
              d="M161.83,306.7a107.71,107.71,0,0,0-.53,21.39A50.48,50.48,0,0,0,102,354.22,48.32,48.32,0,0,0,102,398c3,5,6,11,11,15a83.42,83.42,0,0,0,12,8,120.9,120.9,0,0,0,18,5q129,1.5,258,0c5,0,11-3,15.92-4.16"
              fill="none"
              stroke="#02005c"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="20"
            />
          </svg>
        </div>

        <p className="text-2xl font-bold">
          It seems you haven't added any favourite cities yet. Feel free to add
          one and come back here!
        </p>
      </div>
    </div>
  );
};

export default NoFavouriteCityPresent;
