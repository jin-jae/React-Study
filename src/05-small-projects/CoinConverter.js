import { useState, useEffect } from "react";

function CoinConverter() {
    const [loaded, setLoaded] = useState(false);
    const [coins, setCoins] = useState([]);
    const [selectedCoin, setSelectedCoin] = useState([]);
    const [inputReceive, setInputReceive] = useState(0);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoaded(true);
            });
         }, []);

    const onChange = (event) => {
        setSelectedCoin(coins[event.target.value]);
    }

    console.log(coins);

    const inputUpdate = (event) => {
        setInputReceive(event.target.value);
    }

    return (
        <div>
            <h1>Smart Coin Converter {loaded ? `(${coins.length} Coins)` : null}</h1>
            <input onChange={inputUpdate} type="number" placeholder="Enter USD"></input>
            &nbsp;&nbsp;USD to&nbsp;&nbsp;
            <select onChange={onChange}>
                <option key={-1}>Select a Coin.</option>
                {coins.map((coin, index) => (
                    <option key={index} value={index}>
                        {coin.name} ({coin.symbol})
                    </option>
                ))}
            </select>

            <div>
                {loaded && selectedCoin.length !== 0 ? (
                    <strong>With ${inputReceive}, You can buy {selectedCoin.name} about: {(1 / selectedCoin.quotes.USD.price) * inputReceive} {`${selectedCoin.symbol}`}</strong>
                ): null}
            </div>
        </div>
    )
}

export default CoinConverter;
