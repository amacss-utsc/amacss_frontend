import React, { useEffect } from "react";
import { navigate } from "gatsby";

const BannerLink = () => {
  useEffect(() => {
    navigate("https://linktr.ee/amacss_utsc");
  }, []);

  return <p>Redirecting...</p>;
};

export default BannerLink;
