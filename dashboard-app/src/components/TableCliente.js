import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/styles";
import { useCubeQuery } from "@cubejs-client/react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination, Typography
} from "@material-ui/core";import StatusBullet from "./StatusBullet";
import palette from "../theme/palette";const useStyles = makeStyles(theme => ({
  root: {
    padding: 0
  },
  content: {
    padding: 0
  },
  head: {
    backgroundColor: palette.background.gray
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: "flex",
    alignItems: "baseline"
  },
  status: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: "flex-end"
  },
}));const statusColors = {
  true: "success",
  false: "danger"
};const TableComponent = props => {const { className, query, cubejsApi, ...rest } = props;const classes = useStyles();const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);const tableHeaders = [
    {
      text: "Cliente id",
      value: "Cliente.id"
    },
    {
      text: "Nombre",
      value: "Cliente.nombre"
    },
    {
      text: "Primer apellido",
      value: "Cliente.primer_apellido"
    },
    {
      text: "Segundo apellido",
      value: "Cliente.segundo_apellido"
    },
    {
      text: "Telefono",
      value: "Cliente.telefono"
    },
    {
      text: "Direccion Entrega",
      value: "Cliente.direccion_entrega"
    },
    {
      text: "Notificacion",
      value: "Cliente.notificacion"
    }
  ];
  const { resultSet, error, isLoading } = useCubeQuery(query, { cubejsApi });
  if (isLoading) {
    return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><CircularProgress color="secondary" /></div>;
  }
  if (error) {
    return <pre>{error.toString()}</pre>;
  }
  if (resultSet) {
    let cliente = resultSet.tablePivot();const handlePageChange = (event, page) => {
      setPage(page);
    };
    const handleRowsPerPageChange = event => {
      setRowsPerPage(event.target.value);
    };return (
      <Card
        {...rest}
        padding={"0"}
        className={clsx(classes.root, className)}
      >
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead className={classes.head}>
                  <TableRow>
                    {tableHeaders.map((item) => (
                      <TableCell key={item.value + Math.random()} 
                 className={classes.hoverable}           
                      >
                        <span>{item.text}</span>
              
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cliente.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(obj => (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={obj["Cliente.id"]}
                    >
                      <TableCell>
                        {obj["Cliente.id"]}
                      </TableCell>
                      <TableCell>
                        {obj["Cliente.nombre"]}
                      </TableCell>
                      <TableCell>
                        {obj["Cliente.primer_apellido"]}
                      </TableCell>
                      <TableCell>
                        {obj["Cliente.segundo_apellido"]}
                      </TableCell>
                      <TableCell>
                        {obj["Cliente.telefono"]}
                      </TableCell>
                      <TableCell>
                        {obj["Cliente.direccion_entrega"]}
                      </TableCell>
                      <TableCell>
                        <StatusBullet
                          className={classes.status}
                          color={statusColors[obj["Cliente.notificacion"]]}
                          size="sm"
                        />
                        {obj["Cliente.notificacion"].toString() == "true" ? 'Necesaria' : 'No necesaria'}
                       </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={cliente.length}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
          />
        </CardActions>
      </Card>
    );
  } else {
    return null
  }
};TableComponent.propTypes = {
  className: PropTypes.string,
  query: PropTypes.object.isRequired
};export default TableComponent;