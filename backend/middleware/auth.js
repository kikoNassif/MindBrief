// Temporary stub middleware so backend doesn't crash
const protect = (req, res, next) => {
  next(); // just pass through for now
};

export default protect;