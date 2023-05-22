/* eslint-disable prettier/prettier */
import html from "html-literal";

export default (state) => html`
  <section id="jumbotron">
    <h1>SOFTWARE TESTING AND AUTOMATION</h1>
    <h2>Get your software tested here</h2>
  </section>

  <h4 id="weather">
    ${state.weather.city} weather: ${state.weather.description.toLowerCase()}, temperature: ${state.weather.temp}F (feels like ${state.weather.feelsLike}F)
  </h4>

  <section class="section-title_main_title">
    <h1>WHO WE ARE</h1>
  </section>

  <div id="about">
    <div class="one">
      <p id="content-text-holder">
        iTest is a professional software testing and automation company, located in San Diego, CA. We offer a full range of on-demand QA software testing services. Our services encompass many different software quality activities such as: quality assurance, functionality testing, mobile testing, performance testing, browser and hardware compatibility testing, acceptance testing, and code review.
      </p>
    </div>
    <hr />
    <div id="platforms">
      <h5>iTest SOFTWARE TESTING PLATFORMS</h5>
      <h2>WHAT WE TEST</h2>
      <ul>
        <li class="one">Websites</li>
        <li class="two">Desktop Apps</li>
        <li class="three">Eenterprose/Client-Server</li>
        <li class="four">Web Apps</li>
        <li class="five">eCommerce</li>
        <li class="six">APIs/Web Services</li>
        <li class="seven">Mobile Applications</li>
      </ul>
    </div>
  </div>
`;
