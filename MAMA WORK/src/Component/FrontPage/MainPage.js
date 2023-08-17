import React from "react";
import "./MainPageStyle.css";

function MainPage() {
  return (
    <>
      <div className="hero">
        <div className="mask">
          <img
            className="intro-img"
            src="https://image1.jdomni.in/banner/12102018/B6/77/64/83148427F073D0CD30D0B5DEB4_1539343517181.jpg?output-format=webp"
            alt="IntroImg"
          />
        </div>
        <div className="content">
          <p>Reliable and Efficient Waste Management Services</p>
          <h1>
            <button className="btn">Equip Now</button>
          </h1>
        </div>
      </div>

      <div className="MainpageSarvices">
        <div className="Service-Contain">
          <h1>Services</h1>
        </div>
        <div className="Service-Cards">
          <div className="card">
            <img src="https://image3.jdomni.in/banner/12102018/9E/6A/33/6801D895A6FAEE9CFF419513AF_1539342233353.jpg?output-format=webp" />
            <h2>Waste Desposal</h2>
            <p>
              We have developed strong relationships with disposal facilities,
              landfills and incinerators. These relationships utilises only
              fully permitted and licensed facilities to safely manage your
              waste.
            </p>
            <button className="Servicebtn">Equip Now</button>
          </div>
          <div className="card">
            <img src="https://image3.jdomni.in/banner/12102018/9E/6A/33/6801D895A6FAEE9CFF419513AF_1539342233353.jpg?output-format=webp" />
            <h2>Waste Desposal</h2>
            <p>
              We have developed strong relationships with disposal facilities,
              landfills and incinerators. These relationships utilises only
              fully permitted and licensed facilities to safely manage your
              waste.
            </p>
            <button className="Servicebtn">Equip Now</button>
          </div>

          <div className="card">
            <img src="https://image3.jdomni.in/banner/12102018/9E/6A/33/6801D895A6FAEE9CFF419513AF_1539342233353.jpg?output-format=webp" />
            <h2>Waste Desposal</h2>
            <p>
              We have developed strong relationships with disposal facilities,
              landfills and incinerators. These relationships utilises only
              fully permitted and licensed facilities to safely manage your
              waste.
            </p>
            <button className="Servicebtn">Equip Now</button>
          </div>

          <div className="card">
            <img src="https://image3.jdomni.in/banner/12102018/9E/6A/33/6801D895A6FAEE9CFF419513AF_1539342233353.jpg?output-format=webp" />
            <h2>Waste Desposal</h2>
            <p>
              We have developed strong relationships with disposal facilities,
              landfills and incinerators. These relationships utilises only
              fully permitted and licensed facilities to safely manage your
              waste.
            </p>
            <button className="Servicebtn">Equip Now</button>
          </div>
        </div>

        {/* We Treat section */}

        <div className="MainpageWeTreat">
          <div className="Treat-Contain">
            <h1>We Treat</h1>
          </div>
          <div className="Treat-Cards">
            <div className="card">
              <img src="https://image3.jdomni.in/banner/12102018/9E/6A/33/6801D895A6FAEE9CFF419513AF_1539342233353.jpg?output-format=webp" />
              <h2>Waste Desposal</h2>
            </div>
            <div className="card">
              <img src="https://image3.jdomni.in/banner/12102018/9E/6A/33/6801D895A6FAEE9CFF419513AF_1539342233353.jpg?output-format=webp" />
              <h2>Waste Desposal</h2>
            </div>

            <div className="card">
              <img src="https://image3.jdomni.in/banner/12102018/9E/6A/33/6801D895A6FAEE9CFF419513AF_1539342233353.jpg?output-format=webp" />
              <h2>Waste Desposal</h2>
            </div>
            <div className="card">
              <img src="https://image3.jdomni.in/banner/12102018/9E/6A/33/6801D895A6FAEE9CFF419513AF_1539342233353.jpg?output-format=webp" />
              <h2>Waste Desposal</h2>
            </div>
            <div className="card">
              <img src="https://image3.jdomni.in/banner/12102018/9E/6A/33/6801D895A6FAEE9CFF419513AF_1539342233353.jpg?output-format=webp" />
              <h2>Waste Desposal</h2>
            </div>

            <div className="card">
              <img src="https://image3.jdomni.in/banner/12102018/9E/6A/33/6801D895A6FAEE9CFF419513AF_1539342233353.jpg?output-format=webp" />
              <h2>Waste Desposal</h2>
            </div>
          </div>
        </div>

        {/* our profile section */}
        <div className="MainpageProfile">
          <div className="name">
            <h1>Our Profile</h1>
          </div>
          <div className="Profile-box">
            <div className="card">
              <p>
                We have developed strong relationships with disposal facilities,
                landfills and incinerators. These relationships utilises only
                fully permitted and licensed facilities to safely manage your
                waste.
              </p>
            </div>
            <div className="card">
              <img src="https://image3.jdomni.in/banner/12102018/9E/6A/33/6801D895A6FAEE9CFF419513AF_1539342233353.jpg?output-format=webp" />
            </div>
          </div>
        </div>

        {/* Gallery */}

        <div className="MainpageWeTreat">
          <div className="Treat-Contain">
            <h1>Gallery</h1>
          </div>
          <div className="Treat-Cards">
            <div className="card">
              <img src="https://image3.jdomni.in/banner/12102018/9E/6A/33/6801D895A6FAEE9CFF419513AF_1539342233353.jpg?output-format=webp" />
            </div>
            <div className="card">
              <img src="https://image3.jdomni.in/banner/12102018/9E/6A/33/6801D895A6FAEE9CFF419513AF_1539342233353.jpg?output-format=webp" />
            </div>

            <div className="card">
              <img src="https://image3.jdomni.in/banner/12102018/9E/6A/33/6801D895A6FAEE9CFF419513AF_1539342233353.jpg?output-format=webp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
