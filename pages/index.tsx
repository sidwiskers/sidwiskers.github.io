import dynamic from 'next/dynamic'
import Head from 'next/head'
import Header from '../components/Header'
import Bio from '../components/Bio'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const ParticleBackground = dynamic(() => import('../components/ParticleBackground'), {
  ssr: false,
  loading: () => null,
})

export default function Home() {
  const projects = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
        </svg>
      ),
      title: 'Fryday',
      description: 'Human alike Chatbot, you may like her',
      buttonText: 'Chat Now',
      buttonUrl: 'https://t.me/frydayybot?start',
      bgColor: 'bg-pink-900/50',
      iconColor: 'text-pink-300',
      buttonColor: 'bg-pink-500 hover:bg-pink-400',
      buttonTextColor: 'text-black',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 1a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zM4 10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zM4 5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
        </svg>
      ),
      title: 'SwitchGlitch',
      description: 'Just a "match the block" Game',
      buttonText: 'Play Game',
      buttonUrl: 'https://t.me/SwitchGlitchxBot?start',
      bgColor: 'bg-indigo-900/50',
      iconColor: 'text-indigo-300',
      buttonColor: 'bg-indigo-500 hover:bg-indigo-400',
      buttonTextColor: 'text-white',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        </svg>
      ),
      title: 'TheInsider',
      description: 'A "Who\'s the spy" type game',
      buttonText: 'Uncover Spy',
      buttonUrl: 'https://t.me/TheInsidereBot?start',
      bgColor: 'bg-teal-900/50',
      iconColor: 'text-teal-300',
      buttonColor: 'bg-teal-500 hover:bg-teal-400',
      buttonTextColor: 'text-white',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
        </svg>
      ),
      title: 'MineSweeper',
      description: 'A minimal quick MineSweeper game',
      buttonText: 'Play Game',
      buttonUrl: 'https://t.me/MinesSweepBot?start',
      bgColor: 'bg-green-900/50',
      iconColor: 'text-green-300',
      buttonColor: 'bg-green-500 hover:bg-green-400',
      buttonTextColor: 'text-black',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
        </svg>
      ),
      title: 'Sentinel',
      description: 'Telegram Moderation Bot',
      buttonText: 'Add to Group',
      buttonUrl: 'https://t.me/PaceSetterxBot?start',
      bgColor: 'bg-red-900/50',
      iconColor: 'text-red-300',
      buttonColor: 'bg-red-500 hover:bg-red-400',
      buttonTextColor: 'text-black',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
        </svg>
      ),
      title: 'Byte',
      description: 'My personal Sidekick, quite Introverted to reply',
      buttonText: 'Chat Now',
      buttonUrl: 'https://t.me/ByternBot?start',
      bgColor: 'bg-yellow-900/50',
      iconColor: 'text-yellow-300',
      buttonColor: 'bg-yellow-500 hover:bg-yellow-400',
      buttonTextColor: 'text-black',
    },
  ]

  return (
    <>
      <Head>
        <title>LastLife | Creator</title>
        <meta name="description" content="Portfolio of LastLife - Telegram bots, games, and services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ParticleBackground />

      <div className="relative min-h-screen w-full p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto">
          <Header />
          <Bio />

          <main className="w-full mx-auto my-16">
            <h2 className="text-3xl font-bold text-center mb-12 animated-gradient-text">
              My Creations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
              
              <div className="md:col-span-2 lg:col-span-3">
                <ProjectCard
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.5 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm2-2a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5zm2.5.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0V4z"/>
                      <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm-1 9a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                  }
                  title="Snatcher"
                  description="A web utility to instantly extract sticker IDs from Telegram sticker packs in Batch"
                  buttonText="Visit Tool"
                  buttonUrl="http://snatcher-v2-j1xd.vercel.app"
                  bgColor="bg-violet-900/50"
                  iconColor="text-violet-300"
                  buttonColor="bg-violet-500 hover:bg-violet-400"
                  buttonTextColor="text-white"
                  index={projects.length}
                />
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </>
  )
}
