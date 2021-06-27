import {
    Grid, 
    Typography
} from '@material-ui/core';

const MessageList = ({messages}) => {

    return (
        <Grid item container direction='column'>
            {messages.map((message, idx) => {
                return (
                    <Typography key={idx}>{message.content.text}</Typography>
                );
            })}
        </Grid>
    );
}
 
export default MessageList;
