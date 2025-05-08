import React, { useEffect, useState } from "react";
import {
  requestPermissionAndToken,
  listenForMessages,
} from "../Common/Firebase.js";

function Message() {
  const [fcmToken, setFcmToken] = useState("");

  useEffect(() => {
    requestPermissionAndToken().then((token) => {
      if (token) {
        setFcmToken(token);
      }
    });

    listenForMessages();
  }, []);

  const sendNotification = async () => {
    if (!fcmToken) {
      alert("FCM token not ready. Please allow notification permission.");
      return;
    }

    const response = await fetch(
      "https://ncbackend-z3lz.onrender.com/api/bookingreview/confirmfcm",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fcmToken,
          title: "Cab Booking Confirmed",
          body: "Driver will arrive shortly.",
        }),
      }
    );

    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>FCM Push Notification Test</h1>
      <button className="bg-red-500 p-2 rounded" onClick={sendNotification}>
        Send Notification
      </button>
    </div>
  );
}

export default Message;
