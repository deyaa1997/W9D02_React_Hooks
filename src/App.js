import React, {useState} from "react";

// jsx
const App = () => {

  const [posts, setPosts] = useState([{userId:2,id:101, title:"", body:""},{userId:3,id:102, title:"", body:""}])
  return (
    <div>
      <h1>Blog App</h1>
    </div>
  );
};

export default App;
