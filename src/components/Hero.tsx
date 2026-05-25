import Countdown from './Countdown';
import { WEDDING_DATE_CAPS } from '../constants/wedding';

export default function Hero() {
  return (
    <section className="hero-shell">
      <div className="hero-frame">
        <div className="hero-image-col fade-in">
          <img className="hero-img" src="/hero.jpeg?v=20260509" alt="" width={904} height={1024} decoding="async" />
          <div className="hero-img-flare" aria-hidden="true" />
          <div className="hero-img-gradient" aria-hidden="true" />
        </div>

        <div className="hero-content-col">
          <div className="hero-content-inner fade-up delay-1">
            <div className="hero-center">
              <p className="hero-overline">Save the Date</p>
              <span className="hero-mini-line" aria-hidden="true" />
              <h1 className="hero-names">
                <span>{'Ábel'}</span>
                <span className="hero-ampersand">&amp;</span>
                <span>{' Csenge'}</span>
              </h1>
              <p className="content-date">{WEDDING_DATE_CAPS}</p>
              <p className="hero-location">
                <svg className="hero-location-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="2.25" fill="none" />
                </svg>
                <span className="hero-location-label">Brașov, Romania</span>
              </p>
              <div className="countdown-shell">
                <Countdown />
              </div>
              <p className="hero-footer-text">
                {`We can't wait to celebrate with You!`}
                <br />
                {'Official invitation coming soon.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
