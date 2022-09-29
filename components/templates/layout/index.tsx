import { ThemeProvider, createTheme } from "@mui/material/styles";
import { TLayoutModel } from "./layoutModel";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    success: {
      main: "#ff0000",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => `
        h1 {
          color: ${themeParam.palette.success.main};
        }
      `,
    },
  },
});

const Layout: React.FC<TLayoutModel> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
