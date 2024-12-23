<template>
  <ul
    class="list-none mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
  >
    <li
      v-for="project in projects"
      :key="project.id"
      :style="{ backgroundImage: project.image ? `url('${project.image}')` : '' }"
      class="relative p-3 rounded bg-eyellow-700 bg-cover bg-center cursor-pointer transition-all duration-300 ease-in-out"
      @click="toggleDetails(project.id)"
    >
      <div class="absolute inset-0 bg-black opacity-60 rounded"></div>
      <div class="relative z-10 flex justify-between items-center">
        <p class="font-bold text-lg">
          {{ project.name }}
        </p>
        <div
          class="bg-eyellow-700 rounded-full w-8 h-8 flex justify-center items-center md:hidden"
        >
          <icon name="ri:expand-up-down-line" class="text-white size-6" />
        </div>
      </div>
      <div
        :class="{
          block: project.id === activeProjectId || isDesktop,
          hidden: project.id !== activeProjectId && !isDesktop,
        }"
        class="relative z-10 mt-2 text-white"
      >
        <p v-if="project.description">{{ project.description }}</p>
        <ul class="list-none mt-2" v-if="project.tech">
          <li
            v-for="tech in project.tech"
            :key="tech"
            class="inline-block bg-eyellow-700 text-white px-2 py-1 rounded-full text-xs mr-2"
          >
            {{ tech }}
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Loopee - ERP",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          description: "Descrição do projeto 1",
          tech: ["NuxtJs", "NestJs", "MongoDB"],
        },
        {
          id: 2,
          name: "Projeto 2",
          description: "Descrição do projeto 2",
          tech: ["NuxtJs", "NestJs", "MongoDB"],
        },
        {
          id: 3,
          name: "Projeto 3",
          image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
          description: "Descrição do projeto 3",
          tech: ["NuxtJs", "NestJs", "MongoDB"],
        },
        {
          id: 4,
          name: "Projeto 4",
          image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
          description: "Descrição do projeto 4",
        },
        {
          id: 5,
          name: "Projeto 5",
          image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
          description: "Descrição do projeto 5",
        },
        {
          id: 6,
          name: "Projeto 6",
          image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
          description: "Descrição do projeto 6",
        },
        {
          id: 7,
          name: "Projeto 7",
          image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
          description: "Descrição do projeto 7",
        },
      ],
      activeProjectId: null,
      isDesktop: window?.innerWidth >= 1024,
    };
  },
  methods: {
    toggleDetails(projectId) {
      if (!this.isDesktop) {
        this.activeProjectId =
          this.activeProjectId === projectId ? null : projectId;
      }
    },
    checkIsDesktop() {
      this.isDesktop = window?.innerWidth >= 1024;
    },
  },
  mounted() {
    window.addEventListener("resize", this.checkIsDesktop);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkIsDesktop);
  },
};
</script>
