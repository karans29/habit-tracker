import React from 'react';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	}
}));

const MenuLeft = () => {
	return (
		<React.Fragment>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
				anchor="left"
			>

			</Drawer>
		</React.Fragment>
	)
};

export default MenuLeft;