import propublicaImage from '../assets/propublica.jpg'
import sunlightImage from '../assets/sunlight.jpg'
import googleImage from '../assets/google.png'

export default [
    {
      index: 0,
      name: "ProPublica",
      purpose: "Used to get information about members of Congress and issues being discussed.",
      url: "https://projects.propublica.org/api-docs/congress-api/",
      image: propublicaImage
    },
    {
      index: 1,
      name: "Sunlight Foundation",
      purpose: "Used to get information about states and who represent them in Congress.",
      url: "https://sunlightlabs.github.io/congress/#using-the-api",
      image: sunlightImage
    },
    {
        index: 2,
        name: "Google Civic Information",
        purpose: "Used to get more information about issues and Congress Members.",
        url: "https://developers.google.com/civic-information/docs/v2/",
        image: googleImage
      }
];