import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';



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
    <Paper zDepth={2}>
        <List>
           <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
           <Divider />
           <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
           <Divider />
           <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
           <Divider />
           <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
           <Divider />
          <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        </List>
    </Paper>
</div>    

);


export default ListIncome;