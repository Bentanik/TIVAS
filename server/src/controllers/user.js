import * as services from "../services";
export const getUser = async (req, res) => {
  const { username } = req.params;

  const response = await services.getUser(req.params);

  return res.status(200).json(response);
};
