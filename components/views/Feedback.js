/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import html from "html-literal";
import sectionLine from "../../assets/img/lineHorizontal.png";

export default (state) => html`
  <form id="form" method="POST" action="">
    <section>
      <h2>How did you like our servieces?</h2>
      <div class="info">
        <label for="name">Company Name:</label>
        <input type="text" name="name" id="name" required />
      </div>
      <!-- EMAIL HAS BEEN DISABLED FOR SECURITY PURPUSES -->
      <!-- <div class="info">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" />
      </div> -->
    </section>

    <section id="questions">
      <h4><i>Please send us your feedback:</i></h4>
      <div class="answer">
        <textarea id="questions" name="questions" rows="5" cols="24" placeholder="Type feedback here..." required></textarea>
      </div>
    </section>
    <button id="button" type="submit">Send</button>
  </form>

  <div class="section-border"><img src=${sectionLine} /></div>

  <!-- Advice API -->
  <div class="advice">
    <h2>Would you like a Fun Random Advice?</h2>
    <button class="btn" id="getData">Get my Fun Advice</button>

    <div id="results"></div>

    <!-- <div class="section-border"><img src=${sectionLine} /></div> -->
  </div>
`;
