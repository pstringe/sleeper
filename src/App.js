import logo from './logo.svg';
import './App.css';
import Group from './Components/Group';

function App() {
  const groups = [
    {
        GroupID: 0,
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
              timestamp: 0
            },
            {
              userID: 'Jane', 
              content: {
                text: 'message2 from jane', 
                attatchments: []
              },
              timestamp: 1
            }
        ],
    }
]
  return (
    <div className="App">
      <Group group={groups[0]}/>
    </div>
  );
}

export default App;
