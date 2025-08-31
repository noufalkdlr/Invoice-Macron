import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function PhoneNoSelect({ billTo, handleBillTo }) {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { width: "100%" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Phone Number"
        name="phone"
        value={billTo.phone}
        onChange={handleBillTo}
        variant="outlined"
      />
    </Box>
  );
}
