import { useState, useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Data fetch async function
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1",
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Call the function
    fetchUserData();
  }, []);

  // 1. Loading state එක check කිරීම
  if (loading) return <p>Loading...</p>;

  // 2. Data ලැබුණේ නැත්නම් හෝ error එකක් ආවා නම් පෙන්වන කොටස
  if (!user) return <p>No user data found!</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfile;
