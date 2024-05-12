<template>
  <div class="container section cover-arts">
    <div class="row">
      <CoverArt v-for="(song, i) in songs" 
        :align="(i + 1) % 2 == 0 ? 'right' : 'left'"
        class="mb-5"
        ref="coverart"
        :cover="song.cover"
        :spotify="song.spotify"
        :applemusic="song.applemusic"
        :youtube="song.youtube"
        :key="i"
        :layout="song.layout" />
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
  import CoverArt from './cover-art.vue';

  export default {
    components: {
      CoverArt
    },
    setup() {
      const songs = ref([
        {
          cover: require('@/assets/img/cover-laoscuridad.jpg'),
          spotify: 'https://open.spotify.com/track/04LnYBOwtrHIifkgasN4vA?si=c33e4736fe0045a8',
          applemusic: 'https://music.apple.com/us/album/la-oscuridad-del-placer-single/1728330745',
          youtube: 'https://www.youtube.com/watch?v=kkhGMS3pT9I'
        },
        {
          cover: require('@/assets/img/cover-tiempo.jpg'),
          spotify: 'https://open.spotify.com/track/79GSFOBW9lgChMZ7XUAu2o?si=4778c29174f547da',
          applemusic: 'https://music.apple.com/us/album/tiempo-single/1717888536',
          youtube: 'https://www.youtube.com/watch?v=NBkwOtCaj_s'
        },
        {
          cover: require('@/assets/img/cover-ordenar.jpg'),
          spotify: 'https://open.spotify.com/track/5hHytUpzfv2lQyumjJr2DO?si=8128f1dfa5ac40d8',
          applemusic: 'https://music.apple.com/us/album/ordenar-single/1698147733',
          youtube: 'https://www.youtube.com/watch?v=Xgw57CzWqW8',
          layout: 'compact'
        },
        {
          cover: require('@/assets/img/cover-otravez.jpg'),
          spotify: 'https://open.spotify.com/track/6U8tserxWWBVBvSWEZRXj4?si=249a0f65c52640a0',
          applemusic: 'https://music.apple.com/us/album/otra-vez-single/1677788559',
          youtube: 'https://www.youtube.com/watch?v=KYqtP4o5be0',
          layout: 'compact'
        }
      ]);
      return {
        songs
      }
    }
  }
</script>
