<template>
  <div class="hero d-flex align-items-center justify-content-center">
    <h1 ref="title" :class="{ 'd-none': !showTitle }" class="mb-0">PugBand</h1>
  </div>
</template>

<script setup>
  import { onMounted, onUnmounted, ref, defineExpose } from 'vue';
  import Rellax from 'rellax'

    const title = ref(null);
    const showTitle = ref(true);
    let titleRellax = null;

    const handleScroll = () => {
      showTitle.value = window.scrollY < (window.innerHeight / 2 + 100);
      
      const blur = Math.min(10, window.scrollY / 100);
      title.value.style.filter = `blur(${blur}px)`;
    };

    onMounted(() => {
      if(title.value) {
        titleRellax = new Rellax(title.value, { speed: -6 });
        window.addEventListener('scroll', handleScroll);
      }
    });
    onUnmounted(() => {
      titleRellax && titleRellax.destroy();
      window.removeEventListener('scroll', handleScroll);
    });

    defineExpose ({
      title,
      showTitle
    });
</script>

<style lang="scss" scoped>
  .hero {
    background: url('../assets/img/Ph_2-257_VSCO.JPG');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  h1 {
    font-size: 172px;
    text-transform: uppercase;
    font-weight: 900;
    color: #fff;
  }
</style>
