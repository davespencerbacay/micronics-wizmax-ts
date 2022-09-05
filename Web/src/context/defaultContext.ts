import { getFromStorage } from "../helpers/localStorage";
import { LOCALES } from "../i18n/constants";
import { STORAGE_KEY } from "../constants";

const locales = {
  locale: getFromStorage(STORAGE_KEY) || LOCALES.ENGLISH,
};
export default locales;
