import WeeklyCalendar from '../components/WeeklyCalendar';
import QuickLinks from '../components/QuickLinks';
import GetInvolved from '../components/GetInvolved';
import TheTeam from '../components/TheTeam';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[50vh] overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-gradient-to-r from-rose-100/50 to-teal-100/50 dark:from-rose-500/10 dark:to-teal-500/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-gradient-to-l from-indigo-100/50 to-purple-100/50 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl opacity-60"></div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center py-12 md:py-16">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column - Content */}
            <div className="relative z-10 text-left lg:pr-12">
              <div className="space-y-8 md:space-y-8">
                <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-indigo-50 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-300 text-base font-medium">
                  <span className="text-xl">👋</span>
                  <span>Welcome to Torc Community</span>
                </div>
                
                <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[4.5rem] font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight max-w-2xl">
                  <div className="flex whitespace-nowrap mb-4">
                    <span>Your tech journey</span>
                  </div>
                  <div className="flex whitespace-nowrap">
                    <span>starts </span>
                    <span className="ml-4 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-[#8B5CF6] dark:to-[#6366F1]">right here</span>
                  </div>
                </h1>

                <div className="bg-white/90 dark:bg-[#1E293B]/40 backdrop-blur-sm p-8 rounded-2xl shadow-sm space-y-6 mt-12 border border-gray-100 dark:border-gray-800">
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Hey friends! Think of the <a href="https://torc.dev" target="_blank" rel="noopener noreferrer" className="relative inline-block group">
                      <span className="text-indigo-600 dark:text-[#8B5CF6] font-medium">Torc community</span>
                      <span className="absolute bottom-0 left-0 w-full h-px bg-indigo-600/30 dark:bg-[#8B5CF6]/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </a> as your "home base" for your career journey.
                  </p>
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    We know the path can be tough and sometimes lonely, but that's why we're here, to have your back in the hard times and cheer you on in the good ones. 💛
                  </p>
                </div>

                <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-300 pt-4">
                  <span className="text-xl italic font-light">Best, Taylor</span>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative lg:h-[650px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl transform rotate-2"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-rose-50 to-teal-50 dark:from-rose-950/30 dark:to-teal-950/30 rounded-3xl transform -rotate-2"></div>
              
              <div className="relative w-full max-w-xl mx-auto group">
                <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800 p-4 transform transition-transform duration-500 hover:scale-[1.01] hover:rotate-1">
                  <img 
                    src="https://i.postimg.cc/Bbgn6LkH/fefe.png" 
                    alt="community team image"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-900 dark:to-purple-900 rounded-full opacity-50 blur-lg"></div>
                <div className="absolute -left-6 -top-6 w-40 h-40 bg-gradient-to-r from-rose-200 to-teal-200 dark:from-rose-900 dark:to-teal-900 rounded-full opacity-50 blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 text-transparent bg-clip-text mb-4">
              Torc Community Team
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Meet your new friends
            </p>
          </div>
          <div>
            <TheTeam />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl pb-4 md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 text-transparent bg-clip-text mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              View our calendar below to see all upcoming community events and activities.
            </p>
          </div>
          <div>
            <WeeklyCalendar />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 text-transparent bg-clip-text mb-4">
              Get In Touch
            </h2>
          </div>
          <div className="bg-transparent">
            <QuickLinks />
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 text-transparent bg-clip-text mb-4">
              Get Involved
            </h2>
          </div>
          <div className="bg-transparent">
            <GetInvolved />
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 text-transparent bg-clip-text mb-4">
              Need Help?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Reach out to our community team on{' '}
              <a
                href="https://www.torc.dev/discord"
                className="relative inline-block group/link"
              >
                <span className="relative z-10 font-medium bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 text-transparent bg-clip-text">
                  Discord
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 transform origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}