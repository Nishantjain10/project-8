import React, { useEffect, useState } from 'react';
import { Client, Databases, Models } from 'appwrite';

interface User {
  name: string;
  location: string;
  expertise: string;
  email: string;
  'social-link': string;
  jobTitle: string;
  xBlueskyLink: string; // Added xBlueskyLink
}

const UserDatabasePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('67cefa6600232d73231d');

    const databases = new Databases(client);

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response: Models.DocumentList<Models.Document> = await databases.listDocuments(
          '67cefa9300301c67b71a',
          '67cefa9a001ada16cad5'
        );
        const fetchedUsers = response.documents.map((doc) => ({
          name: doc.name,
          location: doc.location,
          expertise: doc.expertise,
          email: doc.email,
          'social-link': doc['social-link'],
          jobTitle: doc.jobTitle,
          xBlueskyLink: doc.xBlueskyLink, // Added xBlueskyLink
        }));
        setUsers(fetchedUsers);
        setFilteredUsers(fetchedUsers); // Initialize filteredUsers with all users
        setError(null);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to load user data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const results = users.filter((user) =>
        Object.values(user).some(
          (value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredUsers(results);
    } else {
      setFilteredUsers(users);
    }
  }, [searchTerm, users]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Torc Dev Directory</h1>

      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border rounded-md mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <p className="text-gray-600">Loading user data...</p>}

      {error && <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4">{error}</div>}

      {!loading && !error && (
        <>
          {filteredUsers.length === 0 ? (
            <p className="text-gray-600">No users found in the database.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left border-b">Name</th>
                    <th className="px-4 py-2 text-left border-b">Job Title</th>
                    <th className="px-4 py-2 text-left border-b">Location</th>
                    <th className="px-4 py-2 text-left border-b">Expertise</th>
                    <th className="px-4 py-2 text-left border-b">Email</th>
                    <th className="px-4 py-2 text-left border-b">Social Link</th>
                    <th className="px-4 py-2 text-left border-b">X/Bluesky Link</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-2 border-b">{user.name}</td>
                      <td className="px-4 py-2 border-b">{user.jobTitle}</td>
                      <td className="px-4 py-2 border-b">{user.location}</td>
                      <td className="px-4 py-2 border-b">{user.expertise}</td>
                      <td className="px-4 py-2 border-b">
                        <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline">
                          {user.email}
                        </a>
                      </td>
                      <td className="px-4 py-2 border-b">
                        {user['social-link'] && (
                          <a
                            href={user['social-link']}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Profile
                          </a>
                        )}
                      </td>
                      <td className="px-4 py-2 border-b">
                        {user.xBlueskyLink && (
                          <a
                            href={user.xBlueskyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            X/Bluesky
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserDatabasePage;