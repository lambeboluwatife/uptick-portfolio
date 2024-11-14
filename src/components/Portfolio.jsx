import portfolios from "../data/portfolio";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="heading">PORTFOLIO</h1>
      <h3>
        From concept to deployment, each project I build is designed to solve
        real-world problems with a mix of creativity and technical expertise.
        Here’s a look at how I approach each step of development.
      </h3>

      <div className="grid">
        {portfolios.map((portfolio) => (
          <div className="work" key={portfolio.id}>
            <h3>{portfolio.name}</h3>
            <h6>{portfolio.skills}</h6>
            <h6>{portfolio.desc}</h6>
            <img src={portfolio.image} alt={portfolio.name} />
            <div className="link">
              <a href={portfolio.live} target="_blank" rel="noreferrer">
                Live Site
              </a>
              <a href={portfolio.source} target="_blank" rel="noreferrer">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
