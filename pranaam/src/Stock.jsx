import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Stock() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    handleStock();
  }, []);

  const handleStock = async() => {
    try {
      const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ2ODcxNzg0LCJpYXQiOjE3NDY4NzE0ODQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjQ0MmU5ZTVjLWI5MDAtNGUxOS04YjhlLWUxNTJjNjJkMDFkMyIsInN1YiI6IjIyajM0LnByYW5hbUBzamVjLmFjLmluIn0sImVtYWlsIjoiMjJqMzQucHJhbmFtQHNqZWMuYWMuaW4iLCJuYW1lIjoicHJhbmFhbSIsInJvbGxObyI6IjRzbzIyY2QwMzQiLCJhY2Nlc3NDb2RlIjoiS2pKQXhQIiwiY2xpZW50SUQiOiI0NDJlOWU1Yy1iOTAwLTRlMTktOGI4ZS1lMTUyYzYyZDAxZDMiLCJjbGllbnRTZWNyZXQiOiJUc3pRQlBjZ0RXVnBRZVNYIn0.SQqXa2c8lyq2_pOlIEEuJJiyn1wzhjeiual5r5EC_GA';
      
      const response = await fetch('http://20.244.56.144/evaluation-service/stocks', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        }
      });
      
      const data = await response.json();
      setStockData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  return (
    <div>
      <h1>Stock</h1>
    </div>
  );
}

export default Stock;