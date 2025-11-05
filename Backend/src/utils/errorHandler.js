export const errorHandler = (err, req, res) => {
  return res.status(200).json({ message: err, success: false });
};
