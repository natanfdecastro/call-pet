import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PetsRoundedIcon from '@material-ui/icons/PetsRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import OutdoorGrillRoundedIcon from '@material-ui/icons/OutdoorGrillRounded';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(4),
  },
  divider: {
    margin: theme.spacing(4, 0, 1),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar = (props) => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <TimelineRoundedIcon />,
    },
    {
      title: 'Clientes',
      href: '/clientes',
      icon: <SupervisorAccountRoundedIcon />,
    },
    {
      title: 'Mascotas',
      href: '/mascotas',
      icon: <PetsRoundedIcon />,
    },
    {
      title: 'Pedidos',
      href: '/pedidos',
      icon: <AssignmentIcon />,
    },
    {
      title: 'Alimentos',
      href: '/alimentos',
      icon: <OutdoorGrillRoundedIcon />,
    },
    {
      title: 'Proveedores',
      href: '/proveedores',
      icon: <LocalShippingRoundedIcon />,
    },
    {
      title: 'Configuración',
      href: '/configuracion',
      icon: <SettingsRoundedIcon />,
    },
  ];

  return (
    <Drawer anchor="left" classes={{ paper: classes.drawer }} onClose={onClose} open={open} variant={variant}>
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
