import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders,setAllorders] = useState([]);
  
  useEffect(() => {
    axios.get("https://zerodha-clone-backend-dmzr.onrender.com/allOrders").then((res) => {

      setAllorders(res.data);
      console.log(res);
      
    })
  },[])
  return (
    <div className="orders">
      { orders.length===0 ? <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div> : <>
      <h3 className="title"> Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          {orders.map((stock, index) => {

            return (
              <tr key={index} className="" >
                <td> {stock.name}  </td>
                <td>{stock.qty} </td>
                <td>{stock.price} </td>
                <td> {stock.mode} </td>
              </tr>
            );
          })}
        </table>
      </div>
      
      
      
      </>}
    </div>
  );
};

export default Orders;
