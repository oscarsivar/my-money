import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../header/Header.jsx';
import ListIncome from '../list/ListIncome.jsx';
import AddIncome from '../income/AddIncome.jsx'

const Layout = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div>
    	<Header />
    	<AddIncome />
    	<ListIncome />
    </div>
  </MuiThemeProvider>
);

export default Layout;