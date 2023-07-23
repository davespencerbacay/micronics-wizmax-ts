

export const saveRouteId = (name: any, data: any) => {
  console.log("NAME", name, "DATA", data)
  if (!window || !window.localStorage) {
    return;
  }

  window.localStorage.setItem(name, JSON.stringify(data));
};

export const getRouteId = (name: any) => {
  if (!window || !window.localStorage) {
    return null;
  }

  try {
    return JSON.parse(window.localStorage.getItem(name) || JSON.parse("en-us"));
  } catch (e) {
    console.error(e);

    return null;
  }
};


