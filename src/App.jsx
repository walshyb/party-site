import "./App.scss";
import { useState } from "react";

function App() {
  return (
    <>
      <header>
        <h1>
          ~Brandon's 30th Party Deets~
          <br />
          Hi hi and welcome!!
        </h1>
      </header>
      <main>
        <section className="rsvp">
          <h2>Here to RSVP?</h2>
          <p>
            You can RSVP using{" "}
            <a href="https://forms.gle/ABJtN723YUvbZSeB8" target="_blank">
              this Google form!
            </a>
          </p>
        </section>
        <section className="deets">
          <h2>Party Details</h2>
          <p>
            <time datetime="2025-03-01">March 1st, 2025</time>
            <br />
            <time datetime="19:00">7:00 PM - 12:00 AM</time>
          </p>
          <address>
            <a href="https://maps.app.goo.gl/7Yyak4wwimhJ8ibn7" target="_blank">
              Maestro's Caterers
            </a>
            <br />
            1703 Bronxdale Ave, Bronx, NY 10462
          </address>
          <p>
            <i>There is valet parking!</i>
          </p>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
