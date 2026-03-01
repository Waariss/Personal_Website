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

export function getEventTypeColor(type) {
  switch (type.toLowerCase()) {
    case 'arsenal':
      return 'danger';
    case 'conference':
      return 'primary';
    case 'workshop':
      return 'info';
    case 'webinar':
      return 'success';
    case 'meetup':
      return 'warning';
    default:
      return 'secondary';
  }
}
