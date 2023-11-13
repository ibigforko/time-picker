
import { DefineComponent } from 'vue';
export interface TimePickerProps {
    inputId: string;
    modelValue: string;
    mainClass: string;
    disabled: boolean;
    textSaveButton: string;
    selectCallback: Function;
}
export const TimePicker: DefineComponent<TimePickerProps>;
export default TimePicker;