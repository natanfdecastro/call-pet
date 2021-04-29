import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import palette from "../theme/palette";
import Table from "../components/TablePedido.js";const useStyles = makeStyles(theme => ({
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
      "Pedido.id",
      "Pedido.tiempo_aviso",
      "Pedido.consumo_dias",
      "Pedido.fecha_compra",
      "Pedido.fecha_vencimiento"
    ]
  };return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Table query={query}/>
      </div>
    </div>
  );
};export default DataTablePage;