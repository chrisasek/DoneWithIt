import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";

import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/background.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/background.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefereshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
    console.log("delete item");
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeperatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/background.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
