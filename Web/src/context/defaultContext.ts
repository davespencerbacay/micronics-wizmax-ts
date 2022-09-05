import { getFromStorage } from "../helpers/localStorage";
import { LOCALES } from "../i18n/constants";
import { STORAGE_KEY } from "../constants";

export default {
  locale: getFromStorage(STORAGE_KEY) || LOCALES.ENGLISH,
};
