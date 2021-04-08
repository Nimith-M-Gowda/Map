import React, { useEffect, useState } from "react";
const Geolocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", long: "" },
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: parseFloat(location.coords.latitude),
        long: parseFloat(location.coords.longitude),
      },
    });
  };

  const onFailure = (error) => {
    setLocation((state) => ({
      ...state,
      loaded: true,
      error,
    }));
  };
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
    } else {
      onFailure({
        code: 0,
        message: "Geolocation not Supported",
      });
    }
  }, []);
  return location;
};

export default Geolocation;
