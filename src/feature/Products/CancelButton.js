import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function CancelButton() {
  return (
    <Stack spacing={2} direction="row" className="buttons">
      <Button variant="outlined">Cancel</Button>
      <Button variant="contained" color='error'>Delete</Button>
    </Stack>
  );
}
