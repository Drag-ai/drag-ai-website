const formatDate = (date) => date.toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export const getLastUpdatedDate = () => {
  const snapshotDate = typeof document !== 'undefined'
    ? document.querySelector('time[data-last-updated]')
    : null;

  if (snapshotDate) {
    return {
      dateTime: snapshotDate.getAttribute('datetime'),
      label: snapshotDate.textContent,
    };
  }

  const currentDate = new Date();
  return {
    dateTime: currentDate.toISOString(),
    label: formatDate(currentDate),
  };
};
