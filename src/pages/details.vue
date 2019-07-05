<template>
    <q-page>
        <div class="row" v-if="trackContent && trackContent.album">
            <div class="col-12 col-sm-4">
                <q-card class="my-card">
                        <img :src="trackContent.album.images[1].url">
                </q-card>
                </div>
            <div class="col-12 col-sm-6">
                <q-card>
                     <q-card-section>
                        <div class="text-h6">{{trackContent.name}}</div>
                        <div class="text-subtitle2">{{trackContent.album.artists[0].name}}</div>
                     </q-card-section>

                     <q-card-section>
                        <div>Duration: <span>{{trackContent.duration_ms | milToSec}}</span></div>
                        <div>Album: <span>{{trackContent.album.name}}</span></div>
                        <div>Popularity: <q-badge :class="{'badgeSuc' : trackContent.popularity >= 80, 'bargeWarning' : trackContent.popularity < 80 }">{{trackContent.popularity}}%</q-badge></div>
                     </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script>
import gettingApi from "../services/track";
export default {
  data() {
    return {
      trackContent: {}
    };
  },
  computed: {},
  created() {
    const id = this.$route.params.id;
    gettingApi.getId(id).then(res => (this.trackContent = res));
  }
};
</script>

<style>

</style>
