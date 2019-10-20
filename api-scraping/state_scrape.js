var myArgs = process.argv.slice(2);
var state = myArgs[0]
const axios = require('axios');

axios.get('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles='+state)
.then(response => {
  console.log(response['data']['query']['pages'])
  })

