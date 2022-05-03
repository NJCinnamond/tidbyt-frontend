import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: { spacing: (arg0: number) => any; }) => ({
    container: {
        display: 'flex',
        padding: theme.spacing(4),
        justifyContent: 'flex-end',
        gap: theme.spacing(1),
    }
}));

export const Header = () => {
    const classes = useStyles();

    // TODO: build out auth and move into separate component
    const isLoggedIn = false;

    return (
        <div className={classes.container}>
            <div>
                {isLoggedIn ? (
                    <Button color="primary" variant="contained">Logout</Button>
                ) : (
                    <Button color="primary" variant="contained">Login</Button>
                )}
            </div>
        </div>
    );
}