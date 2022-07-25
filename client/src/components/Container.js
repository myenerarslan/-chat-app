import React, { useEffect } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import { init } from "../socketApi";
import { subscribeChat, subscribeInitialMesssages } from "../socketApi";
import { useChat } from "../context/ChatContext";

function Container() {
  const { setMessages } = useChat();

  useEffect(() => {
    init();

    subscribeChat((message) => {
      setMessages((preState) => [...preState, { message }]);
    });

    subscribeInitialMesssages((messages) => setMessages(messages));
  }, []);

  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
