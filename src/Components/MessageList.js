import {
    Grid,
    GridList,
    GridListTile,
    Typography,
    Avatar
} from '@material-ui/core';
import {users} from '../users';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    message: {
        display: 'flex',
        gap: '2rem',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    heading: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        alignItems: 'baseline'
    },
    name: {
        fontWeight: 'bold',
    },
    attatchment: {
        width: '100%',
        height: 'auto',
    }
});

const MessageList = ({messages}) => {
    const classes = useStyles();

    return (
        <Grid item container direction='column' spacing={2}>
            {messages.map((message, idx) => {
                return (
                    <Grid className={classes.message} key={idx} item container direction='row'>
                        <Grid item xs={1}>
                            <Avatar src={users.find((user) => user.id == message.userID).avatar} />
                        </Grid>
                        <Grid className={classes.details} item container xs={10} direction='column'>
                            <Grid item className={classes.heading} direction='row'>
                                <Typography className={classes.name} variant='subtitle1'>{message.userID}</Typography>
                                <Typography variant='subtitle2'>{message.timestamp.toTimeString().split(' ')[0]}</Typography>
                            </Grid>
                            <Typography variant='body1' align='left'>{message.content.text}</Typography>
                            <Grid item container>
                                {message.content.attatchments.map((gif, idx) => (
                                    <Grid item xs={12} key={idx}>
                                        <img className={classes.attatchment} src={gif}/>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                );
            })}
        </Grid>
    );
}
 
export default MessageList;
