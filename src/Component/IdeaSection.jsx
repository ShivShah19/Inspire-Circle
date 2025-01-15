import { useEffect, useState } from "react";
import { useFirebase } from "../Context/Firebase";
import Idea from "./Idea";

function IdeaSection() {
  const { userData, getData } = useFirebase();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getData();
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Convert userData object to an array of user objects
  const users = userData ? Object.values(userData) : [];
  // console.log(users);
  

  return (
    <div className="p-0">
      {loading ? (
        <div className="flex justify-center">
          <div className="relative">
            <div className="h-10 w-10 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-10 w-10 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
          </div>
        </div>
      ) : users.length === 0 ? (
        <div className="flex justify-center text-gray-500">No ideas to display.</div>
      ) : (
        users.map((user, index) => (
          <Idea key={index} id={user.key} text={user.idea} author={user.username} count={user.count} />
        ))
      )}
    </div>
  );
}

export default IdeaSection;
