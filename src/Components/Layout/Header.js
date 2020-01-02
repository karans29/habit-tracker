import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	// menuButton: {
	//   marginRight: theme.spacing(2),
	// },
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
	},
	title: {
		flexGrow: 1,
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<AppBar position="static" className={classes.appBar}>
				<Toolbar>
					{/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton> */}
					<Typography variant="h6" color="inherit" className={classes.title}>
						Habit Tracker Application
					</Typography>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	)
};

export default Header;