export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('zh-CN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
