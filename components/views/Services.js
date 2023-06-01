/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import html from "html-literal";
import sectionLine from "../../assets/img/lineHorizontal.png";

export default () => html`
  <section id="jumbotron">
    <h1>SERVICES</h1>
    <h2>Get your software tested here</h2>
  </section>

  <section class="section-title_main_title">
    <h1>WHAT WE DO</h1>
  </section>

  <div class="section-border"><img src=${sectionLine}></div>

  <div id="services">
    <div class="one">
      <p id="content-title-holder">Web Testing</p>
      <p id="content-text-holder">
        iTest offers website testing services and will systematically test every aspect of your website's technology including applications, client-server systems, eCommerce platforms and more.
      </p>
    </div>
    <div class="two">
      <p id="content-title-holder">Mobile Testing</p>
      <p id="content-text-holder">
        iTest software testing and quality assurance can test the functionality and user experience of your mobile app or responsive website across every major operating system.
      </p>
    </div>
    <div class="three">
      <p id="content-title-holder">Responsive Testing</p>
      <p id="content-text-holder">
        iTest engineers will ensure that your website or web application can be used effectively on various devices, including desktops, laptops, tablets, and smartphones.
      </p>
    </div>
    <div id="four">
      <p id="content-title-holder">Performance Testing</p>
      <p id="content-text-holder">iTest engineers use Performance Testing to analyze various success factors such as response times, bottlenecks and potential errors. With these results in hand, decisions can be made on how to optimize applications.</p>
    </div>
    <div class="five">
      <p id="content-title-holder">Test Automation</p>
      <p id="content-text-holder">iTest software testing and quality assurance can help you configure and maintain an automated testing framework for your application.</p>
    </div>
    <div class="six">
    <p id="content-title-holder">Localization Automation</p>
      <p id="content-text-holder">We offer software QA services can  audit your website or mobile application to ensure that it complies with local language and cultural standards.</</p>
    </div>
  </div>
`;
