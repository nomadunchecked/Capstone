/* eslint-disable prettier/prettier */
import html from "html-literal";

export default () => html`
  <footer>
    <h5>&copy; 2023 iTest</h5>
    <section id="contact-follow">
      <div class="pull-left">
        <a href="mailto:nomadunchecked@protonmail.com">nomadunchecked@protonmail.com</a>
        <a href="tel:123.456.8910"><span>Call us: </span> 123.456.8910</a>
      </div>
      <div class="center"><h3>Get in Touch</h3></div>
      <div class="pull-right">
        <span>Follow: </span>
        <ul class="social-links">
          <li>Facebook (link to follow)</li>
          <li>Twitter (link to follow)</li>
          <!-- <li><a target="_blank" href="https://www.linkedin.com" title="LinkedIn"><i</a></li> -->
        </ul>
      </div>
    </section>
  </footer>
`;
