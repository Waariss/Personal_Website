const parseTalkDate = (value) => {
  const parsed = new Date(`${value} 1`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const toMonthKey = (value) => value.getFullYear() * 12 + value.getMonth();

const extractTalkFields = (input, fallbackStatus = '') => {
  if (typeof input === 'object' && input !== null) {
    return {
      dateLabel: String(input.date || ''),
      title: String(input.title || ''),
      event: String(input.event || ''),
      description: String(input.description || ''),
      status: String(input.status || fallbackStatus || ''),
    };
  }

  return {
    dateLabel: String(input || ''),
    title: '',
    event: '',
    description: '',
    status: String(fallbackStatus || ''),
  };
};

export const getTalkStatus = (talkOrDate, fallbackStatus = '', now = new Date()) => {
  const {
    dateLabel,
    title,
    event,
    description,
    status,
  } = extractTalkFields(talkOrDate, fallbackStatus);

  const statusLower = status.toLowerCase();
  const hintText = `${title} ${event} ${description} ${status}`.toLowerCase();
  const isChallengeAuthor = hintText.includes('challenge author');
  const isAccepted = hintText.includes('accepted');
  const isScheduled = hintText.includes('scheduled') || hintText.includes('to be announced');

  if (isChallengeAuthor) {
    return 'Challenge Author';
  }

  const parsedDate = parseTalkDate(dateLabel);
  if (!parsedDate) {
    if (status) {
      return status;
    }
    return isAccepted ? 'Upcoming (Accepted)' : 'Presented';
  }

  const talkMonth = toMonthKey(parsedDate);
  const currentMonth = toMonthKey(now);

  if (talkMonth > currentMonth) {
    return isAccepted ? 'Upcoming (Accepted)' : 'Upcoming';
  }

  if (talkMonth === currentMonth && (statusLower.includes('upcoming') || isScheduled || isAccepted)) {
    return isAccepted ? 'Upcoming (Accepted)' : 'Upcoming';
  }

  return 'Presented';
};
