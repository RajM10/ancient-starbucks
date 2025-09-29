import { info } from "../assets/info";
import showToast from "../helper/showToast";

function handleNewspaperClick({ state: applicationState }) {
  if (applicationState === "initial") showToast(info.newspaper.initial);
  else if (applicationState === "progress") showToast(info.newspaper.progress);
  else if (applicationState === "completed") showToast(info.newspaper.success);
}

export default handleNewspaperClick;
