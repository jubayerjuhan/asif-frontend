import React, { Component } from "react";
import { client } from "../../client.js";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    client.get("/orders").then((res) => {
      console.log(res.data);
      this.setState({
        orders: res.data,
      });
    });
  }

  render() {
    if (this.state.orders.length <= 0) return <></>;
    else
      return (
        <table class="table p-4">
          <thead>
            <tr>
              <th scope="col">Order Id</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((order, key) => {
              if (!order.user || !order.total) return <></>;
              console.log(order);
              return (
                <tr key={key}>
                  <th scope="row">{order._id}</th>
                  <td>{order.user.firstName}</td>
                  <td>{order.user.email}</td>
                  <td>{order.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
  }
}

export default Orders;
