import React from "react";
import styles from "./styles.module.css";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";
import ScrollableFeed from "react-scrollable-feed";

export default function ChatList() {
  const { messages } = useChat();

  return (
    <div className={styles.chatList}>
      <ScrollableFeed forceScroll={true}>
        {messages.map((item, key) => (
          <ChatItem item={item} key={key} />
        ))}
      </ScrollableFeed>
    </div>
  );
}
