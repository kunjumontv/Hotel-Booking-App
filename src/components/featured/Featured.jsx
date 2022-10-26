import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://i2-prod.dublinlive.ie/incoming/article11970684.ece/ALTERNATES/s615/dublin-housesPNG.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://i2-prod.dublinlive.ie/incoming/article11970684.ece/ALTERNATES/s615/dublin-housesPNG.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://i2-prod.dublinlive.ie/incoming/article11970684.ece/ALTERNATES/s615/dublin-housesPNG.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
