export function reps_alphabetical(a, b) {
  if (a.full_name < b.full_name) {
    return -1;
  }
  if (a.full_name > b.full_name) {
    return 1;
  }
  return 0;
}

export function reps_reversed(a, b) {
  if (a.full_name > b.full_name) {
    return -1;
  }
  if (a.full_name < b.full_name) {
    return 1;
  }
  return 0;
}

export function states_alphabetical(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

export function states_reversed(a, b) {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;
}

export function issues_alphabetical(a, b) {
  return states_alphabetical(a, b);
}

export function issues_reversed(a, b) {
  return states_reversed(a, b);
}
