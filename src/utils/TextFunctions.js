export function trimSummary(str, queries) {
    var query;
    for (query in queries) {
      let idx = str.toLowerCase().indexOf(queries[query].toLowerCase());
      if (idx !== -1) {
        return str.indexOf(" ", idx - 5) + 1;
      }
    }
    return 0;
  }

export function sanitize(value) {
    return value
      .replace("(", " ")
      .replace(")", " ")
      .replace(",", " ")
      .replace("^", " ")
      .replace("[", " ")
      .replace("]", " ")
      .replace("\\", " ");
  }