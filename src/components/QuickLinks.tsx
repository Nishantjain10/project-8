import { Link } from 'react-router-dom';
import { BookOpen, MessageCircle, Linkedin, Mail, AtSign, Twitter, CloudSun, FileTerminal, Contact, Youtube } from 'lucide-react';

const QuickLinks = () => {
  return (
    <div className="bg-white rounded-lg shadow-2xl  p-8 my-5">
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Resources</h3>
        <ul className="space-y-2">
          <li>
            <Link to="https://docs.google.com/document/d/1QXvTn7LaleLDscDlHKCnkOkYHT4bVcycJVGnI4KIxqc/edit?tab=t.0" className="flex items-center text-gray-600 hover:text-indigo-600">
              <FileTerminal className="w-5 h-5 mr-2" />
              Checkout The Resume Template!
            </Link>
          </li>
          <li>
            <Link to="/UserDatabasePage" className="flex items-center text-gray-600 hover:text-indigo-600">
              < Contact className="w-5 h-5 mr-2" />
              Friend Directory
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="flex items-center text-gray-600 hover:text-indigo-600">
              <AtSign className="w-5 h-5 mr-2" />
              About Us
            </Link>
          </li>
          <li>
            <Link to="/guidelines" className="flex items-center text-gray-600 hover:text-indigo-600">
              <BookOpen className="w-5 h-5 mr-2" />
              Community Guidelines
            </Link>
          </li>
          <li>
            <Link to="/faq" className="flex items-center text-gray-600 hover:text-indigo-600">
              <MessageCircle className="w-5 h-5 mr-2" />
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
        <ul className="space-y-2">
          <li>
            <a href="https://www.linkedin.com/company/opentorc" className="flex items-center text-gray-600 hover:text-indigo-600">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://x.com/torcdotdev" className="flex items-center text-gray-600 hover:text-indigo-600">
              <Twitter className="w-5 h-5 mr-2" />
              Twitter (X)
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@torcdotdev" className="flex items-center text-gray-600 hover:text-indigo-600">
              <Youtube className="w-5 h-5 mr-2" />
               Youtube
            </a>
          </li>
          <li>
            <a href="https://bsky.app/profile/torc.dev" className="flex items-center text-gray-600 hover:text-indigo-600">
              <CloudSun className="w-5 h-5 mr-2" />
               Bluesky
            </a>
          </li>
          <li>
            <a href="https://taylordesseyn.substack.com/" className="flex items-center text-gray-600 hover:text-indigo-600">
              <Mail className="w-5 h-5 mr-2" />
              Torc Newsletter
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default QuickLinks;