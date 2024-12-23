<template>
  <section class="bg-orange-100 p-6 rounded-lg shadow-md w-screen">
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold text-start text-epurple-700 font-audiowide">
        ABOUT US
      </h2>
      <p class="mt-4 text-lg text-eblack text-justify">
        <b class="text-lg">Em1Tech</b> is dedicated to delivering cutting-edge solutions globally,
        leveraging the best technologies to ensure security, efficiency, and
        outstanding performance.
      </p>
      <div class="mt-6">
        <div class="flex items-center gap-2">
          <img
            src="https://github.com/caio-emidio.png"
            alt="Caio Emidio"
            class="size-12 rounded-full"
          />
          <h3 class="text-xl font-light text-eblack font-audiowide">
            Caio Emidio
          </h3>
        </div>

        <p class="mt-2 text-eblack">
          <b>Caio</b> is a
          <b
            >passionate developer with over a decade of experience in the tech
            industry </b
          >. Throughout his career, he has consistently pursued projects that
          not only challenge him technically but also create meaningful and
          lasting impacts. Driven by a <b>philosophy of finding joy in work</b>,
          Caio believes that true success comes from aligning personal growth
          with the power to make a difference.
          <br />

          <NuxtLink
            class="underline font-bold"
            to="https://twitch.tv/em1dio"
            external
          >
            Since 2021, Caio has expanded his influence by creating engaging
            content on Twitch</NuxtLink
          >, sharing insights, coding sessions, and valuable industry knowledge.
          He is also deeply
          <b
            >committed to mentoring aspiring developers, empowering the next
            generation of talent</b
          >
          with the skills, confidence, and inspiration needed to thrive in
          technology.
          <br />
          Caio’s journey is a testament to his dedication to innovation,
          collaboration, and a relentless drive to leave a positive mark on the
          world through technology.
        </p>

        <!-- Social Media Icons Section -->
        <div class="mt-6 flex justify-start gap-4">
          <NuxtLink
            to="https://github.com/caio-emidio"
            target="_blank"
            external
          >
            <icon class="text-black size-6" name="ri:github-fill" />
          </NuxtLink>
          <NuxtLink
            to="https://instagram.com/caioem1dio"
            target="_blank"
            external
          >
            <icon class="text-black size-6" name="ri:instagram-line" />
          </NuxtLink>
          <NuxtLink to="https://x.com/caioem1dio" target="_blank" external>
            <icon class="text-black size-6" name="ri:twitter-x-fill" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMeSection",
};
</script>

<style scoped>
.size-12 {
  width: 3rem;
  height: 3rem;
}
</style>
