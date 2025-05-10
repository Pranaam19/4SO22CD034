import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import './App.css';



function Trade() {
    const [tradeData, setTradeData] = useState([]);
    const [tradeId, setTradeId] = useState("");
    const [tradeType, setTradeType] = useState("");

    useEffect(() => {
        handleTrade();
    }, []);
    
}