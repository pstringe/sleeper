import {
    Grid, 
    Input,
    Typography,
    TextField,
} from '@material-ui/core';
import {useState} from 'react';

const MessageCompose = ({newMessage}) => {
    const [messageText, setMessageText] = useState('');
    const [messageAttatchments, setMessageAttachments] = useState({});

    const updateMessageText = (text) => {
        setMessageText(cur => text);
    };

    const updateMessageAttachments = (attatchments) => {
        setMessageAttachments(cur => [...cur, attatchments]);
    }

    const submit = (e) => {
        e.preventDefault();
        newMessage('John', messageText, messageAttatchments);
        setMessageText('');
    }

    return (
        <Grid item container justify='center'>
            <form onSubmit={(e) => submit(e)}>
                <Input
                    value={messageText}
                    onChange={(e) => updateMessageText(e.target.value)}
                />
            </form>
        </Grid>
    );
}
 
export default MessageCompose;