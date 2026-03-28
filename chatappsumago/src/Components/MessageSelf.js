import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

function MessageSelf({ props, onUnsend }) {
  const lightTheme = useSelector((state) => state.themeKey);
  const [showAction, setShowAction] = useState(false);
  const longPressTimerRef = useRef(null);

  const startLongPress = () => {
    clearTimeout(longPressTimerRef.current);
    longPressTimerRef.current = setTimeout(() => {
      setShowAction(true);
    }, 550);
  };

  const clearLongPress = () => {
    clearTimeout(longPressTimerRef.current);
  };

  return (
    <div className="self-message-container">
      <div
        className={
          "messageBox" +
          (showAction ? " messageBox-active" : "") +
          (lightTheme ? "" : " dark")
        }
        onContextMenu={(event) => {
          event.preventDefault();
          setShowAction(true);
        }}
        onMouseDown={startLongPress}
        onMouseUp={clearLongPress}
        onMouseLeave={clearLongPress}
        onTouchStart={startLongPress}
        onTouchEnd={clearLongPress}
      >
        <p className={"self-message-text" + (lightTheme ? "" : " dark")}>
          {props.content}
        </p>
        {showAction ? (
          <button
            type="button"
            className={"message-action-button" + (lightTheme ? "" : " dark")}
            onClick={async (event) => {
              event.preventDefault();
              event.stopPropagation();
              setShowAction(false);
              await onUnsend(props._id);
            }}
          >
            Unsend
          </button>
        ) : null}
        {/* <p className="self-timeStamp" style={{ color: "black" }}>
          12:00am
        </p> */}
      </div>
    </div>
  );
}

export default MessageSelf;
