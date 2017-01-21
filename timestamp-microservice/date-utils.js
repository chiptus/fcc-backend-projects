module.exports = {
  parseDate,
}

function isDate(dateStr) {
  dateStr = Number.isFinite(+dateStr) ? (+dateStr - 3600) * 1000 : dateStr;
  const date = new Date(dateStr);
  return (date !== "Invalid Date") && !isNaN(date) && date;
}


function parseDate(dateStr) {
  let ans = {
    unix: null,
    natural: null,
  };

  const date = isDate(dateStr);

  return {
    unix: date ? (date.getTime() / 1000) + 3600 : null,
    natural: date ? getNaturalDate(date) : null,
  }
}


function getNaturalDate(date = new Date()) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

