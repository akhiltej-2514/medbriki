import "./App.css";
import { db } from "./firebase";
import { uid } from "uid";
import { set, ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import axios from "axios"
import Display from "./Display";
import Stack from '@mui/material/Stack';
function App() {
 
	const [todos, setTodos] = useState([]);
	const [posts, setPosts] = useState([]);
	const [load, setLoad] = useState(true);
	const [search, setSearch] = useState("");
	const appi=[]
     setTimeout (() => setLoad(false),3000);
    
	useEffect(() => {
    setInterval(loadPost,60000);
		onValue(ref(db), (snapshot) => {
		  setTodos([]);
		  const data = snapshot.val();
		  if (data !== null) {
			Object.values(data).map((todo) => {
			  setTodos((todos) => [...todos, todo]);
			});
		  }
		}
		);
	  }, []);
	

  const handleTodoChange = (e) => {
	setSearch(e.target.value);
  };



const loadPost = async () => {
	const response = await axios.get(
`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=cricket&type=vedio&order=date&publishedAfter=2022-12-01T21:44:35Z&key=AIzaSyCyEipPji-1T_nhuiSdr1EAcRwMPKgLVwk`)		
setPosts(response.data.items)
response.data.items.map((items)=>
{
   appi.push(createData(items.snippet.publishedAt,items.snippet.title,items.snippet.description));
}
 )
  writeToDatabase();
  console.log("Database updates..every 1min! Api exhaust too quickly for 10secs")
}

  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, '/'), {
      appi,
	  uuid
    });
  };

  function handle(){
	  
  }


function createData(Time,Title,Description) {
    return {Time,Title,Description};
  }
  

return (
    <div className="App">
    <h1>Medbriki</h1>
    <h3>Automatically updates for every 1min</h3>
	{load ? <h1>Loading...</h1> : <Display rows={todos[0]} />}
	<Stack
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
    </Stack>
    </div>
  );
}

export default App;

