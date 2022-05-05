import React from "react";
import Plot from "react-plotly.js";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
    };
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = "SZCF0WYTI8IUYFUX";
    let StockSymbol = "IBM";
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;

    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        for (var key in data["Time Series (Daily)"]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
        }

        // console.log(stockChartXValuesFunction);
        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction,
        });
      });
  }

  render() {
    return (
      <div>
        <header1>
          <nav>
            <div id="logo">
              <img
                src="https://i.imgur.com/TdccLUv_d.webp?maxwidth=760&fidelity=grand"
                width="100 "
              />
            </div>
            <ul id="menu">
              <Link to="/Dashboard">
                <li>Home</li>
              </Link>
              <li>Ideas</li>
              <Link to="/Appointment">
                <li>Book Appointments </li>
              </Link>
              <Link to="/stock">
                <li>Stock </li>
              </Link>
              <li>Banker</li>
              <Link to="/view">
                <li>View Posts </li>
              </Link>
              <Link to="/Profile">
                {" "}
                <li>Profile </li>
              </Link>
              <Link to="/showcase">
                <li>Log Out</li>
              </Link>
            </ul>
          </nav>
        </header1>
        <center>
          <h1>Stock Market Analysis</h1>
          <Plot
            data={[
              {
                x: this.state.stockChartXValues,
                y: this.state.stockChartYValues,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" },
              },
            ]}
            layout={{ width: 720, height: 440, title: "IBM STOCK" }}
          />
        </center>
        <footer1>
          <p>Copyright © 2021 ROI.Inc.</p>{" "}
        </footer1>
      </div>
    );
  }
}

export default Stock;
