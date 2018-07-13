module.exports = async function fileExists(location, archive) {
  try {
    await archive.readFile(location);
    return true;
  } catch (error) {
    return false;
  }

  return false;
};
