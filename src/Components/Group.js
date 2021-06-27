import {
    Grid, 
    Typography
} from '@material-ui/core';
import MessageList from './MessageList';
import MessageCompose from './MessageCompose';

const Group = ({group, newMessage}) => {
    return ( 
        <Grid container item xs={12}>
            <MessageList messages={group.messages}/>
            <MessageCompose newMessage={newMessage}/>
        </Grid> 
    );
}
 
export default Group;