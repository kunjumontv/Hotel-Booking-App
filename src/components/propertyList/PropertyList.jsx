import "./propertyList.css";

import React from "react";

const propertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Hotels</h1>
          <h2>123 Properties</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://res.cloudinary.com/apartmentlist/image/upload/f_auto,q_auto,t_web-base/b92f00c5f959c25884c53efbc072e894.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Apartments</h1>
          <h2>123 apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn.ceoworld.biz/wp-content/uploads/2021/05/Soneva-Fushi.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Resorts</h1>
          <h2>2331 resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://e8rbh6por3n.exactdn.com/sites/uploads/2020/05/villa-la-gi-thumbnail.jpg?strip=all&lossy=1&ssl=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Villas</h1>
          <h2>2331 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://etimg.etb2bimg.com/photo/54562308.cms"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Cabins</h1>
          <h2>2331 cabins</h2>
        </div>
      </div>
    </div>
  );
};

export default propertyList;
