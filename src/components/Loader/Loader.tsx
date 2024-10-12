import { Oval } from "react-loader-spinner";
import style from "./Loader.module.css";
import React from "react";

export const Loader: React.FC = () => {
  return (
    <div className={style.loaderContainer}>
      <Oval height={40} width={40} color="#4fa94d" ariaLabel="loading" />
    </div>
  );
};
