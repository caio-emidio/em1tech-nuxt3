<template>
  <ul
    class="list-none mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
  >
    <li
      v-for="project in projects"
      :key="project.id"
      :style="{
        backgroundImage: project.image ? `url('${project.image}')` : '',
      }"
      class="relative p-3 rounded-lg bg-eyellow-700 bg-cover bg-center cursor-pointer transition-all duration-300 ease-in-out"
    >
      <div class="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
      <div class="relative z-10 flex justify-between items-center">
        <p class="font-bold text-lg">{{ project.name }}</p>
        <div
          class="bg-eyellow-700 rounded-lg w-8 h-8 flex justify-center items-center md:hidden"
          @click="toggleDetails(project.id)"
        >
          <icon name="ri:expand-up-down-line" class="text-white size-6" />
        </div>
      </div>
      <div
        v-if="project.id === activeProjectId || isDesktop"
        class="relative z-10 mt-2 text-white"
      >
        <UiTag v-model="project.status.name" :color="project.status.color"/>
        <p v-if="project.description">{{ project.description }}</p>
        <UiTag v-model="project.techs" />
      </div>
    </li>
  </ul>
</template>

<script setup>
const { data, error } = await useFetch('/api/info');
const projects = ref(data);
const activeProjectId = ref(null);

const toggleDetails = (projectId) => {
  if (!isDesktop.value) {
    activeProjectId.value =
      activeProjectId.value === projectId ? null : projectId;
  }
};

const { isDesktop } = useWindowResize();

</script>
