import React from "react";
import { makeStyles } from "@material-ui/styles";import Table from "../components/TableAlimento.js";const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
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