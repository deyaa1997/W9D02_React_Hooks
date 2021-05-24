import React, {useState} from "react";

// jsx
const App = () => {

  const [posts, setPosts] = useState([{userId:2,id:101, title:"dd", body:"dd"},{userId:3,id:102, title:"ff", body:"ff"}])
  const render = posts.map((elem , i)=>{
    return (<div><h1 key={i}>{elem.title}</h1>
      <p key={i+10}>{elem.body}</p></div> )
  })
  const [userId,setuserId] = useState(2)
  const [id,setid] = useState(101)
  const [title,settitle] = useState("food")
  const [body,setbody] = useState("broasted")

  return (
    <div>
      <h1>Blog App</h1>
      {render}
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
      <button>Click To Change</button>
    </div>
  );
};

export default App;
