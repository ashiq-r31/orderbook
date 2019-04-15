import React from "react";

function OrderTableRows({ orders, themeColor }) {
  return orders.slice(0, 6).map((order, i) => (
    <div className="row" key={i}>
      <div className="column text-left">
        <p className={themeColor}>{order.price}</p>
      </div>
      <div className="column text-center">
        <p>{order.quantity.toFixed(6)}</p>
      </div>
      <div className="column text-right">
        <p>{(order.price * order.quantity).toFixed(2)}</p>
      </div>
    </div>
  ));
}

export default OrderTableRows;
