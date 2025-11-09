export const errorHandler = (res, err) => {
  return res.status(200).json({ message: err, success: false });
};
