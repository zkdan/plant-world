const plantWorld ={};

plantWorld.getPlants = ( ) =>{
  console.log('get');
  return $.ajax({
    url: '/api/v1/plants',
    dataType: 'json'
  })
  .then(res => console.log(res));
};

plantWorld.showPlants = (plants) =>{
  
  console.log(plants);
  plants.forEach(plant => $('.garden').append(`<h2>${plant.commonName}</h2>`));
  
};

plantWorld.init =() =>{
  plantWorld.showPlants(plantWorld.getPlants());
};

$(plantWorld.init);