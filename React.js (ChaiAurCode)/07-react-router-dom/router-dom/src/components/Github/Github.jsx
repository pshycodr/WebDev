import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Github() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchGithubProfile = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/pshycodr');
        setProfile(response.data);
      } catch (err) {
        setError('Unable to fetch GitHub profile. Please try again later.');
      }
    };

    fetchGithubProfile();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  return (
    <div className="flex justify-center items-center m-10">
      {profile ? (
        <div className="bg-gray-800 rounded-lg shadow-xl max-w-sm w-full text-white p-6 space-y-6">
          <div className="flex items-center space-x-4">
            <img
              src={profile.avatar_url}
              alt="Avatar"
              className="w-24 h-24 rounded-full shadow-md"
            />
            <div>
              <h2 className="text-2xl font-semibold">{profile.name}</h2>
              <p className="text-gray-400">@{profile.login}</p>
            </div>
          </div>

          <div className="space-y-3">
            <p>{profile.bio}</p>

            <div className="flex items-center justify-between">
              <div className="flex flex-col text-center">
                <span className="font-semibold text-lg">{profile.public_repos}</span>
                <span className="text-sm text-gray-400">Repos</span>
              </div>

              <div className="flex flex-col text-center">
                <span className="font-semibold text-lg">{profile.followers}</span>
                <span className="text-sm text-gray-400">Followers</span>
              </div>

              <div className="flex flex-col text-center">
                <span className="font-semibold text-lg">{profile.following}</span>
                <span className="text-sm text-gray-400">Following</span>
              </div>
            </div>

            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      ) : (
        <div className="text-black text-center">Loading...</div>
      )}
    </div>
  );
}

export default Github;
