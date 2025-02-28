import WeeklyCalendar from '../components/WeeklyCalendar';
import QuickLinks from '../components/QuickLinks';
import GetInvolved from '../components/GetInvolved';
import TheTeam from '../components/TheTeam';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black dark:text-gray-200 mb-4">Welcome Home!</h2>

      <div className="my-11" style={{ display: 'flex', justifyContent: 'center' }}>
     <img src="https://i.postimg.cc/Bbgn6LkH/fefe.png" alt="community team image" />
          </div>
      <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto text-left mb-2">
      Hey friends! Think of the <a href="https://torc.dev" target="_blank" rel="noopener noreferrer" className="text-blue-700">Torc community</a>  as your "home base" for your career journey. We know the path can be tough and sometimes lonely, but that’s why we’re here, to have your back in the hard times and cheer you on in the good ones.💛
      </p>
      <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto text-left mb-2">
        That’s why we say <b>Welcome Home</b>. If you ever need support, don’t hesitate to reach out. We’re so glad you’re here!
      </p>
        <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">         Best, Taylor</p>
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Torc Community Team</h2>
        <p className="text-gray-600 dark:text-gray-200 mb-2">
          Meet your new friends
        </p>
        <TheTeam />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Upcoming Events</h2>
        <p className="text-gray-800 dark:text-gray-200 mb-2">
          View our calendar below to see all upcoming community events and activities.
        </p>
        <WeeklyCalendar />
      </section>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 my-8">Get In Touch</h2>
      <QuickLinks />
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 my-8">Get Involved</h2>
      <GetInvolved />
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 my-5">Anything Else</h2>

      <section className="bg-white rounded-lg shadow-2xl  p-8 my-8">
        <p className="text-gray-600">
          Need help? Reach out to our community team on{' '}
          <a
            href="https://www.torc.dev/discord"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Discord
          </a>
        </p>
      </section>
    </div>
  );
}