import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div id="intro" className="bg-image shadow-2-strong">
      <div className="mask">
        <div className="container d-flex align-items-center justify-content-center text-center h-100">
          <div className="text-white">
            <div className="home">
              <div className="homeTitle mb-3">Emirates Global Bank</div>
              <h6 className="homeTitleSm mb-4">
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit..."
              </h6>
              <div className="text-center">
                <Link to="/login">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg onlineBankingButton"
                  >
                    Online Banking
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
