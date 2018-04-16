import React from "react";
import Feed from "./Feed";
import SuggestedFriends from "./SuggestedFriends";
import TopNav from "./TopNav";
import UserIconPanel from "./UserIconPanel";
import UserInfo from "./UserInfo";

function App(){
  return(
    <div>
      <TopNav/>
      <UserIconPanel/>
    </div>
  );
}

export default App;
