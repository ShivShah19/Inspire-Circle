import React, { useContext } from "react";
import Idea from "./Idea";
import { AppContext } from "../App";
function IdeaSection() {
    const {user} = useContext(AppContext)
    console.log(user);
    
    
      return (
        <div className="p-0">
          {user.map((item) => (
            <Idea key={item.id} text={item.idea} author={item.username} />
          ))}
        </div>
      );
}

export default IdeaSection;
