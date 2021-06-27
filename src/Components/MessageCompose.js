import {
    Grid, 
    Input,
    Typography,
    Button
} from '@material-ui/core';
import {useEffect, useState} from 'react';
import Giphy from './Giphy';

const MessageCompose = ({newMessage}) => {
    const [messageText, setMessageText] = useState('');
    const [messageAttatchments, setMessageAttachments] = useState([]);
    const [trending, setTrending] = useState(null);

    useEffect(() => {
        console.log(messageAttatchments);
    }, [messageAttatchments])

    const updateMessageText = (text) => {
        setMessageText(cur => text);
    };

    const updateMessageAttachments = (attatchment) => {
        setMessageAttachments(cur => [...cur, attatchment]);
        console.log('updated')
    }

    const submit = (e) => {
        e.preventDefault();
        newMessage('John', messageText, messageAttatchments);
        setMessageText('');
        setMessageAttachments([]);
    }
    
    const API_KEY = 'Awq5410QQl0416nJogqlsinldM2s9PCA';
    const BASE_URL = 'https://api.giphy.com/v1/gifs/trending';

    const showGIFY = () => {
        fetch(`${BASE_URL}?api_key=${API_KEY}&limit={}`).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setTrending(data.data);
        })
    }

    const select = (url) => {
        updateMessageAttachments(url);
    }
 
    const close = () => {
        setTrending(null);
    }

    return (
        <Grid item container justify='center'>
            <Grid item>
            <form onSubmit={(e) => submit(e)}>
                <Input
                    fullWidth
                    value={messageText}
                    onChange={(e) => updateMessageText(e.target.value)}
                />
                <Button onClick={showGIFY}>GIF</Button>
            </form>
           </Grid>
            <Grid item container direction='column' spacing={2}>
                {messageAttatchments.map((url) => (
                    <Grid item>
                        <img src={url}/>
                    </Grid>
                ))}
            </Grid>
            {trending !== null && <Giphy gifs={trending} select={select} close={close}/>}
        </Grid>
    );
}
 
export default MessageCompose;