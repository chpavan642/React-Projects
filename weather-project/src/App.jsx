import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (city.trim() === "") return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4cc21ed57b1f39f5419565b3a4a9673f&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="container">
    <div className="card">
      <h1>Weather App</h1>

      <div className="search-box">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <h3>{weather.main.temp} °C</h3>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  </div>
  );
}

export default App;
