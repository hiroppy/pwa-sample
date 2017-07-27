// App Shell

import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import styles from './app.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = { opened: false };
  }

  // handleToggle = () => {
  //   this.setState({opened: !this.state.opened});
  // }

  render() {
    const {
      children
    } = this.props;

    return (
      <MuiThemeProvider>
        <div className={styles.container}>
          <Toolbar>
            <FontIcon className="muidocs-icon-custom-sort" />
            <ToolbarTitle text="LTS" />
          </Toolbar>
          {
            children
          }
          <Drawer open={this.state.opened} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
