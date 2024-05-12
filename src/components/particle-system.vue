<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const canvas = ref(null);
    const ctx = ref(null);
    const particles = [];
    const numParticles = 500;
    const mouse = ref({ x: 0, y: 0 });

    const setupCanvas = () => {
      if(canvas.value) {
        canvas.value.width = window.innerWidth + 100;
        canvas.value.height = window.innerHeight + 100;
        ctx.value = canvas.value.getContext('2d');
      }
    };

    const drawParticles = () => {
      if (ctx.value) {
        ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
        particles.forEach(particle => {
          ctx.value.beginPath();
          ctx.value.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.value.fillStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.value.fill();
          ctx.value.closePath();
          // Update particle position based on scroll position
          const speed = particle.depth * 0.001; // Adjust speed for parallax effect
          particle.y -= window.scrollY * speed;
          // Reset particle position if it goes out of bounds
          if (particle.y < -particle.size) {
            particle.y = canvas.value.height + particle.size;
          }
        });
      }
    };

    const onMouseMove = evt => {
      mouse.value = { x: (evt.clientX - window.innerWidth / 2), y: (evt.clientY - window.innerHeight / 2) };
      drawMouseParticles();
    }

    const drawMouseParticles = () => {
      if (ctx.value) {
        ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
        particles.forEach(particle => {
          ctx.value.beginPath();
          ctx.value.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.value.fillStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.value.fill();
          ctx.value.closePath();
          // Update particle position based on mouse position
          particle.x = particle.initX - mouse.value.x * .01;
          particle.y = particle.y - mouse.value.y * .001;
          // Reset particle position if it goes out of bounds
          if (particle.x < 0 || particle.x > canvas.value.width) {
            particle.x = particle.initX;
          }
        });
      }
    };

    const generateParticles = () => {
      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 3 + 1; // Random size between 1 and 3
        const x = Math.random() * canvas.value.width;
        const y = Math.random() * canvas.value.height;
        const depth = Math.random() * 2 + 0.1; // Random depth between 0.1 and 0.6
        particles.push({ x, y, size, depth, initX: x, initY: y });
      }
    };

    const onScroll = () => {
      drawParticles();
    };

    onMounted(() => {
      setupCanvas();
      generateParticles();
      window.addEventListener('scroll', onScroll);
      window.addEventListener('mousemove', onMouseMove);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
    });

    return { canvas };
  }
};
</script>

<style scoped>
canvas {
  position: fixed;
  top: -50px;
  left: -50px;
  width: calc(100% + 100px);
  height: calc(100% + 100px);
  z-index: -1;
}
</style>
