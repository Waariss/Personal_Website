export function getSeverityColor(severity) {
  switch (severity.toUpperCase()) {
    case 'CRITICAL':
      return 'danger';
    case 'HIGH':
      return 'warning';
    case 'MEDIUM':
      return 'info';
    case 'LOW':
      return 'secondary';
    default:
      return 'secondary';
  }
}

export function getEventTypeColor(type = '') {
  const t = String(type).trim().toLowerCase();

  switch (t) {
    case 'arsenal':
    case 'demo labs':
      return 'danger';

    case 'conference':
      return 'primary';

    case 'workshop':
    case 'guest lecture':
    case 'university talk':
    case 'talk':
      return 'info';

    case 'webinar':
      return 'success';

    case 'meetup':
      return 'warning';

    case 'community':
    case 'contribution':
    case 'ctf':
      return 'secondary';

    default:
      return 'secondary';
  }
}
