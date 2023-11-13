import { DefineComponent } from 'vue';

interface TimePickerProps {
  inputId: string;
  modelValue: string;
  mainClass: string;
  disabled: boolean;
  textSaveButton: string;
  selectCallback: Function;
}

declare const TimePicker: DefineComponent<TimePickerProps>;

export default TimePicker;