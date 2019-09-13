import React, { Component } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import axios from "axios";

class Element extends Component {
  state = {
    mouseover: false,
    currentEl: ""
  };

  componentDidMount = () => {
    axios
      .get(`https://neelpatel05.pythonanywhere.com/`)
      .then(res => console.log(res.data))
      .then(data =>
        this.setState({ currentEl: data }, () => {
          console.log(data);
          return { data };
        })
      )
      .catch(err => console.log(err));
  };

  handleOver = el => {
    this.setState({ mouseover: true, currentEl: el });
  };

  handleNotOver = el => {
    this.setState({ mouseover: false });
  };

  render() {
    return (
      <div>
        <Paper>
          <Table size="small">
            <TableHead>
              <TableRow></TableRow>
            </TableHead>
            <TableBody>
              <TableCell></TableCell>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default Element;
