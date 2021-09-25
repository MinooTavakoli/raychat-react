import React, { useEffect, useRef } from "react";

const removeElId = (id) => {
  if (id) {
    let elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
  }
};

const removeElTag = (selector) => {
  if (selector) {
    document.querySelectorAll(selector).forEach((e) => e.remove());
  }
};

function RayChat({ rayToken = null , domain=undefined}) {
  const ref = useRef();
  const raychat = () => {
    let o = rayToken;
    let t = document.createElement("script");
    t.type = "text/javascript";
    t.async = !0;
    localStorage.getItem("rayToken")
      ? (t.src =
          "https://app.raychat.io/scripts/js/" +
          o +
          "?rid=" +
          localStorage.getItem("rayToken") +
          "&href=" +
          (domain || window.location.href))
      : (t.src =
          "https://app.raychat.io/scripts/js/" +
          o +
          "?href=" +
          (domain || window.location.href));
    if (ref && ref.current) {
      ref.current.appendChild(t);
    }
  };
  useEffect(() => {
    if (rayToken) {
      let e = document;
      let a = window;
      if ("complete" === e.readyState) raychat();
      else {
        a.attachEvent
          ? a.attachEvent("onload", raychat)
          : a.addEventListener("load", raychat, !1);
      }
    }
    return () => {
      localStorage.removeItem("rayToken");
      removeElTag("#raychatFrame + link");
      removeElTag("#raychatFrame + style");
      removeElId("raychatFrame");
      removeElId("raychat_automessage_preview_container");
      removeElId("raychatBtn");
      if (ref && ref.current) {
        ref.current.innerHTML = "";
      }
    };
  }, [rayToken]);

  return <div ref={ref} />;
}

export default RayChat;
