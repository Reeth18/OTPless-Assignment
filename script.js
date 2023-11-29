async function getCountryInfo(startChar, endChar) {
  let response = await fetch("https://restcountries.com/v3.1/all");
  let data = await response.json();

  console.log(data);

  // Search countries based upon alphabets
  function filterCountriesByAlphabet(data, startChar, endChar) {
    return data.filter((element) => {
      const firstChar = element.name.common.charAt(0).toUpperCase();
      return firstChar >= startChar && firstChar <= endChar;
    });
  }

  function displayCountries(countries) {
    let mainBody = document.querySelector(".card");
    console.log(data);

    let mainBodyInnerHTML = mainBody.innerHTML;
    console.log(mainBodyInnerHTML);

    countries.sort((a, b) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    countries.forEach((element) => {
      // console.log(`${element.title}`);
      const currency =
        element.currencies &&
        Object.values(element.currencies)[0]?.name &&
        Object.values(element.currencies)[0]?.symbol;
      mainBody.innerHTML += `
            <div class="country-container"> 
            <h2>Country Information App</h2>
            <h4>Continent: ${element.region}</h4>
            <div class="country-info">
            <h5>Country: ${element.name.common}</h5>
            <img src= ${element.flags.png} alt="Country Flag" class="flags">
            <h5>Capital: ${element.capital}</h5>
            <h5>Population: ${element.population}</h5>
            <h5>Currency: ${currency || "N/A"}</h5>

            </div>
            </div>
            `;
    });
  }
  const countries = filterCountriesByAlphabet(data, startChar, endChar);
  displayCountries(countries);
}
let btn = document.querySelector(".button");
console.log(btn);

btn.addEventListener("click", getCountryInfo);

// Button click handlers
let btn1 = document.querySelector(".button");
btn1.addEventListener("click", () => {
  getCountryInfo("A", "H");
});

let btn2 = document.querySelector(".button");
btn1.addEventListener("click", () => {
  getCountryInfo("I", "M");
});

let btn3 = document.querySelector(".button");
btn1.addEventListener("click", () => {
  getCountryInfo("N", "S");
});

let btn4 = document.querySelector(".button");
btn1.addEventListener("click", () => {
  getCountryInfo("U", "Z");
});

//     // getCountryInfo()
// {/* <p>Loading...</p> */}
