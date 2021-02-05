// creates 9 digit id
const createId = () => {
  return Math.random().toString(36).substring(4).toUpperCase();
};

export default createId;
