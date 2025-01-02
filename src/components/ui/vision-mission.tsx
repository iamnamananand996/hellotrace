/* eslint-disable @next/next/no-img-element */

export default function VisionMission() {
  return (
    <section className="w-full px-4 py-16 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr] md:gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
              We are building{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#9444c9] bg-clip-text text-transparent">
                customer feedback intelligence Towards Thoughtful Data-Centric
                Organization
              </span>
            </h1>
            <div className="space-y-4">
              <p className="text-lg text-gray-400 md:text-xl">
                We want to empower thoughtful analytical operating cultures.
                Particularly, we want to help the analysts and analytical
                operators, who toil day-to-day with increasing volumes of
                observational data to design metric goals, understand drivers
                and connections, run experiments, and propel performance.
              </p>
              <p className="text-lg text-gray-400 md:text-xl">
                There has been talk about everyone learning to code. In reality,
                data is whats becoming ubiquitous in our jobs, and the orgs that
                invest in how data and business teams collaborate will thrive.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <img
              src={`/assets/vision.svg`}
              alt="Vision Mission Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
