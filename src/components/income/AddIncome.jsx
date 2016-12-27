import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import TimePickerExampleSimple from './DateIncome.jsx';



const styles = {
  gridList: {
    overflowY: 'auto'
  },
  root: {
    display: 'inline-block',
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

    return (
      <div>
          <GridList
        		cellHeight={180}
        		style={styles.gridList}
      		>
          	<Subheader></Subheader>
            <div id='add-income'>
              <div style={{display: 'inline-block'}}>
                <h2 style={{marginRight:24, color: 'gray', fontWeight: 100, fontSize: 36, display: 'inline-block'}}>Total</h2>
                <p style={{marginRight:24, color: 'gray', fontWeight: 100, fontSize: 36, display: 'inline-block'}}> 0.00</p>
              </div>
          		<div style={styles.root}>
      		        <FloatingActionButton style={style}
      		        onClick={this.handleOpen.bind(this)}>
      		            <ContentAdd />
      		        </FloatingActionButton>
         		   </div>
            </div>


      	</GridList>

        <Dialog
          title="New income"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
        >
            <form id="main-login" action ="/income" method="post">

                <TextField  id="conceptIncome"
                  hintText="Type the concept"
                  name="concept"
                  floatingLabelText="Concept"
                /><br />
                <TextField id="amountIncome"
                  hintText="Type the amount"
                  name="amount"
                  floatingLabelText="Amount"
                /><br /><br />

                <FlatButton
                    label="Cancel"
                    primary={true}
                    onClick={this.handleClose.bind(this)}
                />

                <FlatButton
                    type="submit"
                    label="Add"
                    primary={true}
                    keyboardFocused={true}
                    onTouchTap={this.handleClose}
                />

            </form>



        </Dialog>
      </div>
    );
  }
}
