function About() {
  const imageUrl = "https://static.wixstatic.com/media/ea6ac8_247ebd0a86cb4cb5a447048039dc0b3a~mv2.png/v1/fill/w_980,h_560,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ea6ac8_247ebd0a86cb4cb5a447048039dc0b3a~mv2.png"
  return (
    <div className="container">
      <h2>About</h2>
      <p>
        Hi there, this is an amazing website to access some personal yet private
        data of celebrities famous throughout the globe. I would encourage you
        to report any mis-information if found on this site. We value your
        support and we highly encourrage you to be go through this website
      </p>
      <img style={{width: '100%'}} src={imageUrl} alt="This img is not available" />
    </div>
  );
}

export default About;
