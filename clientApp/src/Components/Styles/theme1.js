const theme1 = createMuiTheme({
    overrides: {
      MuiSelect: {
        select: {
          "&:focus": {
            background: "$labelcolor"
          }
        }
      }
    }
  });
export default theme1;