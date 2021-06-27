import {
    Grid, 
    Typography
} from '@material-ui/core';

const MessageList = ({messages}) => {

    return (
        <Grid item container>
            {messages.map((message) => {
                return (
                    <Typography>{message.content.text}</Typography>
                );
            })}
        </Grid>
    );
}
 
export default MessageList;
