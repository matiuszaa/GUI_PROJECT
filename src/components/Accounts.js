import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './Accounts.css'
import { Typography } from '@mui/material';

export class Accounts extends React.Component {




  render() {
    let accounts = Object.keys(this.props.linkedAccounts)
    return (
      <div>
        <div className='CustomRoot' />
        <AppBar position="static">
          <Tabs
            className='CustomSelectedTab'
          >
            {accounts.map((account) => (
                <Tab
                  key={account}
                  value={account}
                  label={<Typography variant="account">{account}</Typography>}
                  onClick={this.handleFieldChange}
                />
              ))}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

