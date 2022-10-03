import React, { useRef } from "react";
import "./slider.scss";
import { StarBorder } from "@mui/icons-material";
import male from "./male.jpg";
import female from "./female.jpg";

function SliderDatabase({ type }) {
  const data = useRef();

  switch (type) {
    case "first":
      data.current = {
        image: male,
        name: "Oluwalana Magnificent",
      };
      break;
    case "second":
      data.current = {
        image: female,
        name: "Adebayo Aishat",
      };
      break;
    case "third":
      data.current = {
        image: male,
        name: "Shonubi Damilola",
      };
      break;
    case "fourth":
      data.current = {
        image: female,
        name: "Adebayo Aishat",
      };
      break;
      case 'fifth':
        data.current= {
            image : female,
            name: 'Adebayo Hafsor'
        }
        break;
        case 'sixth':
            data.current= {
                image : male,
                name: 'Adebayo Al-ameen'
            }
            break;
    default:
      break;
  }
  return (
    <div>
      <div className="sliderDatabase">
        <div className="data">
          <img src={data.current.image} alt="icon" />
          <h3>{data.current.name}</h3>
        </div>
        <p>
          This team offers my company a big helping hand, they helped my company
          to reach greater heights
        </p>
        <div className="star">
        <StarBorder /><StarBorder /><StarBorder /><StarBorder /><StarBorder />
        </div>
      </div>
    </div>
  );
}

export default SliderDatabase;
