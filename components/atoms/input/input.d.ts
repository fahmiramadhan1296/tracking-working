import { TextFieldProps } from "@mui/material";

type TCustomTextfieldModel = {
  inputColor?: string;
};

export type TInputModel = TextFieldProps & {
  customInput?: TCustomTextfieldModel;
};