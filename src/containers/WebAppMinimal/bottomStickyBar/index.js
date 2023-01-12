import "bootstrap/dist/css/bootstrap.css";
//import {AiOutlineArrowRight} from 'react-icons/bs';
import { BsArrowRight } from "react-icons/bs";

export default function BottomStickyBar() {
  return (
    <>
      <div
      style={{
          zIndex:9999,
          position: 'fixed',
          bottom: '-15px',
          width: '100%',
      }}>
        <div
          style={{ 
            backgroundColor: "#151B54",
            borderRadius:'25px'
          }}
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <div className="row">
            <div className="col">
              <strong style={{ color: "white" }}>71+ Tools </strong>
              <strong style={{ color: "white" }}>20+ Tones At Your Finger Tips!</strong>

            </div>

            <div className="col">
              <button
                type="button"
                className="btn btn-primary float-end"
                style={{ display: "flex" }}
              >
                <span style={{ marginRight: "2px" }}>Try for Free!</span>
                <BsArrowRight style={{ marginTop: "3px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
