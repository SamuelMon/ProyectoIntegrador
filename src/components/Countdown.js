import React, { useState, useEffect } from "react";
import "../styles/countdown.css";

function Countdown(props) {
  const { isActive, onCountdownEnd } = props;
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    let timer;

    if (isActive) {
      if (countdown > 0) {
        timer = setInterval(() => {
          setCountdown(countdown - 1);
        }, 1000);
      } else {
        // La cuenta regresiva ha finalizado, llama a la función onCountdownEnd
        onCountdownEnd();
      }
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [countdown, isActive, onCountdownEnd]);
  return (
    <div className="contadorTiempo sombra">
      {!countdown ? (
        ""
      ) : (
        <p>
          {" "}
          {"00"}:{countdown < 10 ? `0${countdown}` : countdown}
        </p>
      )}
    </div>
  );
}

export default Countdown;
