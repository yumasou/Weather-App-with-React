import "./App.css";
import React from "react";
import City from "./component/City";
import Temp from "./component/Temp";
function App() {
  const Api = {
    Key: "2c5a2bbebb262e7011001a16eb6b9d56",
    Basic: "https://api.openweathermap.org/data/2.5/weather?",
  };
  const [quary, setquary] = React.useState("Yangon");
  const [datas, setdata] = React.useState();

  React.useEffect(() => {
    fetch(`${Api.Basic}q=${quary}&appid=${Api.Key}`)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  const search = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetch(`${Api.Basic}q=${quary}&appid=${Api.Key}`)
        .then((res) => res.json())
        .then((data) => {
          setdata(data);
          setquary("");
        });
    }
  };

  const datebuilder = (d) => {
    let month = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let Day = day[d.getDay()];
    let Date = d.getDate();
    let Month = month[d.getMonth()];
    let Year = d.getFullYear();
    return `${Day} ${Date} ${Month} ${Year}`;
  };

  return (
    
    <div className={datas?(window.innerWidth>450)? ((datas.weather[0].main==="Clear")?"clear col-lg-12":"cloud col-lg-12"): ((datas.weather[0].main==="Clear")?"clears col-lg-12":"clouds col-lg-12") :""} >
      <form className="col-10 col-lg-6 mx-auto pt-3">
        <div className="input-group opacity-50">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => setquary(e.target.value)}
            value={quary}
            onKeyDown={search}
          />
        </div>
      </form>
      {typeof datas != "undefined" ? (
        <div>
          <City
            city={datas.name}
            country={datas.sys.country}
            time={datebuilder(new Date())}
          />
          <Temp temp={parseInt(datas.main.temp - 273.15)} status={datas.weather[0].main}  />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
