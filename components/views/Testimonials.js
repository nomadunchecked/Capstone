/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import html from "html-literal";
import sectionLine from "../../assets/img/lineHorizontal.png";

export default (state) => html`
  <section id="jumbotron">
    <h1>TESTIMONIALS</h1>
    <h2>Get your software tested here</h2>
  </section>

  <section class="section-title_main_title">
    <h1>WHAT PEOPLE SAY</h1>
  </section>

  <div class="section-border"><img src=${sectionLine} /></div>

  <!-- Display 'feedbacks' on the Testimonials page -->
  <section id="testimonials">
    ${state.responses.map((response) => {
      return `
      <div id="response-text">${response.text}</div>
      <div id="response-company">${response.company}-</div>`;
    })}
  </section>
`;
