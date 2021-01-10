import React from "react";
import {Typography} from "@material-ui/core";

export default function Header(props) {
  return (
      <header className="App-header">
        <Typography variant="h4" >
          <span>{props.text}</span>
        </Typography>
      </header>
  );
};