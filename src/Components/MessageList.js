import {
    Grid, 
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
    }
});

const MessageList = ({messages}) => {
    const classes = useStyles();

    return (
        <Grid item container direction='column' spacing={2}>
            {messages.map((message, idx) => {
                return (
                    <Grid className={classes.message} key={idx} item container direction='row'>
                        <Avatar src={users.find((user) => user.id == message.userID).avatar} />
                        <div className={classes.details}>
                            <div className={classes.heading}>
                                <Typography className={classes.name} variant='subtitle1'>{message.userID}</Typography>
                                <Typography variant='subtitle2'>{message.timestamp.toTimeString().split(' ')[0]}</Typography>
                            </div>
                            <Typography variant='body1'>{message.content.text}</Typography>
                        </div>
                    </Grid>
                );
            })}
        </Grid>
    );
}
 
export default MessageList;
