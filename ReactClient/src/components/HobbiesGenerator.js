import React, { useState } from "react";
import { View } from "react-native";
import { Chip } from "react-native-paper";

const HobList = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Функция для изменения состояния выбранного элемента
  const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Варианты элементов, которые вы хотите предложить пользователю
  const items = ["Элемент 1", "2", "Эле 3", "Эле 4"];

  return (
    <View
      style={{
        flexDirection: "row",
        
        flexWrap: "wrap",        
        wrap: "100",
      }}
    >
      {items.map((item) => (
        <Chip
          key={item}
          icon={selectedItems.includes(item) ? "check" : "close"}
          selected={selectedItems.includes(item)}
          onPress={() => toggleItem(item)}
          style={{ marginStart: 20, marginBottom: 10 }}
        >
          {item}
        </Chip>
      ))}
    </View>
  );
};

export default HobList;
