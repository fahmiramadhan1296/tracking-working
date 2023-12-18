import {
  InputLabelProps,
  MenuItemProps,
  SelectProps,
  TextFieldProps,
} from "@mui/material";

export type TMenuItemProps = MenuItemProps & {
  label: string;
};

type InputLabel = InputLabelProps & {
  label: string;
};

export interface IDropdownModel {
  inputLabel: InputLabel;
  select: SelectProps;
  menuItem: TMenuItemProps[];
}
