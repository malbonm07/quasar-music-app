<template>
    <q-card style="background: transparent; overflow: hidden;" dark>
      <q-card-title>
        <div class="text-caption text-weight-light text-center text-uppercase q-pt-lg">PLAYLIST</div>
        <div class="text-overline text-center text-capitalize">playlist of the song</div>
      </q-card-title>
      <q-card-separator />
      <q-card-section>
          <div class="row q-mt-lg">
              <div class="offset-2 col-8 offset-sm-3 col-sm-6">
                <img :src="favoriteTrack.album.images[1].url" width="100%">
              </div>
          </div>
      </q-card-section>
      <q-card-section>
          <div class="text-center text-capitalize text-subtitle2 q-mt-lg">
              title of the song
          </div>
          <div class="text-center text-capitalize text-caption text-weight-light">
              title of the author
          </div>
      </q-card-section>
      <q-card-section>
          <div class="row q-mt-lg">
            <div class="offset-1 col-10">
                <q-linear-progress dark :value="progress" color="white" class="q-mt-sm"/>
                <div class="row justify-between">
                    <span class="text-weight-light q-pa-xs" style="font-size: 10px">3:20</span>
                    <span class="text-weight-light q-pa-xs" style="font-size: 10px">-2:50</span>
                </div>
            </div>
          </div>
      </q-card-section>
      <div class="bg-black boxShadow">
      <q-card-section>
          <div class="row items-center justify-center">
            <q-btn color="transparent q-mr-md" icon="fast_rewind" round/>
            <div>
                <a v-if="playTrack" class="btn-customize btn-play" target="_blank">
                <span class="play-btn">
                    <q-icon name="play_arrow" style="font-size: 1.5rem;"/>
                </span>
                </a>
                <a v-else class="btn-customize btn-play" target="_blank" >
                <span class="play-btn">
                    <q-icon name="pause" style="font-size: 1.5rem;"/>
                </span>
                </a>
            </div>
            <q-btn color="transparent q-ml-md" icon="fast_forward" round/>
          </div>
      </q-card-section>
      <q-card-section>
          <div class="row justify-around q-mt-md q-pb-lg">
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
      </div>
    </q-card>
</template>

<script>
export default {
  data() {
    return {
      favoriteTrack: {}
    };
  },
  created() {
    this.$root.$on("play", track => {
    this.favoriteTrack = track;
    console.log(this.favoriteTrack);
    });
  }
};
</script>

<style>

</style>
