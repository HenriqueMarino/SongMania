import * as React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './Home';
import FetchData from './FetchData';
import Counter from './Counter';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, Divider, List, ListItem, ListSubheader, ListItemIcon, ListItemText, CssBaseline, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Menu as MenuIcon, ChevronLeft, ChevronRight, Inbox, Mail } from '@material-ui/icons';
import { Home as HomeIcon, MusicNote, LibraryMusic, Album } from '@material-ui/icons';
import './css/Drawer.css';

const icons = [MusicNote, LibraryMusic, Album];
const appRoutes = ["/counter", "/fetch-data/:startDateIndex?"];
const drawerWidth = 240;

const customTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            backgroundColor: '#1976d1',
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);



export const MiniDrawer: React.FunctionComponent = () => {
    const state = {
        isOpen: false
    }
    const classes = useStyles('');
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        state.isOpen = true;
    };

    const handleDrawerClose = () => {
        setOpen(false);
        state.isOpen = false;
    };

    return (
        <MuiThemeProvider theme={customTheme}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            SongMania
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button key="Home" component={Link} to="/">
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Home" className="listText" />
                        </ListItem>
                    </List>
                    <Divider />
                    <Divider />
                    <List subheader={<ListSubheader hidden={true} component="div" id="nested-list-subheader">Recommendations</ListSubheader>}>
                        {['Songs', 'Playlists', 'Albums'].map((text, index) => (
                            <ListItem button key={text} component={Link} to={appRoutes[index]}>
                                <ListItemIcon>{React.createElement(icons[index])}</ListItemIcon>
                                <ListItemText primary={text} className="listText" />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    {/*{<List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text} >
                                <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                                <ListItemText primary={text} className="listText" />
                            </ListItem>
                        ))}
                    </List>*/}
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Route exact path='/' component={Home} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
                </main>
            </div>
        </MuiThemeProvider>
    );
}