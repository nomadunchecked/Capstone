/* eslint-disable prettier/prettier */
import html from "html-literal";
import logoPic from "../assets/img/iTest.Logo4.png";

export default () => html`
  <header class="header">
    <!-- THIS COULD BE AN ICON -->
    <div id="header">
      <img src="${logoPic}" alt="logo picture" />
    </div>
  </header>
`;
