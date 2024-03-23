export default function HeroSection () {
    return (
        <section id="herosection" className="hero--section">
          <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hey there</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">I am Oluwatobiloba</span>{" "}
                    <br />
                    Front End Developer
                </h1>
                <p className="hero--section-description">
                    I am a skilled, open-minded and passionate Web Designer and kin to Front-End Development
                    <br /> with good touch on CSS Library, JavaScript, React Js and other Front-End Development tools.
                </p>
            </div>
            <button className="btn btn-primary">Hire me</button>
          </div>
          <div className="hero--section--img">
            <img src="./img/Tobi_img.png" alt="Hero Section" />
          </div>
        </section>
    )
}