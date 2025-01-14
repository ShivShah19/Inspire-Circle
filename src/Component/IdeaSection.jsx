import { useFirebase } from "../Context/Firebase";
import Idea from "./Idea";

function IdeaSection() {
  const { userData } = useFirebase();
  // console.log(userData); 

  // Convert userData object to an array of user objects
  const users = userData ? Object.values(userData) : [];
  console.log(users.length);
  

  return (
    <div className="p-0">
      {users.length === 0 ? (
        <div class="flex justify-center">
        <div class="relative">
            <div class="h-10 w-10 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div class="absolute top-0 left-0 h-10 w-10 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
            </div>
        </div>
    </div>
      ) : (
        users.map((user, index) => (
          <Idea key={index} text={user.idea} author={user.username} />
        ))
      )}
    </div>
  );
}

export default IdeaSection;
