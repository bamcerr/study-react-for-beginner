
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [select, setSelect] = useState({})
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onChange2 = (event) => {
    setSelect(event.target.value)
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setCoins(json);
      setLoading(false);
      setSelect(0)
    });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      { loading 
        ? <strong>Loading...</strong> 
        : 
          <>
            <input value={value} onChange={onChange} type="number" />$
            <br />

            <select
              value={select}
              onChange={onChange2}
            >
              {
                coins.map((coin, index) => <option value={index} key={coin.id}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>)
              }
            </select>
            
            <br />
            { value / coins[select]?.quotes?.USD.price }
          </> 
      }
      
    </div>
  )
}

export default App;
