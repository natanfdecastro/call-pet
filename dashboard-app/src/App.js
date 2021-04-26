import './body.css';
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from './theme';
import 'typeface-roboto'
import palette from "./theme/palette";
import React from 'react';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';
import { Main } from './layouts'
import WebSocketTransport from '@cubejs-client/ws-transport';
const API_URL = 'http://localhost:4000';
const CUBEJS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTkzMTgxNjksImV4cCI6MTYxOTQwNDU2OX0.hYkOnxm9p490EJy622daI8PbLIcX3XkWDAjjwIG6dsw';
const cubejsApi = cubejs({
  transport: new WebSocketTransport({
    authorization: CUBEJS_TOKEN,
    apiUrl: API_URL.replace('http', 'ws'),
  }),
});
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: '-8px',
    backgroundColor: palette.primary.dark,
  },
}));

const AppLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <div className={classes.root}>
          <div>{children}</div>
        </div>
      </Main>
    </ThemeProvider>
  );
};

const App = ({ children }) => (
  <CubeProvider cubejsApi={cubejsApi}>
    <AppLayout>{children}</AppLayout>
  </CubeProvider>
);

export default App;
