import { site } from "@/lib/site";
import { Countdown } from "@/components/countdown";
import { Rsvp } from "@/components/rsvp";

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#" className="nav-mark">{site.partnerOne[0]} <span>&</span> {site.partnerTwo[0]}</a>
        <div className="nav-links">
          <a href="#story">Our story</a>
          <a href="#events">Celebrations</a>
          <a href="#venue">Venue</a>
          <a href="#rsvp">RSVP</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-inner">
          <p className="eyebrow">॥ श्री गणेशाय नमः ॥</p>
          <div className="ornament">✺</div>
          <p className="eyebrow">Together with our families</p>
          <h1>{site.partnerOne}<span className="ampersand"> & </span>{site.partnerTwo}</h1>
          <p className="hero-subtitle">{site.tagline}</p>
          <div className="hero-rule"><span>✦</span></div>
          <p className="invite-copy">{site.intro}</p>
          <p className="date-label">{site.dateLabel}</p>
          <a className="primary-button" href="#events">Explore the celebration <span>↓</span></a>
        </div>
        <div className="hero-bottom">A CELEBRATION OF LOVE · FAMILY · FOREVER</div>
      </section>

      <section className="section story-section" id="story">
        <p className="section-kicker">A little note from us</p>
        <h2>Our happily ever after</h2>
        <div className="small-divider">❧</div>
        <p className="story-text">
          Some journeys are more beautiful when shared. We are grateful for the love
          that brought us here, and would be honoured to have you with us as we begin
          this new chapter together.
        </p>
        <div className="name-signature">{site.shortNames}</div>
      </section>

      <section className="countdown-section">
        <p className="section-kicker light">The big day is almost here</p>
        <h2>Counting down to forever</h2>
        <Countdown target={site.weddingDate} />
        <p className="countdown-date">{site.dateLabel}</p>
      </section>

      <section className="section events-section" id="events">
        <p className="section-kicker">Save the dates</p>
        <h2>Wedding celebrations</h2>
        <div className="small-divider">❧</div>
        <div className="event-grid">
          {site.events.map((event) => (
            <article className="event-card" key={event.name}>
              <div className="event-symbol">{event.symbol}</div>
              <p className="event-date">{event.date}</p>
              <h3>{event.name}</h3>
              <p className="event-time">{event.time}</p>
              <p className="event-place">{event.place}</p>
              <p className="event-note">{event.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="venue-section" id="venue">
        <div className="venue-inner">
          <p className="section-kicker light">We can’t wait to see you</p>
          <h2>Meet us there</h2>
          <div className="small-divider gold">❧</div>
          <h3>{site.venueName}</h3>
          <p>{site.venueAddress}</p>
          <a className="outline-button" href={site.mapsUrl} target="_blank" rel="noreferrer">
            Get directions ↗
          </a>
        </div>
      </section>

      <section className="section rsvp-section" id="rsvp">
        <p className="section-kicker">Kindly respond</p>
        <h2>Will you join us?</h2>
        <div className="small-divider">❧</div>
        <p className="rsvp-intro">Your presence will make our celebration even more special.</p>
        <Rsvp />
      </section>

      <footer className="footer">
        <div className="footer-flower">✺</div>
        <p>With love,</p>
        <h2>{site.shortNames}</h2>
        <p className="footer-date">{site.dateLabel}</p>
        <p className="copyright">MADE WITH LOVE · © {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}