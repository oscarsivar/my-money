import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'images/payment.jpg',
    title: 'Gastos fijos',
    author: 'Agregar cuenta por pagar',
    url: '/payment'
  },
  {
    img: 'images/spend.jpg',
    title: 'Gastos variados',
    author: 'Agregar gasto',
    url: '/spend'
  },
  {
    img: 'images/income.jpg',
    title: 'Ingresos',
    author: 'Agregar ingreso',
    url: '/income'
  }
];


const List = () => (  
    <div style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}      
      >
        <Subheader></Subheader>
        {tilesData.map((tile) => (
          <a href={tile.url}>
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<b>{tile.author}</b>}
              
            >
              <img src={tile.img} />
            </GridTile>
          </a>
        ))}
      </GridList>
    </div>  
);


export default List;