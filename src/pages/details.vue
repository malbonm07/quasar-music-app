<template>
    <q-page class="bg-amber">
        <div class="row" v-if="trackContent && trackContent.album">
            <div class="col-12 offset-sm-3 col-sm-6">
                <q-card class="my-card q-mt-lg q-mb-lg" style="background: black" dark>
                     <img :src="trackContent.album.images[1].url">
                     <q-card-section>
                        <div class="text-overline text-center text-grey-8">Title</div>
                        <div class="text-h4 text-center q-mb-md">{{trackContent.name}}</div>
                        <div class="text-overline text-center text-grey-8">Artist Name</div>
                        <div class="text-subtitle2 text-center q-mb-md">{{trackContent.album.artists[0].name}}</div>
                        <div class="text-overline text-center text-grey-8">Find it in</div>
                        <div class="text-center">
                          <q-btn round outline color="transparent" class="q-ma-xs">
                            <q-icon name="audiotrack" color="amber" size="1rem"/>
                          </q-btn>
                          <q-btn round outline color="transparent" class="q-ma-xs">
                            <q-icon name="fab fa-instagram" color="amber" size="1rem"/>
                          </q-btn>
                          <q-btn round outline color="transparent" class="q-ma-xs">
                            <q-icon name="fab fa-spotify" color="amber" size="1rem"/>
                          </q-btn>
                          <q-btn round outline color="transparent" class="q-ma-xs">
                            <q-icon name="playlist_add" color="amber" size="1rem"/>
                          </q-btn>
                        </div>
                     </q-card-section>

                     <q-separator dark />

                     <q-card-section>
                        <div class="q-mb-md text-subtitle1 text-grey">
                          Duration: 
                          <span class="text-white">
                            {{trackContent.duration_ms | milToSec}}
                          </span></div>
                        <div class="q-mb-md text-subtitle1 text-grey">
                          Album: 
                          <span class="text-white">
                            {{trackContent.album.name}}
                          </span></div>
                        <div class="q-mb-md text-subtitle1 text-grey">
                          Popularity: 
                          <q-badge :class="{'badgeSuc' : trackContent.popularity >= 80, 'bargeWarning' : trackContent.popularity < 80 }">{{trackContent.popularity}}%
                          </q-badge></div>
                        <div class="q-mb-md text-subtitle1 text-grey">
                          Fecha: 
                          <span class="text-white">
                            {{trackContent.album.release_date}}
                          </span></div>
                     </q-card-section>
                     <q-card-section>
                       <div>
                        <a
                          class="btn-link"
                          :href="trackContent.album.external_urls.spotify"
                          target="_blank"
                        >Play in Spotify</a>
                       </div>
                     </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script>
import gettingApi from "../services/track";
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      trackContent: {}
    };
  },
  created() {
    const id = this.$route.params.id;
    gettingApi.getId(id).then(res => (this.trackContent = res));
    setTimeout(() => {
      console.log(this.trackContent)
    }, 3000)
  }
};
</script>

<style>

</style>
