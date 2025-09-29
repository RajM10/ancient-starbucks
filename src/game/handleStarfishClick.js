import { info } from "../assets/info";
import showToast from "../helper/showToast";

function handleStarfishClick({ state: applicationState }) {
  if (applicationState === "initial") showToast(info.starfish.initial);
  else if (applicationState === "progress") showToast(info.starfish.progress);
  else if (applicationState === "completed") showToast(info.starfish.success);
}

export default handleStarfishClick;
