import React, {useState} from "react";

// jsx
const App = () => {

  const [posts, setPosts] = useState([{userId:2,id:101, title:"dd", body:"dd"},{userId:3,id:102, title:"ff", body:"ff"}])
  const title = posts.map((elem , i)=>{
    return (<div><h1>{elem.title}</h1>
      <p>{elem.body}</p></div> )
  })


  return (
    <div>
      <h1>Blog App</h1>
      {title}
    </div>
  );
};

export default App;
