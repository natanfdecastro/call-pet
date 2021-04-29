import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import palette from "../theme/palette";
import Table from "../components/TableAlimento.js";
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: palette.primary.light
  },
  content: {
    marginTop: 15
  },
}));const DataTablePage = () => {
  const classes = useStyles();const query = {
    "dimensions": [
      "Alimento.id",
      "Alimento.marca",
      "Alimento.presentacion",
      "Alimento.consumo_diario",
      "Alimento.id_mascota"
    ]
  };return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Table query={query}/>
      </div>
    </div>
  );
};export default DataTablePage;