import React from 'react';
import {
  ListItemText,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow, Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  table: {
    maxWidth: 300,
    margin: "auto"
  },
  listItemText:{
    fontSize:'0.875rem',
  },
}));

export default function Stock({stock}) {
  const classes = useStyles();
  return (
      <div>
        <Paper className={classes.root}>
          <Typography variant="h6" className={classes.typography}>
            <span>{stock.companyName} ({stock.symbol})</span>
          </Typography>
          <Typography variant="h5" className={classes.typography}>
            <span>{stock.latestPrice}</span>
          </Typography>
          <TableContainer>
            <Table className={classes.table}>
             <TableBody>
                  <TableRow>
                    <TableCell component="th">Prev. Close</TableCell>
                    <TableCell align="right">{stock.previousClose}</TableCell>
                  </TableRow>
                <TableRow>
                  <TableCell component="th">Today's Open</TableCell>
                  <TableCell align="right">{stock.open}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">
                    <ListItemText classes={{primary:classes.listItemText}}
                                  primary="52-Wk Range"
                                  secondary="(low - high)"/>
                  </TableCell>
                  <TableCell align="right">${stock.week52Low} - ${stock.week52High}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">P/E Ratio</TableCell>
                  <TableCell align="right">{stock.peRatio}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
         </TableContainer>
        </Paper>
      </div>
  );
}