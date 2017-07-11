import React, { Component } from 'react';
// import {Col, Accordion, Panel} from 'react-bootstrap';
import './coin.css';
import axios from 'axios';

const Coin = props => (
  <div className='coin-card'>
    <h6>{props.coins[key].CoinName}</h6>
  </div>
);

export default Coin;
