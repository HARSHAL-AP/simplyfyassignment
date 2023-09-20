
const cities = {
  Paris: ["Skopje"],
  Zurich: ["Amsterdam"],
  Prague: ["Zurich"],
  Barcelona: ["Berlin"],
  Kiev: ["Prague"],
  Skopje: ["Paris"],
  Amsterdam: ["Barcelona"],
  Berlin: ["Kiev", "Amsterdam"],
};



function findRoute(startCity, citiesToVisit) {
  let cityObject = {};
  
  
  for (let i = 0; i < city.length; i++) {
    cityObject[city[i]] = false;
  }


  let route = [];
  const stack = [];
  stack.push(startCity);

  while (stack.length > 0) {
    const currentCity = stack.pop();
    route.push(currentCity);
    citiesToVisit[currentCity] = true;

    const destinations = cities[currentCity];
    for (const destination of destinations) {
      if (!citiesToVisit[destination]) {
        stack.push(destination);
      }
    }
  }
  return route.join(" -> ")
}



let city = ["Amsterdam", "Kiev", "Zurich", "Prague", "Berlin", "Barcelona"];
let startCity="Kiev"
console.log(findRoute(startCity,city)) /// Kiev->Prague->Zurich->Amsterdam->Barcelona->Berlin    


