/** Ceremony moment (local). Single source of truth for countdown + displayed date. */
export const WEDDING_DATE_TIME_ISO = '2027-08-12T15:00:00' as const;

const wedding = new Date(WEDDING_DATE_TIME_ISO);

export const WEDDING_TIMESTAMP_MS = wedding.getTime();

export const WEDDING_DATE_LABEL = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
}).format(wedding);

/** Display on hero (all caps, matches invitation typography). */
export const WEDDING_DATE_CAPS = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})
  .format(wedding)
  .toUpperCase();
