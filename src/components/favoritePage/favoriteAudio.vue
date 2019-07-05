<template>
    <q-card style="background: transparent; overflow: hidden;" dark height="700px" v-if="favoriteTrack && favoriteTrack.album">
      <div>
        <div class="text-caption text-weight-light text-center text-uppercase q-pt-lg">PLAYLIST</div>
        <div class="text-overline text-center text-capitalize">playlist of the song</div>
      </div>
      <!-- <q-card-separator /> -->
      <q-card-section>
          <div class="row q-mt-lg">
              <div class="offset-2 col-8 offset-sm-3 col-sm-6">
                <img :src="favoriteTrack.album.images[1].url" width="100%">
              </div>
          </div>
      </q-card-section>
      <q-card-section>
          <div class="text-center text-capitalize text-subtitle2">
              {{favoriteTrack.name}}
          </div>
          <div class="text-center text-capitalize text-caption text-weight-light">
              {{favoriteTrack.album.artists[0].name}}
          </div>
      </q-card-section>
      <div>
          <div class="row">
            <div class="offset-1 col-10">
                <!-- <q-linear-progress dark :value="progress" color="white" class="q-mt-sm"/> -->
                <div class="progress">
                  <div id="linear-progress"></div>
                </div>
                <div class="row justify-between">
                    <span class="text-weight-light q-pa-xs" style="font-size: 10px">00:{{songDuration}}</span>
                    <span class="text-weight-light q-pa-xs" style="font-size: 10px" id="restTime"></span>
                </div>
            </div>
          </div>
      </div>
      <div class="bg-black boxShadow">
      <q-card-section>
          <div class="row items-center justify-center">
            <q-btn color="transparent q-mr-md" icon="fast_rewind" round/>
            <div>
                <a v-if="playTrack" class="btn-customize btn-play" target="_blank" @click="playSong">
                <span class="play-btn">
                    <q-icon name="play_arrow" style="font-size: 1.5rem;"/>
                </span>
                </a>
                <a v-else class="btn-customize btn-play" target="_blank" @click="pauseSong">
                <span class="play-btn">
                    <q-icon name="pause" style="font-size: 1.5rem;"/>
                </span>
                </a>
            </div>
            <q-btn color="transparent q-ml-md" icon="fast_forward" round/>
          </div>
      </q-card-section>
      <q-card-section>
          <div class="row justify-around">
            <q-btn round outline color="transparent" class="q-ma-xs">
                <q-icon name="turned_in_not" color="white" size="1.1rem"/>
            </q-btn>
            <q-btn round outline color="transparent" class="q-ma-xs">
                <q-icon name="shuffle" color="white" size="1.1rem"/>
            </q-btn>
            <q-btn round outline color="transparent" class="q-ma-xs">
                <q-icon name="repeat" color="white" size="1.1rem"/>
            </q-btn>
            <q-btn round outline color="transparent" class="q-ma-xs">
                <q-icon name="playlist_add" color="white" size="1.1rem"/>
            </q-btn>
          </div>
      </q-card-section>
      <audio v-show="false" :src="favoriteTrack.preview_url" id="song" ref="tema">

      </audio>
      </div>
    </q-card>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      favoriteTrack: {},
      songDuration: 0,
      playTrack: true,
    };
  },
  created() {
    this.$root.$on("play", track => {
    this.favoriteTrack = track;
    if(this.playTrack === false) {
      this.playTrack = true;
      let audioTagProgress = document.getElementById('linear-progress');
      audioTagProgress.style.width = '0%'
    }
    });
  },
  mounted() {
    //creating the audio DOM
    setTimeout(() => {
      this.audio = document.getElementById('song')
    }, 500)
  },
  methods: {
    playSong() {
      this.audio.ontimeupdate = function() {
        let audioTag = document.getElementById('song')
        let audioTagProgress = document.getElementById('linear-progress')
        document.getElementById('restTime').innerHTML = `00:${audioTag.currentTime.toFixed(0)}`
        let positionOfAudio = audioTag.currentTime / audioTag.duration
        audioTagProgress.style.width = `${positionOfAudio * 100}%`
      };
      this.songDuration = this.audio.duration.toFixed(0)
      this.playTrack = false;
      this.audio.play()
    },
    pauseSong() {
      this.playTrack = true;
      this.audio.pause()
    }
  }
};
</script>

<style>

</style>
