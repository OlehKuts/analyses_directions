export const numArrayCreator = (first, quantity) => {
  let arr = [];
  for (let i = first; i < quantity + 1; i++) {
    arr.push(i);
  }
  return arr;
};
export const getResidence = (features) => {
  const {
    town,
    street,
    district,
    fullAdress,
    adress,
    building,
    letter,
    flat
  } = features;
  let realFlat = flat ? `/${flat}` : "";
  let result =
    town !== ""
      ? `м.${town}, вул.${street} ${building}${letter}${realFlat}`
      : district !== ""
      ? `${district}, ${adress}`
      : fullAdress !== ""
      ? fullAdress
      : "";
  return result;
};
