import WeeklyCalendar from '../components/WeeklyCalendar';
import QuickLinks from '../components/QuickLinks';
import GetInvolved from '../components/GetInvolved';
import MainCarousel from '../components/carousel/MainCarousel';
import TheTeam from '../components/TheTeam';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome Home!</h2>

        {/* RSS Ticker */}
        <div style={{ position: 'relative', width: '100%', height: '50px', overflow: 'hidden' }}> {/* Set a fixed height and hide overflow */}
          <iframe
            src="https://rss.app/embed/v1/ticker/yVNdgL3YxmVflzqi" 
            frameBorder="0"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            title="RSS Ticker"
            scrolling="no" // Disable scrolling
          ></iframe>
        </div>

        

        <div className="my-11">
            <MainCarousel />
          </div>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto text-left mb-2">
      Hey friends! Think of us as your "home base" for your career journey. We know the path can be tough and sometimes lonely, but that’s why we’re here, to have your back in the hard times and cheer you on in the good ones.💛
      </p>

      <p className="text-xl text-gray-600 max-w-2xl mx-auto text-left mb-2">
        That’s why we say <b>Welcome Home</b>. If you ever need support, don’t hesitate to reach out. We’re so glad you’re here!
      </p>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">         Best, Taylor</p>
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Torc Community Team</h2>
        <p className="text-gray-600 mb-8">
          Meet your new friends
        </p>
        <TheTeam />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
        <p className="text-gray-600 mb-8">
          View our calendar below to see all upcoming community events and activities.
        </p>
        <WeeklyCalendar />
      </section>

      <QuickLinks />
      <GetInvolved />

      <section className="bg-white rounded-lg shadow-lg p-8 my-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
        <p className="text-gray-600">
          Need help? Reach out to our community team on{' '}
          <a
            href="https://discord.gg/ZA8Gj95dbj"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Discord
          </a>
        </p>
      </section>
    </div>
  );
}