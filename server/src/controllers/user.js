import * as services from "../services";
export const getAll = (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    err: 0,
    mess: "Get all user",
  });
};

export const sendMail = async (req, res) => {
  const response = await services.sendMail();
  return res.status(200).json(response);
};
