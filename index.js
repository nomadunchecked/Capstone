/* eslint-disable no-inner-declarations */
/* eslint-disable no-case-declarations */
/* eslint-disable no-duplicate-case */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-prototype-builtins */

import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");
const resultDiv = document.querySelector("#results");
const resultBtn = document.querySelector("#getData");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;

  afterRender(state);

  router.updatePageLinks();
}

function afterRender(state) {
  // Add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  // Event listerner to submit the feedback form
  if (state.view === "Feedback") {
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        company: inputList.name.value,
        text: inputList.questions.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.TESTIMONIALS_API_URL}/feedbacks`, requestData)
        .then((response) => {
          // Push the new feedback onto the Testimonials state responses attribute, so it can be displayed in the testimonials list
          store.Testimonials.responses.push(response.data);
          router.navigate("/Testimonials");
        })
        .catch((error) => {
          console.log("It puked", error);
        });
    });
  }
  if (state.view === "Feedback") {
    const resultDiv = document.querySelector("#results");
    const resultBtn = document.querySelector("#getData");

    resultBtn.addEventListener("click", () => {
      getAdvice();
    });

    function getAdvice() {
      axios
        .get(`${process.env.RANDOMADVICE_API_URL}`)
        .then((adviceData) => {
          const Adviceobj = adviceData.data.slip;
          resultDiv.innerHTML = `<h2>${Adviceobj.advice}</h2>`;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  if (state.view === "Services") {
    const resultDiv = document.querySelector("#results");
    const resultBtn = document.querySelector("#getData");

    resultBtn.addEventListener("click", () => {
      getAdvice();
    });

    function getAdvice() {
      axios
        .get(`${process.env.RANDOMADVICE_API_URL}`)
        .then((adviceData) => {
          const Adviceobj = adviceData.data.slip;
          resultDiv.innerHTML = `<h2>${Adviceobj.advice}</h2>`;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}

router.hooks({
  before: (done, params) => {
    const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=san%20diego`)
          .then((response) => {
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
            // console.log(response);
            const kelvinToFahrenheit = (kelvinTemp) => Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            // Create an object to be stored in the Home state from the response
            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };

            // An alternate method would be to store the values independently
            /*
        store.Home.weather.city = response.data.name;
        store.Home.weather.temp = kelvinToFahrenheit(response.data.main.temp);
        store.Home.weather.feelsLike = kelvinToFahrenheit(response.data.main.feels_like);
        store.Home.weather.description = response.data.weather[0].main;
        */
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        break;

      // case "Feedback":
      // const resultDiv = document.querySelector("#results");
      // const resultBtn = document.querySelector("#getData");

      // axios
      //   .get(`${process.env.RANDOMADVICE_API_URL}`)
      //   .then((adviceData) => {
      //     const Adviceobj = adviceData.data.slip;
      //     console.log(Adviceobj);

      //     // Create an object to be stored in the Feedback state from the response
      //     store.Feedback.advice = {
      //       advice: adviceData.data.slip.advice
      //     };

      //     // resultDiv.innerHTML = `<p>${store.Feedback.advice}</p>`;

      //     done();
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     done();
      //   });
      // break;

      case "Testimonials":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`${process.env.TESTIMONIALS_API_URL}/feedbacks`)
          .then((response) => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response);
            store.Testimonials.responses = response.data;
            done();
          })
          .catch((error) => {
            console.log("It puked", error);
            done();
          });
        break;

      default:
        done();
    }
  },
  already: (params) => {
    const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": (params) => {
      let view = capitalize(params.data.view);
      if (store.hasOwnProperty(view)) {
        render(store[view]);
      } else {
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
