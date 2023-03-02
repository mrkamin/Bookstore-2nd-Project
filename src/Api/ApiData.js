function ApiData(reset) {
  const newObject = Object.entries(reset).map(
    ([key, value]) => Object.assign(value[0], { item_id: key }),
  );
  return newObject;
}

export default ApiData;
