import React, { useState } from 'react';

interface Props {
  Loadingtext?: string;
  mainClassName?: string;
  SpinnerClass?: string;
}

const Spinner: React.FC<Props> = ({
  Loadingtext,
  mainClassName,
  SpinnerClass,
}) => {
  return (
    <div className={`flex justify-center items-center gap-3 ${mainClassName}`}>
      <div
        className={`h-8 w-8 animate-spin rounded-full border-2 border-e-transparent [animation-delay:-0.8s] ${SpinnerClass}`}
      ></div>
      <span>{Loadingtext}</span>
    </div>
  );
};

export default Spinner;
