const Date = (props) => {
  const { date } = props;
  if (!date) {
    return '-';
  }

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return date.toLocaleString(navigator.language, options);
};

export default Date;
