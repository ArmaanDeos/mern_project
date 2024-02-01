import { asyncHandler } from "../utils/AsyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // res.send(200).json({
  //   message: "Ok",
  // });
  res.send("Test done succesfully");
});

export { registerUser };
