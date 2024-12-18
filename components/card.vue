<template>
    <div>
      <div class="container">
        <div class="card">
          <img src="https://github.com/caio-emidio.png" alt="Caio Emidio" />
        </div>
        <div class="card">
          <img src="https://github.com/daviprm.png" alt="Davi prm" />
        </div>
        <div class="card">
          <img src="https://github.com/em1dio.png" alt="Davi prm" />
        </div>
        <div class="card">
          <img src="https://github.com/caio.png" alt="Davi prm" />
        </div>
        <div class="card">
          <img src="https://github.com/caio.png" alt="Davi prm" />
        </div>
        <div class="card">
          <img src="https://github.com/caio.png" alt="Davi prm" />
        </div>
        <div class="card">
          <img src="https://github.com/caio.png" alt="Davi prm" />
        </div>
        <div class="card">
          <img src="https://github.com/caio.png" alt="Davi prm" />
        </div>
        <div class="card">
          <img src="https://github.com/caio.png" alt="Davi prm" />
        </div>
        <div class="card">
          <img src="https://github.com/caio.png" alt="Davi prm" />
        </div>
        <div class="card">
          <img src="https://github.com/caio.png" alt="Davi prm" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const route = useRoute()
  </script>
  
  <style scoped>
  
  .container {
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    transition: all 400ms;
  }
  
  .card {
    flex: 1;
    height: 100%;
    transition: all 400ms;
    cursor: pointer;
  }
  
  .container:hover > .card:not(:hover) {
    filter: grayscale(100%);
  }
  
  .card:hover {
    flex: 3;
  }
  
  </style>
  