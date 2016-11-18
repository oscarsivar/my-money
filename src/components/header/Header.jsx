import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};


const Header = () => (
    <AppBar 
        title={<a style={{textDecoration: 'none', color: 'white'}} href='/'><span style={styles.title}>My money</span></a>}
    	onTitleTouchTap={handleTouchTap}
        iconElementRight={<FlatButton style={{color: 'white'}}label="Username" />}
        />
);

export default Header;
