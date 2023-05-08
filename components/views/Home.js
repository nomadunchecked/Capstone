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

  <section class="about">
    <div>
      <!-- <h5>iTest SOFTWARE TESTING PLATFORMS</h5> -->
      <h2>WHO WE ARE</h2>
      <p>iTest is a professional software testing and automation company, located in San Diego, CA. We offer a full range of on-demand QA software testing services. Our services encompass many different software quality activities such as: quality assurance, functionality testing, mobile testing, performance testing, browser and hardware compatibility testing, acceptance testing, and code review.</p>
    </div>
    <div>
      <h5>iTest SOFTWARE TESTING PLATFORMS</h5>
      <h2>WHAT WE TEST</h2>
      <ul>
        <li>Websites</li>
        <li>Desktop Apps</li>
        <li>Eenterprose/Client-Server</li>
        <li>Web Apps</li>
        <li>eCommerce</li>
        <li>APIs/Web Services</li>
        <li>Mobile Applications</li>
      </ul>
    </div>
  </section>

  <p>${state.message}</p>
`;
