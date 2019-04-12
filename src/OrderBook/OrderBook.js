import React, { Component } from "react";
import OrderTableRows from "../OrderTableRows/OrderTableRows";
import "./OrderBook.css";

class App extends Component {
  state = {
    asks: [],
    bids: []
  };
  realTimeUpdates;

  componentDidMount() {
    this.getRealTimeUpdates(this.getOrderBook, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.realTimeUpdates);
  }

  getRealTimeUpdates(fn, delay) {
    fn();
    this.realTimeUpdates = setInterval(fn, delay);
  }

  getOrderBook = async () => {
    const endpoint = "https://exchange.itbit.com/api/feeds/orderbook/XBTUSD";
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const json = await response.json();
      const { asks, bids } = json;
      this.setState({
        asks: this.lowestAskOrders(asks),
        bids: this.highestBidOrders(bids)
      });
    } catch (e) {
      throw new Error(e);
    }
  };

  lowestAskOrders(asks) {
    return asks.sort((a, b) => a.price < b.price);
  }

  highestBidOrders(bids) {
    return bids.sort((a, b) => a.price > b.price);
  }

  averageAskBid(asks, bids) {
    if (asks.length && bids.length) {
      const avg = (asks[0].price + bids[0].price) / 2;
      return `$ ${avg.toFixed(2)}`;
    }
  }

  render({ asks, bids } = this.state) {
    return (
      <div className="container">
        <h3 className="green">ORDER BOOK</h3>
        <div className="row">
          <div className="column text-left">
            <h4 className="grey">Price (USDT)</h4>
          </div>
          <div className="column text-center">
            <h4 className="grey">Amount (BTC)</h4>
          </div>
          <div className="column text-right">
            <h4 className="grey">Total</h4>
          </div>
        </div>
        <OrderTableRows orders={asks} themeColor="red" />
        <div className="banner">
          <h2 className="light-green">{this.averageAskBid(asks, bids)}</h2>
        </div>
        <OrderTableRows orders={bids} themeColor="light-green" />
      </div>
    );
  }
}

export default App;
