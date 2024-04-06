import React, { useEffect, useState } from "react";

const ReposComponent = () => {
  const [reposData, setReposData] = useState(null);

  useEffect(() => {
    const fetchReposData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/adrienvfd/repos`);
        const data = await response.json();
        setReposData(data);
      } catch (error) {
        console.error("Error fetching repositories data:", error);
      }
    };

    fetchReposData();
  }, []);

  return (
    <div>
      <h1>User Repositories</h1>
      {reposData && (
        <ul>
          {reposData.map(repo => (
            <li key={repo.id}>
              <strong>{repo.name}</strong>: {repo.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReposComponent;
