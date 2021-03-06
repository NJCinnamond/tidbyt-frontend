import { makeStyles } from "@material-ui/core";
import { Body } from '../body/bodyComponent';

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.common.white,
        textAlign: "center",
    }
}))

export const Main = () => {
    const classes = useStyles();
    return (
        <>
            <h1 className={classes.title}>Tidbyt Frontend</h1>
            <Body />
        </>

    )
}