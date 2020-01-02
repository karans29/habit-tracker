import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	}
}))

function App() {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Header></Header>
		</div>
	);
}

export default App;
