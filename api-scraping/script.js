var myArgs = process.argv.slice(2);
var name = myArgs[0]
const axios = require('axios');

axios.get('http://pudding-cool.herokuapp.com/people/'+name+'/issues')
.then(response => {
  response.data.forEach( elem => {
  if (parseFloat(elem["selected_pct"]) / parseFloat(elem["all_pct"]) > 0.4) {
  console.log(elem['issue']);  
  }
  });
  })
