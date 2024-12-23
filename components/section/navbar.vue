<template>
    <div class="w-screen h-24 bg-ewhite text-3xl">
      <div class="flex items-center mx-4 md:mx-24 justify-between">
        <div class="flex items-center gap-2">
          <img src="~/assets/img/logo.png" alt="logo" class="h-24" />
          <p class="text-black font-bold font-audiowide hidden md:block">Em1.Tech</p>
        </div>
        <div class="gap-4 text-lg text-black items-center hidden md:flex">
          <p class="cursor-pointer font-semibold hover:underline" v-for="link in links">{{ link.name }}</p>
        </div>
        <Icon name="mingcute:align-justify-fill" class="h-8 w-8 text-black md:hidden"/>
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
  