import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="body-content">
        {
        <h1 className="animate__animated  animate__bounce  home-content"> Hi </h1>}
        <h1 className="animate__animated animate__bounce   home-content">
          I'm Archana K
        </h1>
        <h1 className="animate__animated animate__bounce   home-content">
          Full Stack Web Developer
        </h1>
        <br />
                  
        <button className="btn btn-resume">
          <a href={"https://doc-14-bg-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/u8ao59gg8vva1c9hjq339376t83qsah7/ldp3dd0p3g9i3henhqb4ku1tsf3ff4m8/1687621950000/3/116756872684038191117/APznzaY5AgBmriPYrQk5vkAp1v1_yVL3F4Ode7uNk9s15m1ijfxFsu3NIQr_b-btQS6-7ezwLrwocjQb9WC5BM0_Z6NJslqLyfEuoyaSxOSZ4OkDKAUFf55aABGHeZ-S-xCfUSZlmuiOmnL2GM5SgIlcpdDCcRyWu-o0maFyqTdegZBpKVjeSxpuSsAhO5237UeAeNd1047dG8sTnyzACbCw1YqQo4oxGg_yHvGe83vpGxqmHaqzwVFXg9D5NM50_cRAJs9I67QF30vNix6IQANHaxCYf3zRkM8nSLf4EnU2wF3AuTNYCLuyd7Pel25OQADVvBsucslz_gXkIYOcwnmFZPKRZLMnAzbF6QSKLG75ogdUMonfxot5ad4anGxLyuUNlBWSZPJujsNs1DYRCvo2CAgY9qvpKQ==?authuser=0&nonce=p68u3f5d9qe08&user=116756872684038191117&hash=tssqjj7boj1gqlvpv4dia1059rmlthhc"}
          target="_blank"
          rel="noopener noreferrer" 
          >
            Resume
          </a>
        </button>
      </div>
      </div>
  );
};
export default Home;


