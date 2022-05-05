import React, { useState, useEffect } from "react";
import "./View.css";
import { Link, useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
const axios = require("axios");
const View = () => {
  const history = useHistory();
  const [ideas, setIdea] = useState(null);
  const token = window.localStorage.getItem("token");
  async function viewMore(id) {
    window.localStorage.setItem("Viewid", id);
    history.push("/checkout");
  }
  async function getIdeas() {
    let response = await axios.get(
      "http://localhost:5000/showInvestIdeaBusiness",
      {
        headers: { Authorization: token },
      }
    );
    if (response.status === 200) {
      setIdea(response.data.message);
    }
  }
  useEffect(() => {
    getIdeas();
  }, []);
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
            <li>Advisors</li>
            <li>Banker</li>
            <Link to="/view">
              <li>View Posts </li>
            </Link>
            <li>FAQ </li>
            <Link to="/showcase">
              <li>Log Out</li>
            </Link>
          </ul>
        </nav>
      </header1>
      <div className="ui search">
        <div className="ui icon input">
        <input type="text" placeholder="Search Ideas" className="prompt" />
        <i className="Search icon"></i>
        </div>
      </div>
      <div>
        <Table striped bordered hover size="sm-10">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Category</th>
              <th>Description</th>
              <th colSpan="2">INR Price</th>
            </tr>
          </thead>
          {ideas &&
            ideas.length > 0 &&
            ideas.map((idea) => {
              return (
                <tbody>
                  <tr>
                    <td>{idea.topic}</td>
                    <td>{idea.category} </td>
                    <td>{idea.description}</td>
                    <td>{idea.price}</td>
                    <td>
                      <input
                        type="button"
                        className="btn btn-primary"
                        value="View More"
                        onClick={() => {
                          viewMore(idea._id);
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </Table>
      </div>

      <footer1>
        <p>Copyright © 2021 ROI.Inc.</p>{" "}
      </footer1>
    </div>
  );
};

export default View;
