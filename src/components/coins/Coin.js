import React from 'react';
// import {Col, Accordion, Panel} from 'react-bootstrap';
import './coin.css';
// import axios from 'axios';

const Coin = (props) => (
  <div className='coin-container'>
    <h5>{props.coin.CoinName}</h5>
  </div>
);

export default Coin;
