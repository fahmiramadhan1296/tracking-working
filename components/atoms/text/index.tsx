import { Typography } from "@mui/material";
import { TCustomTextModel } from "./text";

const Text: React.FC<TCustomTextModel> = (props) => {
  return <Typography {...props} fontFamily={"cursive"} />;
};

export default Text;
