import MenuItem from "@mui/material/MenuItem";

const renderOptions = (options) => {
  return options.map(({ value, label }) => (
    <MenuItem role="option" key={value} value={value}>
      {label}
    </MenuItem>
  ));
};

export default renderOptions;
