function checkUrl(inputUrl) {
  const urlRegex = inputUrl.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  if (urlRegex) return true;
  return false;
}

export { checkUrl };
