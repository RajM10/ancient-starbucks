import { info } from "../assets/info";
import showToast from "../helper/showToast";

function handleStonesClick({ state: applicationState }) {
  if (applicationState === "initial") showToast(info.stones.initial);
  else if (applicationState === "progress") showToast(info.stones.progress);
  else if (applicationState === "completed") showToast(info.stones.success);
}

export default handleStonesClick;
