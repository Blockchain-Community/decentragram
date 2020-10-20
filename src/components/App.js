import React, { useState } from 'react';
import Web3 from 'web3';
import Identicon from 'identicon.js';
import './App.css';
import Decentragram from '../abis/Decentragram.json'
import Navbar from './Navbar'
import Main from './Main'

export default function App() {
  const [account, setAccount] = useState('');

  return (
    <div>
      <Navbar account={account} />
      <Main/>
    </div>
  )
}
