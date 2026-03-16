const parseMonthYear = (value) => {
  const parsed = new Date(`${value} 1`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const getTotalMonths = (startDate, endDate) => {
  const monthDiff =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  // Month-only ranges are treated as inclusive (e.g., Jun - Oct = 5 mos).
  return Math.max(0, monthDiff + 1);
};

const formatTenure = (totalMonths) => {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (years > 0) {
    parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  }

  if (months > 0 || years === 0) {
    parts.push(`${months} mo${months > 1 ? 's' : ''}`);
  }

  return parts.join(' ');
};

export const formatExperienceDuration = (duration, now = new Date()) => {
  const trimmedDuration = duration.trim();
  const [rawRange] = trimmedDuration.split('·');
  const normalizedRange = rawRange.trim();

  if (!normalizedRange.includes(' - ')) {
    return trimmedDuration;
  }

  const [startLabel, endLabel] = normalizedRange.split(' - ');
  const startDate = parseMonthYear(startLabel.trim());
  if (!startDate) {
    return trimmedDuration;
  }

  const isPresent = endLabel.trim().toLowerCase() === 'present';
  const endDate = isPresent ? now : parseMonthYear(endLabel.trim());
  if (!endDate) {
    return trimmedDuration;
  }

  const totalMonths = getTotalMonths(startDate, endDate);

  return `${normalizedRange} · ${formatTenure(totalMonths)}`;
};
