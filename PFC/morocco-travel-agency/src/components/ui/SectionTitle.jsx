const SectionTitle = ({ subtitle, title, accent }) => {
  return (
    <div className="text-center mb-16">
      {/* Subtitle with decorative elements */}
      <div className="relative inline-block mb-4">
        <span className="relative z-10 px-4 py-1 text-primary font-medium text-sm uppercase tracking-wider">
          {subtitle}
        </span>
        <div className="absolute inset-0 bg-primary/10 rounded-full"></div>
      </div>

      {/* Main title with animated underline */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2 relative inline-block">
        {title} <span className="text-primary">{accent}</span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/30"></span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-500 hover:w-full"></span>
      </h2>

      {/* Decorative divider */}
      <div className="flex justify-center mt-6">
        <div className="w-16 h-1 bg-primary rounded-full"></div>
        <div className="w-3 h-1 bg-primary/50 rounded-full mx-1"></div>
        <div className="w-1 h-1 bg-primary/30 rounded-full"></div>
      </div>
    </div>
  );
};