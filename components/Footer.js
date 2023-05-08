/* eslint-disable prettier/prettier */
import html from "html-literal";

export default () => html`
  <footer>
    <div class="one"></div>
    <div class="two"><h2>Get in Touch</h2></div>
    <div class="three"><span>Email:</span><a href="mailto:info@iTest.com">info@iTest.com</a></div>
    <div class="four"><h5>&copy; 2023 iTest All rights reserved.</h5></div>
    <div class="five">
      <h4>
        123 Tech Dr <br />
        San Diego, CA 92122
      </h4>
    </div>
    <div class="six">
      <a href="tel:123.456.8910"> <br /><span>Phone: </span> 123.456.8910</a>
    </div>
  </footer>
`;
