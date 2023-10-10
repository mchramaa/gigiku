import DatePicker from "react-native-modern-datepicker";

const TimePicker = (props) => {
  return (
    <DatePicker
      mode="time"
      minuteInterval={1}
      onTimeChange={(selectedTime) => props.handleSelectedTime(selectedTime)}
    />
  );
};

export default TimePicker;
