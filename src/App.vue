<template>
  <MainHero class="section" />
  <VideoPlayer class="container section" />
  <AnimatedLogo />
  <CoverArts />
  <ParticleSystem />
</template>

<script>
  import VideoPlayer from './components/video-player.vue'
  import MainHero from './components/main-hero.vue'
  import CoverArts from './components/cover-arts.vue'
  import ParticleSystem from './components/particle-system.vue'
  import AnimatedLogo from './components/animated-logo.vue'

  export default {
    name: 'App',
    components: {
      MainHero,
      VideoPlayer,
      CoverArts,
      ParticleSystem,
      AnimatedLogo
    }
  }
</script>

<style lang="scss">
  @import url('./assets/scss/main.scss');
  .section {
    z-index: 1;
    position: relative;
    min-height: calc(var(--vh, 1vh) * 100);
  }
</style>
