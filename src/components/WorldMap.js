import React, { useState, useEffect } from "react";
import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";

const scale = 4;
const cities = [
  {
    name: "South Italian",
    coordinates: [15.249, 40.9798],
    population: scale * 7500000
  },
  {
    name: "Sicilian",
    coordinates: [15.249, 40.9798],
    population: scale * 5000000
  },
  {
    name: "Low Saxon",
    coordinates: [10.3601, 53.4029],
    population: scale * 4800000
  },
  {
    name: "Belarusian",
    coordinates: [27.5756, 53.956],
    population: scale * 4000000
  },
  {
    name: "Lombard",
    coordinates: [9.3273, 45.7215],
    population: scale * 3500000
  },
  {
    name: "Romani",
    coordinates: [22.3681, 46.3165],
    population: scale * 3500000
  },
  {
    name: "Yiddish (Israel)",
    coordinates: [34.8333, 32.0833],
    population: scale * 3000000
  },
  {
    name: "Gondi",
    coordinates: [80.4418, 19.5804],
    population: scale * 2713790
  },
  {
    name: "Limburgian-Ripuarian",
    coordinates: [6.0864, 50.7781],
    population: scale * 2600000
  },
  {
    name: "Quechua of Southern Bolivia",
    coordinates: [-65.7641, -18.0675],
    population: scale * 2600000
  },
  {
    name: "Kumaoni",
    coordinates: [79.8486, 29.4778],
    population: scale * 2003783
  },
  {
    name: "Aymara",
    coordinates: [-68.302, -16.5835],
    population: scale * 2000000
  },
  {
    name: "Emilian-Romagnol",
    coordinates: [12.0739, 44.127],
    population: scale * 2000000
  },
  {
    name: "Piedmontese",
    coordinates: [7.8662, 45.2013],
    population: scale * 2000000
  },
  {
    name: "Venetan",
    coordinates: [12.1948, 45.4601],
    population: scale * 2000000
  },
  {
    name: "Zazaki",
    coordinates: [40.4846, 38.8824],
    population: scale * 2000000
  },
  {
    name: "Kurux (India)",
    coordinates: [85.2758, 22.1467],
    population: scale * 1751489
  },
  {
    name: "Tamajeq",
    coordinates: [8.0859, 17.2352],
    population: scale * 1750000
  },
  {
    name: "Tulu",
    coordinates: [75.7067, 12.0178],
    population: scale * 1722768
  },
  {
    name: "Kangdi",
    coordinates: [1700000, 53.4029],
    population: scale * 4800000
  }
];

const projection = geoEqualEarth()
  .scale(160)
  .translate([800 / 2, 450 / 2]);

const WorldMap = () => {
  const [geographies, setGeographies] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/zimrick/react-svg-maps-tutorial/master/public/world-110m.json"
    ).then(response => {
      if (response.status !== 200) {
        console.log(`There was a problem: ${response.status}`);
        return;
      }
      response.json().then(worlddata => {
        setGeographies(
          feature(worlddata, worlddata.objects.countries).features
        );
      });
    });
  }, []);

  const handleCountryClick = countryIndex => {
    console.log("Clicked on country: ", geographies[countryIndex]);
  };

  const handleMarkerClick = i => {
    console.log("Marker: ", cities[i]);
  };

  return (
    <svg width={800} height={450} viewBox="0 0 800 450">
      <g className="countries">
        {geographies.map((d, i) => (
          <path
            key={`path-${i}`}
            d={geoPath().projection(projection)(d)}
            className="country"
            fill={`rgba(38,50,56)`}
            stroke="#FFFFFF"
            strokeWidth={0.5}
            onClick={() => handleCountryClick(i)}
          />
        ))}
      </g>
      <g className="markers">
        {cities.map((city, i) => (
          <circle
            key={`marker-${i}`}
            cx={projection(city.coordinates)[0]}
            cy={projection(city.coordinates)[1]}
            r={city.population / 3000000}
            fill="#E91E63"
            stroke="#FFFFFF"
            className="marker"
            onClick={() => handleMarkerClick(i)}
          />
        ))}
      </g>
    </svg>
  );
};

export default WorldMap;
