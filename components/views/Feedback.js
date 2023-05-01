/* eslint-disable prettier/prettier */
import html from "html-literal";

export default () => html`
  <form id="form" method="POST" action="">
    <section id="feedback">
      <h2>Contact Info</h2>
      <div class="info">
        <label for="name">Company Name:</label>
        <input type="text" name="name" id="name" />
      </div>
      <!-- EMAIL HAS BEEN DISABLED FOR SECURITY PURPUSES -->
      <!-- <div class="info">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" />
      </div> -->
    </section>

    <section id="questions">
      <h2>Additional Information</h2>
      <div class="question-block">
        <label for="questions">Please send us your feedback:</label>
      </div>
      <div class="answer">
        <textarea id="questions" name="questions" rows="5" cols="24" placeholder="Type feedback or request more info..."></textarea>
      </div>
    </section>
    <button type="submit">Send</button>
  </form>
`;
