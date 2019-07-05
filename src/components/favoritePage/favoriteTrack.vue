<template>
    <q-item v-if="favoriteTrackObject" clickable @click="playTrack">
        <q-item-section class="col-1">
            <q-item-label class="text-center">{{favoriteTrackIndex | indexTrack}}</q-item-label>
        </q-item-section>

        <q-item-section avatar>
            <img :src="favoriteTrackObject.album.images[1].url" width="37px">
        </q-item-section>

        <q-item-section class="col-3 col-sm-2 q-ml-md">
            <q-item-label lines="1" class="q-mt-xs">
                {{favoriteTrackObject.album.artists[0].name}}</q-item-label>
            <q-item-label lines="1" class="q-mt-xs">
                <span class="text-grey-8">{{favoriteTrackObject.name}}</span>
            </q-item-label>
        </q-item-section>

        <q-item-section></q-item-section>

        <q-item-section side>
            <q-item-label>
                {{favoriteTrackObject.duration_ms | milToSec}}
            </q-item-label>
        </q-item-section>

        <q-item-section side>
            <q-btn size="12px" flat dense round icon="delete_outline" @click="deleteFavoriteTrack"/>
        </q-item-section>
    </q-item> 
</template>

<script>
export default {
  props: {
    favoriteTrackObject: {
      type: Object,
      required: true
    },
    favoriteTrackIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {};
  },
  created() {
    this.playTrack()
  },
  methods: {
    deleteFavoriteTrack() {
      this.$emit("delete", this.favoriteTrackIndex);
    },
    playTrack() {
      this.$emit('currentSong', this.favoriteTrackObject)
      this.$root.$emit('play', this.favoriteTrackObject)
    }
  }
};
</script>

<style>

</style>
