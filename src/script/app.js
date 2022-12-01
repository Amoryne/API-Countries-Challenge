/**
* ! TODO
- Input search
-Dark-light Mode
-Details country page
*/



let getRegion = document.getElementById('region-select');

let getInput = document.getElementById('search')
let getBtnSearch = document.getElementById('btn-search')
let inputValue = ""
 getRegion.addEventListener('change', (event) =>{
  event.target.value = getRegion.value;
     getCountries()
})
getBtnSearch.addEventListener('click',(e)=>{
  console.log(getInput.value)
   getCountries()
  getInput.value = ""
})

console.log(getInput[0])



async function getData() {
   if (getRegion.value === "" && getInput.value === ""){
    var url = 'https://restcountries.com/v3.1/all'
  }else{
    var url = 'https://restcountries.com/v3.1/region/' + getRegion.value;
  }
   if(getInput.value != ""){
    var url = 'https://restcountries.com/v3.1/name/' + getInput.value
  }
 
 
 
  try{
      let response = await fetch(url);
      return await response.json(); 
         
  } catch (error){
    console.log(error)
  }
}
 
async function getCountries(){
  
  let countries = await getData();
  let html = '';
 
  countries.forEach(country => {

      let htmlDOM = `<a href="details.html?${country.name.common}"> <div id="${country.name.common}"  class ="country">
      <img id="image" src="${country.flags.png}">
      <div class="text-country">
      <h2>${country.name.common} </h2>
      <p>Population: ${country.population}</p>
      <p>Region: ${country.region}</p>
      <p>Capital: ${country.capital}</p>
      </div></div></a>`;
      html += htmlDOM;
    

  });

  
  let container = document.querySelector('.container');
  container.innerHTML = html; 





  
} 

getCountries()

let array = ["a","b","c"];
// array.forEach(number => {
//   console.log(number)
//  })

//  for(let x in array){
//   console.log(x)
//  }
for(let x = 0 ; x < array.length ; x++){
  console.log(array[x])
}











