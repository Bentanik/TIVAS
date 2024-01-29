export const getAll = (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    err: 0,
    mess: "Get all user",
  });
};
