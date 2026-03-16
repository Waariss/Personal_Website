const MONTH_INDEX = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
};

const MONTH_RE =
  /(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t|tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)/i;

export const parseDateLabelValue = (label = '') => {
  const text = String(label).trim();
  if (!text) {
    return 0;
  }

  const head = text.split(' - ')[0].split('/')[0].trim();
  const monthMatch = head.match(MONTH_RE);
  const yearMatch = head.match(/(19|20)\d{2}/);

  if (monthMatch && yearMatch) {
    const monthKey = monthMatch[1].toLowerCase();
    const month = MONTH_INDEX[monthKey];
    const year = Number(yearMatch[0]);
    if (Number.isFinite(year) && month !== undefined) {
      return new Date(year, month, 1).getTime();
    }
  }

  const fallbackTimestamp = Date.parse(text);
  return Number.isFinite(fallbackTimestamp) ? fallbackTimestamp : 0;
};
