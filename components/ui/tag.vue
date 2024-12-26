<template>
    <ul class="list-none mt-2" v-if="normalizedList.length">
      <li
        v-for="item in normalizedList"
        :key="item"
        :style="{
          backgroundColor: normalizedColor,
        }"
        class="inline-block bg-eyellow-700 text-white px-2 py-1 rounded-full text-xs mr-2"
      >
        {{ item }}
      </li>
    </ul>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const list = defineModel({ required: true, default: () => [] });
  const color = defineModel("color", { required: false, default: '#f68601' });
  
  const normalizedList = computed(() => {
    if(!list.value) return [];

    if(typeof list.value === 'object') {
      return list.value;
    }

    return [list];

  });

  const normalizedColor = computed(() => {
    if(!color.value) return '#f68601';
    if(color.value == "blue") return '#382f8e';
    if(color.value == "green") return '#2f8e38';
    if(color.value == "red") return '#8e2f38';
    return color.value;
  });
  </script>
  