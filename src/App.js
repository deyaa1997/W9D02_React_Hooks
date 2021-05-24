import React, {useState , useEffect} from "react";
import axios from "axios";

// jsx
const App = () => {

  const [posts, setPosts] = useState([{userId:2,id:101, title:"dd", body:"dd"},{userId:3,id:102, title:"ff", body:"ff"}])
  const [userId,setuserId] = useState(0)
  const [id,setid] = useState(0)
  const [title,settitle] = useState("")
  const [body,setbody] = useState("")
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      console.log(res.data)
      setPosts([...posts, ...res.data]);
    });
    // an empty array dependency means there is no dependencies which will result in running the function once when initializing
  }, []);
  const render = posts.map((elem , i)=>{
    return (<div key={i}><h1 >{elem.title}</h1>
      <p >{elem.body}</p></div> )
  })
  return (
    <div>
      <h1>Blog App</h1>
      
      <input type="number" placeholder="userId" onChange={(e)=>{
        setuserId(e.target.value)
      }
      }/>
      <input type="number" placeholder="id" onChange={(e)=>{
        setid(e.target.value)
      }
      }/>
      <input type="string" placeholder="title" onChange={(e)=>{
        settitle(e.target.value)
      }
      }/>
      <input type="string" placeholder="body" onChange={(e)=>{
        setbody(e.target.value)
      }
      }/>
      <button onClick={()=>{
        setPosts([...posts,{userId , id , title , body}])
      }}>Click To Change</button>
      {render}
    </div>
  );
}

export default App;
