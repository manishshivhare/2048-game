import { useEffect } from "react";

export const useEvent = (event, handler, passive = false) => {
  useEffect(() => {
    // initiate the event handler
    window.addEventListener(event, handler, passive);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener(event, handler);
    };
  });
};

export const getColors = (num) => {
  switch (num) {
    case 2:
      return "#0A3D4C";
    case 4:
      return "#2A7F79";
    case 8:
      return "#74C2C3";
    case 16:
      return "#4682B4";
    case 32:
      return "#7C9A92";
    case 64:
      return "#F0E68C";
    case 128:
      return "#E7C65E";
    case 256:
      return "#3E505B";
    case 512:
      return "#A1C4D0";
    case 1024:
      return "#E8BB31";
    case 2048:
      return "#4C7C84";
    default:
      return "#5D9CA2";
  }
};
