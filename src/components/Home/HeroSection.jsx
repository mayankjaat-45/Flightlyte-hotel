import SearchBox from "../../modules/Search/SearchBox";


const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen text-white flex flex-col justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/HeroImage.jpg"
          alt="Travel Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-27 flex flex-col items-center text-center space-y-10">

        {/* Hero Heading */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Smart Trips.
            <br />
            <span className="bg-linear-to-r from-start to-end bg-clip-text text-transparent">
              Zero hassle.
            </span>
          </h1>

          <p className="text-lg text-(text-muted)">*100% Cash Booking Available</p>
        </div>

        {/* Search Card */}
        <div className="w-full">
         <SearchBox/>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;