import { Autocomplete, TextField } from "@mui/material";
import React, { FC } from "react";
import { css } from "@emotion/css";

interface CustomSelectProps {
  value: string | string[] | null;
  onChange: (value: string | string[] | null) => void;
  options: string[];
  label?: string;
  multiple?: boolean;
  error?: boolean;
  errorMessage?: string;
}

const styles = {
  helperText: css`
    position: absolute;
    bottom: -8px;
    background: #fff;
    padding: 0 3px;
    padding: 0px 5px;
    margin-left: 9px !important;
  `,
};

const CustomSelect: FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  label = "",
  multiple = false,
  error = false,
  errorMessage = "",
}) => {
  const onValueChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string | string[] | null
  ) => {
    onChange(newValue);
  };

  return (
    <Autocomplete
      multiple={multiple}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={error}
          helperText={error ? errorMessage : ""}
          FormHelperTextProps={{
            className: styles.helperText,
          }}
        />
      )}
      isOptionEqualToValue={(option, value) => option === value}
      value={value}
      onChange={onValueChange}
    />
  );
};

export default CustomSelect;
