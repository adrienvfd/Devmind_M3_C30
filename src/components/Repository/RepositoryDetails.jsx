import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RepositoryDetails = () => {
  const { repositoryName } = useParams();
  const navigate = useNavigate();
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/adrienvfd/${repositoryName}`);
        if (response.ok) {
          const data = await response.json();
          setRepoDetails(data);
        }
      } catch (error) {
        console.error("Error fetching repository details:", error);
      }
    };

    fetchRepoDetails();
  }, [repositoryName]);

  return (
    <div>
      <h1>Repository Details</h1>
      {repoDetails ? (
        <div>
          <p>Name: {repoDetails.name}</p>
          <p>Description: {repoDetails.description}</p>
          {/* Add more details if needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RepositoryDetails;
