import Image from "common/components/Image";
import iconI from "../../../common/assets/image/webAppMinimal/icons/1.png";
import { FcEditImage } from "react-icons/bs";

export function Card({ index, icon, title, desc }) {
  return (
    <div  class="card mb-3">
      <div class="row g-0">
        <div class="col-md-2 col-sm-1 col-xs-1">
          {/* <Image src={icon} className="img-fluid rounded-start" alt={title} /> */}
          <img
            src={icon}
            className="img-fluid rounded-start p-2"
            alt="..."
          />
        
        </div>
        <div class="col-md-10 col-sm-1 col-xs-5">
          <div class="card-body p-2">
            <h6 class="card-title">{title}</h6>
            {/* <p class="card-text">{desc}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
