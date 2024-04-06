import React, { useEffect, useState } from "react";

const HomeComponent = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/adrienvfd`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>User Details</h1>
      {userData && (
        <div>
          <p>Name: {userData.name}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <img src={userData.avatar_url} alt="User Avatar" />
        </div>
      )}
      <button onClick={() => window.location.href = '/repos'}>
        Go to Repos
      </button>
    </div>
  );
};

export default HomeComponent;
