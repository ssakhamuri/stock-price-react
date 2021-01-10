import React, { useState } from "react";
import {Button, makeStyles, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '15ch',
    },
  },
  button : {
    margin : theme.spacing(3),
  }
}));

export default function Search(props) {
  const classes = useStyles();
  const [symbolValue, setSymbolValue] = useState(undefined);

  const updateSymbolValue = (e) => {
    setSymbolValue(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (symbolValue) {
      props.symbol(symbolValue);
    } else {
      props.error();
    }

  }
  
  return (
      <form className={classes.root} autoComplete="off">
        <TextField
            label="Required *"
            id="symbolValueId"
            size="small"
            placeholder="Stock Symbol..."
            variant="outlined"
            value={symbolValue || ''}
            onChange={updateSymbolValue}
        />
        <Button variant="contained"
                color="primary"
                size="medium"
                id ="submitButton"
                className={classes.button}
                onClick={handleSubmit}>
          Submit
        </Button>
      </form>
  );
}