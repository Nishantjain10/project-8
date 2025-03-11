import { Link } from 'react-router-dom';
import { Users, MessageSquare } from 'lucide-react';

const GetInvolved = () => {
  return (
    <div className="p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Community Projects</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/mentorship" className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Mentorship Program</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Connect with experienced mentors in your field</p>
              </Link>
            </li>
            <li>
              <Link to="/ambassador" className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Ambassador Program</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Represent our community and help it grow</p>
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Discussion Forums</h3>
          <ul className="space-y-4">
            <li>
              <a href="https://discord.gg/8N3PZu8yE3" className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors">
                <div className="flex items-center mb-2">
                  <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Technical Discussions</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Share knowledge and solve problems together</p>
              </a>
            </li>
            <li>
              <a href="https://discord.gg/m4NnuZGpjj" className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors">
                <div className="flex items-center mb-2">
                  <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Career Development</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Discuss career growth and opportunities</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;