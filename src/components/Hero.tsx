import Countdown from './Countdown';
import { WEDDING_DATE_CAPS } from '../constants/wedding';

export default function Hero() {
  return (
    <section className="hero-shell">
      <div className="hero-frame">
        <div className="hero-image-col fade-in">
          <img className="hero-img" src="/hero.jpg?v=20260509" alt="" width={904} height={1024} decoding="async" />
          <div className="hero-img-flare" aria-hidden="true" />
          <div className="hero-img-gradient" aria-hidden="true" />
        </div>

        <div className="hero-content-col">
          <div className="hero-content-inner fade-up delay-1">
            <div className="hero-center">
              <p className="hero-overline">Save the Date</p>
              <span className="hero-mini-line" aria-hidden="true" />
              <h1 className="hero-names">
                <span>Csenge</span>
                <span className="hero-ampersand">&amp;</span>
                <span>{' Ábel'}</span>
              </h1>
              <p className="content-date">{WEDDING_DATE_CAPS}</p>
              <p className="hero-location">Brașov, Romania</p>
              <div className="countdown-shell">
                <Countdown />
              </div>
              {/* <span className="hero-mini-line" aria-hidden="true" /> */}
              <p className="hero-footer-text">We would love to celebrate this special day and start our next chapter together, surrounded by those who matter most.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
