import React, { useState } from "react";
import "./App.css";

import Cars from "./cars.json";
import Pagination from "./Components/Pagination";

function App() {
  const [CarItems, setCarItems] = useState(Cars);
  const [CarItem, setCarItem] = useState(Cars);
  const [Car, setCar] = useState(Cars);

  const filteredItems = (cateItem) => {
    const updateItems = CarItems.filter((curItem) => {
      return curItem.bodyType === cateItem;
    });
    console.log(updateItems);
    setCarItems(updateItems);
    alert("check console");
  };

  const filtered = (cate) => {
    const updateItem = CarItem.filter((cur) => {
      return cur.bodyType === cate;
    });
    console.log(updateItem);
    setCarItem(updateItem);
    alert("check console");
  };

  const filter = (cate) => {
    const update = Car.filter((cur) => {
      return cur.bodyType === cate;
    });
    console.log(update);
    setCar(update);
    alert("estate is clicked");
  };

  return (
    <>
      <div className="heading">
        <h2>My Inno Cars</h2>
      </div>
      <hr />
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => filteredItems("sedan")}
          >
            Sedan
          </button>
          <button className="btn btn-warning" onClick={() => filtered("suv")}>
            SUV
          </button>
          <button className="btn btn-warning" onClick={() => filter("estate")}>
            Estate
          </button>
        </div>
      </div>

    

      <div className="main">
        {Cars &&
          Cars.map((car) => {
            return (
              <div className="Item">
                <h3 key={car.id}>{car.bodyType} </h3>

                <div className="main-title">
                  <h5>
                    {car.modelName}
                    <small className="text-muted">{car.modelType}</small>
                  </h5>
                </div>

                <div className="card">
                  <div className="image">
                    <div className="car_Image">
                      <img
                        className="card-img-top"
                        src={car.imageUrl}
                        alt="car_img"
                      />
                    </div>
                  </div>
                </div>

                <div className="btn">
                  <h6 className="btn1">LEARN</h6>
                  <span>
                    <i className="fa-solid fa-greater-than"></i>
                  </span>
                  <h6 className="btn2">SHOP</h6>
                  <span>
                    <i className="fa-solid fa-greater-than"></i>
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      <Pagination />
    </>
  );
}

export default App;
