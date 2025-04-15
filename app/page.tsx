import Discover from "@/components/Discover";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main className="">
      <section className="pt-20 md:pt-40 px-4 sm:px-8 md:px-16 lg:px-24 bg-[url('/images/vibeConnectHero.svg')] bg-cover min-h-screen bg-no-repeat">
        <div className="text-white w-full md:w-7/12 mt-12 md:mt-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Discover, Connect & Elevate Your Music Journey
          </h2>
          <p className="text-lg sm:text-xl font-normal my-4 sm:my-6">
            Explore new artists, Connect with fans and industry professionals
            and take your talent to the next level.
          </p>
          <button type="button" className="btn px-4 sm:px-6">
            Start Free Trial
          </button>
        </div>
      </section>

      <Discover />
      <Faq />

      <section className="bg-[url('/images/joinBg.svg')] bg-cover min-h-[400px] bg-no-repeat text-white px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-24">
        <div className="w-full md:w-10/12 lg:w-8/12 mx-auto">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 md:mb-24 text-center">
            Join a Community of 500+ artists and music lovers today
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10 w-full mx-auto">
            <button type="button" className="btn w-full">
              Sign up as an artist
            </button>
            <button type="button" className="btn w-full">
              Discover Artists
            </button>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}
