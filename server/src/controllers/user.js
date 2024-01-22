export const getAll = (req, res) => {
  return res.status(200).json({
    err: 0,
    mess: "Get all user",
  });
};
