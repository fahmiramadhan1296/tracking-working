import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { IDropdownModel, TMenuItemProps } from "./dropdown";
import { inputLabelStyle, selectStyle } from "./styled";

const Dropdown: React.FC<IDropdownModel> = (props) => {
  const { select, inputLabel, menuItem } = props;
  return (
    <FormControl fullWidth>
      <InputLabel {...inputLabel} sx={inputLabelStyle}>
        {inputLabel.label}
      </InputLabel>
      <Select label={inputLabel.label} {...select} sx={selectStyle}>
        {menuItem.map((item: TMenuItemProps) => (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
