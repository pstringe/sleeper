import {
    Grid, 
    Typography
} from '@material-ui/core';
import MessageList from './MessageList';




const Group = ({group}) => {

    return ( 
    <Grid container xs={12}>
        <MessageList messages={group.messages}/>
    </Grid> 
    );
}
 
export default Group;