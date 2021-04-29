import React from "react";
import { makeStyles } from "@material-ui/styles";
import Table from "../components/TableMascota.js";
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    marginTop: 15
  },
}));
const DataTablePage = () => {
  const classes = useStyles();
const query = {
      "dimensions": [
      "Mascota.id",
      "Mascota.nombre",
      "Mascota.especie",
      "Mascota.raza",
      "Mascota.id_cliente"
    ]
  };
return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Table query={query}/>
      </div>
    </div>
  );
};
export default DataTablePage;