import logo from './logo.svg';
import './App.css';
import Group from './Components/Group';
import { useState } from 'react';

class Message {
  constructor(user=null, text='', attatchments=[]){
      this.userID = user;
      this.content = {
          text,
          attatchments,
      };
      this.timestamp = new Date(Date.now());
  }
}

function App() {
  
  const [group, setGroup] = useState({
    users: [
        {userID: 'John'},
        {userID: 'Jane'}
    ],
    messages: [
        {
          userID: 'John', 
          content: {
            text: 'message1 from john', 
            attatchments: []
          }, 
          timestamp: new Date(Date.now() - 5000)
        },
        {
          userID: 'Jane', 
          content: {
            text: 'message2 from jane', 
            attatchments: []
          },
          timestamp: new Date(Date.now() - 500)
        }
    ],
  });

  const newMessage = (user, text, attatchments) => {
    console.log('message', user, text, attatchments);
    const messages = [...group.messages];
    messages.push(new Message(user, text, attatchments));
    setGroup({...group, messages});
  }

  return (
    <div className="App">
      <Group newMessage={newMessage} group={group}/>
    </div>
  );
}

export default App;
