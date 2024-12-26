<template>
    <section class="bg-epurple-900 w-screen">
        <div class="container mx-auto">
            <p class="flex justify-center py-24 font-bold">©{{ year }} EM1.TECH | DEVELOP BY CAIO EMIDIO</p>
        </div>
    </section>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
