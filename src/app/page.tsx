import DisplayWeather from "./components/displayWeather";
async function getWeather() {
  const lat: string = "33.8121";
  const long: string = "117.9190";
  const temp: string = "fahrenheit";
  const tz: string = "America/Los_Angeles";
  const days: string = "7";
  const area: string = `latitude=${lat}&longitude=${long}&temperature_unit=${temp}&daily=temperature_2m_min&daily=temperature_2m_max&timezone=${tz}&forecast_days=${days}`;
  const wind: string = "&daily=windspeed_10m_mean&daily=winddirection_10m_dominant";
  const url: string = `https://api.open-meteo.com/v1/forecast?${area}${wind}&daily=precipitation_probability_mean&daily=weathercode&hourly=relativehumidity_2m`;
  const a: Response = await fetch(url);
  return a.json();
}
export default async function Home() {
  let data = await getWeather();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white">
      <div>
        <DisplayWeather data={data} />
      </div>
    </main>
  );
}
