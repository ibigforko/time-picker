<template>
  <div class="relative" v-click-outside="close">
    <input readonly
      type="text"
      :id="inputId"
      :class="mainClass + ' bg-gray-50  dark:bg-gray-850 disabled:bg-gray-200 disabled:text-gray-500 dark:disabled:text-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 border cursor-pointer sm:text-sm rounded-lg block w-full p-2.5'"
      :disabled="disabled"
      :value="formattedTime"
      @focus="isOpen = true"/>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95">
      <div v-if="isOpen" class="bottom-full mb-3 absolute z-10 w-full mt-2 bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-750 rounded-md shadow-lg max-h-60">
        <div class="flex justify-between p-2 select-none">
          <div class="w-full h-48 overflow-y-auto px-1">
            <div v-for="(hour, index) in hours"
              :key="hour"
              @mousedown="selectHour(hour)"
              class="flex items-center my-1 rounded justify-center w-full h-8 text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
              :class="{ 'bg-primary-200 dark:bg-primary-850 text-primary-700 dark:text-primary-300': selectedHour === index }">
              {{ hour }}
            </div>
          </div>
          <div class="w-full h-48 overflow-y-auto px-1">
            <div v-for="(minute, index) in minutes"
              :key="minute"
              @mousedown="selectMinute(minute)"
              class="flex items-center my-1 rounded justify-center w-full h-8 text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
              :class="{ 'bg-primary-200 dark:bg-primary-850 text-primary-700 dark:text-primary-300': selectedMinute === index }">
              {{ minute }}
            </div>
          </div>
        </div>
        <button type="button"
          @click="save()"
          class="bg-gray-900 dark:bg-primary-800 hover:bg-gray-700 dark:hover:bg-primary-700 text-white dark:text-gray-100 focus:ring-gray-700 dark:focus:ring-primary-950 focus:ring-2 focus:ring-offset-2 dark:ring-offset-transparent w-full px-4 py-2 font-medium rounded-b-md text-sm text-center">
          {{ textSaveButton }}
        </button>
      </div>
    </transition>
  </div>
</template>
<style scoped>
  ::-webkit-scrollbar {
    width: 1px;
    height: 0.1em;
  }
  ::-webkit-scrollbar-thumb {
    z-index: 55;
    background-color: var(--primary-700);
    outline: 1px solid var(--primary-700);
    border-radius: 0.25rem;
  }
  ::-moz-scrollbar {
    width: 1px;
    height: 0.1em;
  }
  ::-moz-scrollbar-thumb {
    z-index: 55;
    background-color: var(--primary-700);
    outline: 1px solid var(--primary-700);
    border-radius: 0.25rem;
  }
  ::-o-scrollbar {
    width: 1px;
    height: 0.1em;
  }
  ::-o-scrollbar-thumb {
    z-index: 55;
    background-color: var(--primary-700);
    outline: 1px solid var(--primary-700);
    border-radius: 0.25rem;
  }
  ::-ms-scrollbar {
    width: 1px;
    height: 0.1em;
  }
  ::-ms-scrollbar-thumb {
    z-index: 55;
    background-color: var(--primary-700);
    outline: 1px solid var(--primary-700);
    border-radius: 0.25rem;
  }
</style>
<script lang="ts">
import { defineComponent, ref, watchEffect, computed, watch } from 'vue';
import { clickOutside } from './directives';

export default defineComponent({
  directives: {
    clickOutside,
  },
  props: {
    inputId: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    mainClass: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false
    },
    textSaveButton: {
      type: String,
      default: 'Save'
    },
    selectCallback: {
      type: Function,
      default: () => {}
    }
  },
  setup(props, { emit }) {
    const isOpen = ref(false);
    const selectedHour = ref(0);
    const selectedMinute = ref(0);
    const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
    const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
    const formattedTime = computed(() => selectedTime.value);
    const selectedTime = ref(props.modelValue);

    function setInitialTime(time: String): void
    {
      if(time){
        const [hour, minute] = time.split(':');
        selectedHour.value = Number(hour);
        selectedMinute.value = Number(minute);
      }
    }

    watch(() => props.modelValue,(newVal: String) => {
      setInitialTime(newVal);
    },{ 
      immediate: true
    });

    watchEffect(() => {
      selectedTime.value = `${String(selectedHour.value).padStart(2, '0')}:${String(selectedMinute.value).padStart(2, '0')}`;
      emit('update:modelValue', selectedTime.value);
    });

    function selectHour(hour: String): void
    {
      selectedHour.value = Number(hour);
    
      props.selectCallback();
    }

    function selectMinute(minute: String): void
    {
      selectedMinute.value = Number(minute);
      
      props.selectCallback();
    }

    function close()
    {
      isOpen.value = false;
    }

    function save()
    {
      isOpen.value = false;
      props.selectCallback();
    }

    return {
      selectedMinute,
      formattedTime,
      selectMinute,
      selectedHour,
      selectHour,
      minutes,
      isOpen,
      hours,
      close,
      save,
    };
  },
});
</script>