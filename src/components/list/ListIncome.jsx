import React from 'react';
import AddIncome from '../income/AddIncome.jsx'



import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';




const style = {
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
};


const ListIncome = () => (

  <div style={styles.root}>
      
      <AddIncome />
      <Divider />
      <List>
        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
        <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
        <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
      </List>


  </div>      

);


export default ListIncome;