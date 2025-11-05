export const successHandler = (res, message, data = null) => {
  return res.status(200).json({ message, success: true, data });
};
