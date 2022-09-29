import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import { TInputModel } from "./input";

export const CustomTextfield = styled(TextField)((props: TInputModel) => {
    console.log(props);
    const inputColor = props?.customInput?.inputColor;
    return {
      ...props,
      "& label.MuiInputLabel-root:not(.Mui-disabled)": {
        color: inputColor,
      },
    
      "& .MuiInputBase-root:not(.Mui-disabled)": {
        borderBottom: `none`,
        "& .MuiInputBase-input": {
          borderColor: inputColor,
          color: inputColor,
        },
        "&.Mui-focused fieldset, & fieldset, &:hover fieldset":
          {
            borderColor: inputColor,
          },
        "&::after, &::before, &:hover:before": {
          borderBottom: `1px solid ${inputColor}`,
        },
      },
    };});
