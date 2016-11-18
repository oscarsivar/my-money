import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import DateIncome from 'material-ui/DatePicker';



const styles = {
  gridList: {
    overflowY: 'auto',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
};
const style = {
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};




export default class AddIncome extends React.Component {
 
 constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
          <GridList
        		cellHeight={180}
        		style={styles.gridList}      
      		>
        	<Subheader></Subheader>
      		<div style={styles.root}>
		        <FloatingActionButton style={style} 
		        onClick={this.handleOpen.bind(this)}>
		          <ContentAdd />
		        </FloatingActionButton>
     		</div>
      	</GridList> 

        <Dialog
          title="New income"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
        >
		    <TextField id="conceptIncome"
		      hintText="Type the concept"
		      floatingLabelText="Concept"
		    /><br />
		    <TextField id="amountIncome"
		      hintText="Type the amount"
		      floatingLabelText="Amount"
		    /><br /><br />
		    <DateIncome />
        </Dialog>
      </div>
    );
  }
}     
