import "./App.scss";

function App() {
  return (
    <>
      <header>
        <h1>
          ~Brandon's 30th Party Deets~
          <br />
          <span className="the-hellos">Hi hi and welcome!!</span>
        </h1>

        <h2>Here to RSVP?</h2>
        <p>
          You can RSVP using{" "}
          <a href="https://forms.gle/ABJtN723YUvbZSeB8" target="_blank">
            this Google form!
          </a>
        </p>
      </header>
      <main>
        <section className="deets">
          <div className="time-location">
            <h2>Time and Place</h2>
            <p>
              <time datetime="2025-03-01">March 1st, 2025</time>
              <br />
              <time datetime="19:00">7:00 PM - 12:00 AM</time>
            </p>
            <address>
              <a
                href="https://maps.app.goo.gl/7Yyak4wwimhJ8ibn7"
                target="_blank"
              >
                Maestro's Caterers
              </a>
              <br />
              1703 Bronxdale Ave, Bronx, NY 10462
            </address>
            <p>
              <i>There is valet parking!</i>
            </p>
          </div>
          <div className="attire">
            <h2>Attire</h2>
            <p>
              Formal-ish? The theme we're *attempting* is 80s! Disco vibes cool
              too! Really just no jeans / sneakers, unless you're committing to
              an all denim look 😜
            </p>
            <p>
              I'll likely be wearing a suit (but who knows, maybe you'll even
              catch me in a dress 🤷‍♀️)
            </p>
          </div>
          <div className="expectations">
            <h2>What To Expect</h2>
            <h3>Dancing</h3>
            <p>
              You best bet there's gonna be lots of dancing!! Bring some good
              shoewear!
            </p>

            <h3>Music</h3>
            <p>There shall be a DJ!</p>
            <p>
              Music will primarily be composed of:
              <ul>
                <li>slammin' 80s songs</li>
                <li>
                  spanish classics (it's not a party without your usual favs!!)
                </li>
                <li>modern spanish music (bops)</li>
                <li>cotton eye joe</li>
                <li>english pop hits! both modern and early aughts!</li>
                <li>i'm down for requests</li>
              </ul>
            </p>

            <h3>Libations (Drinks) (updated!)</h3>
            <p>
              There will be an <strong>open bar</strong>. Please drink
              responsibly and ensure that you have secured a safe means of
              transporation back home <i>before</i> attending!!
            </p>

            <p>
              <b>[New]</b> There will be a non-alcoholic sparkling rosé served
              at the bar, as well.
            </p>

            <h3>Food (updated!)</h3>
            <ul>
              <li>Primarily Spanish and Carribean dishes!</li>
              <li>
                <b>[New]</b> Final menu has been selected! We have 5 meat
                dishes, and 5 vegetarian dishes (4 of which are vegan). 6 of
                these items are gluten free. Here is the menu:
                <ol>
                  <li>Chicharrones de Pollo [Fried Chicken Chunks]</li>
                  <li>
                    Ropa Vieja <b>(gf)</b>
                  </li>
                  <li>
                    Pernil [Roasted Pork] <b>(gf)</b>
                  </li>
                  <li>
                    Arroz con Gandules [Rice mixed with beans] <b>(gf) (vgn)</b>
                  </li>
                  <li>
                    Tostones [Fried Plantains] <b>(gf) (vgn)</b>
                  </li>
                  <li>Curry Goat</li>
                  <li>
                    Linguine with Pesto <b>(vgt)</b>
                  </li>
                  <li>
                    Roasted Vegetable Medley [String beans, broccoli, carrots,
                    garlic] <b>(gf) (vgn)</b>
                  </li>
                  <li>
                    Tossed Salad <b>(gf) (vgn)</b>
                  </li>
                  <li>
                    Jerk Chicken <b>(maybe gf?)</b>
                  </li>
                </ol>
                <div className="legend">
                  Gluten Free: <b>gf</b>
                  <br />
                  Vegan: <b>vgn</b>
                  <br />
                  Vegetarian: <b>vgt</b>
                  <br />
                </div>
              </li>
            </ul>

            <h3>Photobooth</h3>
            <p>There'll be one!</p>
          </div>
          <div className="hotels">
            <h2>Nearby Hotels</h2>
            <p>
              Some of you are coming from far! Please ensure that you have
              secured a place to stay in advance!
            </p>
            <ul>
              <li>
                The nearest decent-looking hotel that is 10 minutes drive away
                from the venue is:
                <address>
                  <a
                    href="https://maps.app.goo.gl/6Dn2GZnEEzC4U6pX6"
                    target="_blank"
                  >
                    Residence Inn New York The Bronx at Metro Center Atrium
                  </a>
                  <br />
                  1776 Eastchester Rd, Bronx, NY 10461
                </address>
              </li>
              <li>
                The next decent-looking hotel that is 20 minutes drive away from
                the venue is:
                <address>
                  <a
                    href="https://maps.app.goo.gl/BsAdbGnbujWpecBe6"
                    target="_blank"
                  >
                    Ramada by Wyndham Bronx
                  </a>
                  <br />
                  1000 Baychester Ave, Bronx, NY 10475
                </address>
                <br />
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
