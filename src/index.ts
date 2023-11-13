import { defineComponent } from 'vue';

export interface TimePickerProps {
  inputId: string;
  modelValue: string;
  mainClass: string;
  disabled: boolean;
  textSaveButton: string;
  selectCallback: Function;
}

export const TimePicker = defineComponent({
  props: {
    inputId: String,
    modelValue: String,
    mainClass: String,
    disabled: Boolean,
    textSaveButton: String,
    selectCallback: Function
  },
});

export default TimePicker;