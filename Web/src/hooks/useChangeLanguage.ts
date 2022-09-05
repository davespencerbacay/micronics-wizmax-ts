import { useCallback, useContext } from "react";
import { AppContext } from "../context";

const useChangeLanguage = () => {
  /* Hook for changing language */
  const { dispatch } = useContext(AppContext);
  const setLanguage = useCallback(
    (locale: any) => {
      dispatch({
        type: "setLocale",
        locale,
      });
    },
    [dispatch]
  );

  return setLanguage;
};

export default useChangeLanguage;
