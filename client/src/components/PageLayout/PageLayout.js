import { Container } from "@mui/material";
import { useStyles } from "./customMUIStyles";

function PageLayout({ children }) {
  const classes = useStyles();

  return (
    <Container data-testid="page-layout" className={classes.container}>
      {children}
    </Container>
  );
}

export default PageLayout;
