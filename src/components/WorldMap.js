import React, { useState, useEffect } from "react"
import { geoEqualEarth, geoPath } from "d3-geo"
import { feature } from "topojson-client"

const cities = [
    // Long, lat
  { name: "South Italian",          coordinates: [15.249,40.9798],  population: 7500000 },
  { name: "Sicilian",               coordinates: [15.249,40.9798],  population: 5000000 },
  { name: "Low Saxon",              coordinates: [10.3601,53.4029],  population: 4800000 },
  { name: "Belarusian",             coordinates: [27.5756,53.956],  population: 4000000 },
  { name: "Lombard",                coordinates: [9.3273,45.7215],  population: 3500000 },
  { name: "Romani",                 coordinates: [22.3681,46.3165],  population: 3500000 },
  { name: "Yiddish (Israel)",       coordinates: [34.8333,32.0833],  population: 3000000 },
  { name: "Gondi",                  coordinates: [80.4418,19.5804],  population: 2713790 },
  { name: "Limburgian-Ripuarian",   coordinates: [6.0864,50.7781],  population: 2600000 },
  { name: "Low Saxon",          coordinates: [6.0864,50.7781],  population: 2600000 },
  { name: "Low Saxon",          coordinates: [10.3601,53.4029],  population: 4800000 },
  { name: "Low Saxon",          coordinates: [10.3601,53.4029],  population: 4800000 },
  { name: "Low Saxon",          coordinates: [10.3601,53.4029],  population: 4800000 },
  { name: "Low Saxon",          coordinates: [10.3601,53.4029],  population: 4800000 },
  { name: "Low Saxon",          coordinates: [10.3601,53.4029],  population: 4800000 },
  { name: "Low Saxon",          coordinates: [10.3601,53.4029],  population: 4800000 },
  { name: "Low Saxon",          coordinates: [10.3601,53.4029],  population: 4800000 },
  { name: "Low Saxon",          coordinates: [10.3601,53.4029],  population: 4800000 },
  { name: "Low Saxon",          coordinates: [10.3601,53.4029],  population: 4800000 },
  { name: "Low Saxon",          coordinates: [10.3601,53.4029],  population: 4800000 },
  { name: "Low Saxon",          coordinates: [10.3601,53.4029],  population: 4800000 },


]

const projection = geoEqualEarth()
  .scale(160)
  .translate([ 800 / 2, 450 / 2 ])

const WorldMap = () => {
  const [geographies, setGeographies] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/zimrick/react-svg-maps-tutorial/master/public/world-110m.json")
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(worlddata => {
          setGeographies(feature(worlddata, worlddata.objects.countries).features)
        })
      })
  }, [])

  const handleCountryClick = countryIndex => {
    console.log("Clicked on country: ", geographies[countryIndex])
  }

  const handleMarkerClick = i => {
    console.log("Marker: ", cities[i])
  }

  return (
    <svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
      <g className="countries">
        {
          geographies.map((d,i) => (
            <path
              key={ `path-${ i }` }
              d={ geoPath().projection(projection)(d) }
              className="country"
              fill={ `rgba(38,50,56)` }
              stroke="#FFFFFF"
              strokeWidth={ 0.5 }
              onClick={ () => handleCountryClick(i) }
            />
          ))
        }
      </g>
      <g className="markers">
        {
          cities.map((city, i) => (
            <circle
              key={ `marker-${i}` }
              cx={ projection(city.coordinates)[0] }
              cy={ projection(city.coordinates)[1] }
              r={ city.population / 3000000 }
              fill="#E91E63"
              stroke="#FFFFFF"
              className="marker"
              onClick={ () => handleMarkerClick(i) }
            />
          ))
        }
      </g>
    </svg>
  )
}

export default WorldMap