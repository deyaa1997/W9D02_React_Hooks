import React, {useState} from "react";

// jsx
const App = () => {

  const [posts, setPosts] = useState([{userId:2,id:101, title:"dd", body:"dd"},{userId:3,id:102, title:"ff", body:"ff"}])
  const render = posts.map((elem , i)=>{
    return (<div><h1>{elem.title}</h1>
      <p>{elem.body}</p></div> )
  })
  const [userId,setuserId] = useState(2)
  const [id,setid] = useState(101)
  const [title,settitle] = useState("food")
  const [body,setbody] = useState("broasted")

  return (
    <div>
      <h1>Blog App</h1>
      {render}
      <input type="number" placeholder="userId"/>
      <input type="number" placeholder="id"/>
      <input type="string" placeholder="title"/>
      <input type="string" placeholder="body"/>
      <button>Click To Change</button>
    </div>
  );
};

export default App;
