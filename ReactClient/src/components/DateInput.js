import { useState } from "react";
import { Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate } from "../context/funcs";



export const DateInput = (props) => {  
  const { propdate } = props;
  const initialDate = propdate instanceof Date ? propdate : new Date(); 
  const [date, setDate] = useState(initialDate);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date; // Если selectedDate равен null, то используем текущее значение date
    setShow(false);
    setDate(currentDate); // Обновляем значение date
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  

  return (
    <>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
          display="spinner"
        />
      )}
      <TextInput
        style={{marginBottom: 24}} 
        mode="outlined"
        label="Birth Date"
        value={formatDate(date)} // Показываем выбранную дату в инпуте
        onTouchStart={showDatepicker}
        right={<TextInput.Affix text="" />}
      />

      
    </>
  );
};
