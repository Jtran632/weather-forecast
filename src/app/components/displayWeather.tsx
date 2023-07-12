/* eslint-disable react/jsx-key */
"use client";
import {
  WiDaySunny,
  WiNightPartlyCloudy,
  WiDaySunnyOvercast,
  WiFog,
  WiSprinkle,
  WiRain,
  WiSnow,
  WiShowers,
  WiNightSnow,
  WiThunderstorm,
  WiDaySleetStorm,
  WiStrongWind,
} from "weather-icons-react";
const weathercode: any = {
  0: ["Clear Sky", <WiDaySunny size={80} color="white" />],
  1: ["Mainly clear", <WiDaySunny size={80} color="white" />],
  2: ["Partly cloudy", <WiNightPartlyCloudy size={80} color="white" />],
  3: ["Overcast", <WiDaySunnyOvercast size={80} color="white" />],
  45: ["Fog", <WiFog size={80} color="white" />],
  48: ["Depositing rime fog", <WiFog size={80} color="white" />],
  51: ["Drizzle: Light", <WiSprinkle size={80} color="white" />],
  53: ["Drizzle: Moderate", <WiSprinkle size={80} color="white" />],
  55: ["Drizzle: Dense intensity", <WiSprinkle size={80} color="white" />],
  56: ["Freezing Drizzle: Light", <WiSprinkle size={80} color="white" />],
  57: [
    "Freezing Drizzle: Dense intensity",
    <WiSprinkle size={80} color="white" />,
  ],
  61: ["Rain: Slight", <WiRain size={80} color="white" />],
  62: ["Rain: Moderate", <WiRain size={80} color="white" />],
  63: ["Rain: Heavy intensity", <WiRain size={80} color="white" />],
  71: ["Snow fall: Slight", <WiSnow size={80} color="white" />],
  73: ["Snow fall: Moderate", <WiSnow size={80} kcolor="white" />],
  75: ["Snow fall: Heavy intensity", <WiSnow size={80} color="white" />],
  77: ["Snow grains", <WiSnow size={80} color="white" />],
  80: ["Rain showers: Slight", <WiShowers size={80} color="white" />],
  81: ["Rain showers: Moderate", <WiShowers size={80} color="white" />],
  82: ["Rain showers: Violent", <WiShowers size={80} color="white" />],
  85: ["Snow showers Slight", <WiNightSnow size={80} color="white" />],
  86: ["Snow showers Heavy", <WiNightSnow size={80} color="white" />],
  95: [
    "Thunderstorm: Slight or moderate",
    <WiThunderstorm size={80} color="white" />,
  ],
  96: [
    "Thunderstorm with slight hail",
    <WiDaySleetStorm size={80} color="white" />,
  ],
  97: [
    "Thunderstorm with heavy hail",
    <WiDaySleetStorm size={80} color="white" />,
  ],
};

export default function DisplayWeather({ data }: any) {
  return (
    <div className="border-2 p-10">
      <div>
        <div>Latitude: {data.latitude}</div>
        <div>Longitude: {data.longitude}</div>
      </div>
      <div>Timezone: {data.timezone}</div>
      <div className="text-xs underline my-2">
        <a href="https://open-meteo.com/">Weather data by Open-Meteo.com</a>
      </div>
      {data.daily.weathercode.map((i: number, index: number) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center p-2 mb-2 gap-10 border rounded-xl "
          >
            <div className="flex flex-col items-start w-full">
              <div className="flex gap-1 items-center">
                <div>
                  {data.daily.temperature_2m_max[index]}
                  {data.daily_units.temperature_2m_max}
                </div>
                <div> / </div>
                <div className="font-extralight text-xs">
                  {data.daily.temperature_2m_min[index]}
                  {data.daily_units.temperature_2m_max}
                </div>
              </div>
              <div className="text-xs">
                <div>{weathercode[i][0]}</div>
                <div>
                  Precipitation:{" "}
                  {data.daily.precipitation_probability_mean[index]}%
                </div>
                <div>{data.daily.time[index]}</div>
              </div>
            </div>
            <div className="text-xs">
              <div>{weathercode[i][1]}</div>
              <div className="flex gap-2 items-center">
                <WiStrongWind size={25} color="white" />
                <div>{data.daily.windspeed_10m_mean[index]} mph</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
