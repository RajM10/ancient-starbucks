import { info } from "../assets/info";
import showToast from "../helper/showToast";

function handleShellsClick({ state: applicationState }) {
  if (applicationState === "initial") showToast(info.shells.initial);
  else if (applicationState === "progress") showToast(info.shells.progress);
  else if (applicationState === "completed") showToast(info.shells.success);
}

export default handleShellsClick;
