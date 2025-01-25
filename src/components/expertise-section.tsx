const expertiseItems = [
  {
    number: "01",
    title: "UI/UX DESIGNER",
    description: [
      "Creating Intuitive User Interfaces That Enhance Interaction.",
      "Focusing On User Needs To Deliver Exceptional Experiences."
    ]
  },
  {
    number: "02",
    title: "BRANDING",
    description: [
      "Building Emotional Connections That Foster Brand Loyalty.",
      "Empowering Businesses To Stand Out In A Crowded Market."
    ]
  },
  {
    number: "03",
    title: "DEVELOPMENT",
    description: [
      "Developing Intuitive Platforms For Seamless Interaction.",
      "Combining Creativity With Technical Expertise."
    ]
  }
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="mt-32 px-6 md:px-12 lg:px-24 pb-24">
      <h2 className="text-5xl md:text-6xl font-bold mb-16">
        OUR SERVICE<br />EXPERTISE
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {expertiseItems.map((item, index) => (
          <div key={index}>
            <span className="text-sm text-gray-500">({item.number})</span>
            <h3 className="text-xl font-bold mt-4 mb-6">{item.title}</h3>
            <p className="text-gray-400">
              {item.description[0]}<br /><br />
              {item.description[1]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 