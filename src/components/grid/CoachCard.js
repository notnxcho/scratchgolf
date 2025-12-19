const CoachCard = ({ coach, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative w-full h-[400px] lg:h-[500px] rounded-[12px] overflow-hidden cursor-pointer group shadow-[0_4px_16px_0_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_0_rgba(0,0,0,0.12)] transition-all duration-300"
    >
      {/* Background Image */}
      <img
        src={coach.mainImage}
        alt={coach.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.85) 100%)'
        }}
      />
      
      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 text-white">
        <div className="mb-2">
          <h3 className="text-[18px] lg:text-[22px] font-bold leading-tight mb-1">
            {coach.name}
          </h3>
          <p className="text-[12px] lg:text-[14px] text-white/80 uppercase tracking-wide">
            {coach.title}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/20">
          <div>
            <p className="text-[16px] lg:text-[20px] font-bold text-white">
              {coach.price}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[12px] lg:text-[14px] text-white/70">
              {coach.yearsPlaying} Years Playing
            </p>
            <p className="text-[12px] lg:text-[14px] text-white/70">
              {coach.lessonsGiven} Lessons
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoachCard

