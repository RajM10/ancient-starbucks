import { info } from "../assets/info";
import showToast from "../helper/showToast";

function handleBoatClick({ state: applicationState }) {
  console.log(`handleBoatClick `);
  if (applicationState === "completed") {
    showToast(info.boat.success,50000);
  } else if (applicationState === "initial") showToast(info.boat.initial);
  else if (applicationState === "progress") showToast(info.boat.progress);
}

export default handleBoatClick;
