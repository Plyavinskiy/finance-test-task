const convertDate = (str) => {
  if (!str) return "";

  const date = new Date(str);
  const dateStr = date.toDateString().slice(4, 10);
  const fullYear = date.getFullYear();

  return `${dateStr}, ${fullYear}`;
};

export default convertDate;
