import {
    Grid, 
    Typography,
} from '@material-ui/core';

import MessageList from './MessageList';
import MessageCompose from './MessageCompose';

const Group = ({group, newMessage}) => {
    return ( 
        <Grid container justify='center' alignItems='center' spacing={2}>
            <Grid container item xs={12} sm={4} md={4} spacing={2} >
                <MessageList messages={group.messages}/>
                <MessageCompose newMessage={newMessage}/>
            </Grid> 
        </Grid>
    );
}
 
export default Group;