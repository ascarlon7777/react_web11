import { useEffect } from "react";
import "./customer.css";

const CustomerMain = (props) => {
  useEffect(() => {
    const initKakaoScript = async () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://developers.kakao.com/sdk/js/kakao.js";
      document.body.appendChild(script);

      script.onload = () => {
        window.Kakao.init("6d75ee1339ec3a2fa477e47c86d1c1f8");
        window.Kakao.Channel.createChatButton({
          container: "#kakao-talk-channel-chat-button",
          channelPublicId: "_hQdWG",
          title: "consult",
          size: "small",
          color: "yellow",
          shape: "pc",
          supportMultipleDensities: true,
        });
      };

      script.onerror = (error) => {
        console.error("Error loading Kakao SDK:", error);
      };
    };

    initKakaoScript();
  }, []);

  return (
    <div className="customer-all-wrap">
      <div className="customer-title">게시판</div>
      <div className="customer-current-content">
        <div id="kakao-talk-channel-chat-button"></div>
      </div>
    </div>
  );
};

export default CustomerMain;
