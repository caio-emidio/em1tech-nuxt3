<template>
    <div class="w-screen h-24 bg-ewhite text-3xl">
      <div class="flex items-center mx-24 justify-between">
        <div class="flex items-center gap-2">
          <img src="~/assets/img/logo.png" alt="logo" class="h-24" />
          <p class="text-black font-bold">Em1.Tech</p>
        </div>
        <div class="flex gap-4 text-lg text-black items-center">
          <p class="cursor-pointer font-semibold hover:underline" v-for="link in links">{{ link.name }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const links = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Our Projects", href: "/projects" },
  ];
  </script>
  