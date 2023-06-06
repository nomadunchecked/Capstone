/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import html from 'html-literal';
import checkMark from '../../assets/img/checkMark.png';
import sectionLine from '../../assets/img/lineHorizontal.png';

export default state => html`
  <section id="jumbotron">
    <h1>SOFTWARE TESTING AND AUTOMATION</h1>
    <h2>Get your software tested here</h2>
  </section>

  <!-- Weather API -->
  <h4 id="weather">
    ${state.weather.city} weather: ${state.weather.description.toLowerCase()}, temperature: ${state.weather.temp}F (feels like ${state.weather.feelsLike}F)
  </h4>

  <section class="section-title_main_title">
    <h1>WHO WE ARE</h1>
  </section>

  <div class="section-border"><img src=${sectionLine} /></div>

  <div id="about">
    <div class="one">
      <p id="content-text-holder">
        iTest is a professional software testing and automation company, located in San Diego, CA. We offer a full range of on-demand QA software testing services. Our services encompass many different software quality activities such as: quality assurance, functionality testing, mobile testing, performance testing, browser and hardware compatibility testing, acceptance testing, and code review.
      </p>
    </div>
    <hr />

    <div class="section-border"></div>

    <div id="platforms-title">
      <h5>iTest SOFTWARE TESTING PLATFORMS</h5>
      <h2>WHAT WE TEST</h2>
    </div>

    <div class="section-border"><img src=${sectionLine} /></div>

    <section id="platforms">
      <!-- <div class="platform"> -->
      <p id="content-icon-holder1"><img src="${checkMark}" id="one" alt="checkMark" /></p>
      <p id="content-platform-holder1">
        Websites
      </p>
      <!-- </div> -->
      <!-- <div class="platform"> -->
      <p id="content-icon-holder2"><img src="${checkMark}" id="one" alt="checkMark" /></p>
      <p id="content-platform-holder2">
        Desktop Apps
      </p>
      <!-- </div> -->
      <!-- <div class="platform"> -->
      <p id="content-icon-holder3"><img src="${checkMark}" id="one" alt="checkMark" /></p>
      <p id="content-platform-holder3">
        Eenterprise/Client-Server
      </p>
      <!-- </div> -->
      <!-- <div class="platform"> -->
      <p id="content-icon-holder4"><img src="${checkMark}" id="one" alt="checkMark" /></p>
      <p id="content-platform-holder4">
        Web Apps
      </p>
      <!-- </div> -->
      <!-- <div class="platform"> -->
      <p id="content-icon-holder5"><img src="${checkMark}" id="one" alt="checkMark" /></p>
      <p id="content-platform-holder5">
        eCommerce
      </p>
      <!-- </div> -->
      <!-- <div class="platform"> -->
      <p id="content-icon-holder6"><img src="${checkMark}" id="one" alt="checkMark" /></p>
      <p id="content-platform-holder6">
        APIs/Web Services
      </p>
      <!-- </div> -->
      <!-- <div class="platform"> -->
      <p id="content-icon-holder7"><img src="${checkMark}" id="one" alt="checkMark" /></p>
      <p id="content-platform-holder7">
        Mobile Applications
      </p>
      <!-- </div> -->
    </section>
  </div>
`;
