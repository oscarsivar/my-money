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

const incomesData = [
    {
        concept: 'Salario',
        amount: 500,
        date: '30-01-16'
    },
    {
        concept: 'Alquiler',
        amount: 200,
        date: '15-01-16'
    },
    {
        concept: 'Deuda',
        amount: 20,
        date: '05-01-16'
    }
];

const ListIncome = () => (

  <div style={styles.root}>
    <Paper zDepth={2} style={{minWidth: 400}}>
        <Divider inset={true} />
        <List>
            {incomesData.map((tile) => (

                    <ListItem style={{}}
                              insetChildren={true}
                              primaryText={tile.concept}
                              secondaryText={tile.amount}
                    />

            ))}

        </List>
    </Paper>

</div>

);

export default ListIncome;
