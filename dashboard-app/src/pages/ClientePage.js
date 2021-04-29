import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import palette from "../theme/palette";
import Table from "../components/TableCliente.js";const useStyles = makeStyles(theme => ({
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
      "Cliente.id",
      "Cliente.nombre",
      "Cliente.primer_apellido",
      "Cliente.segundo_apellido",
      "Cliente.telefono",
      "Cliente.direccion_entrega",
      "Cliente.notificacion"
    ]
  };return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Table query={query}/>
      </div>
    </div>
  );
};export default DataTablePage;