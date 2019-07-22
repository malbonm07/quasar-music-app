<template>
      <q-card class="bg-black border-cero cardTrack" v-if="trackObject && trackObject.album" @click="selectTrack">
        <q-img :src="trackObject.album.images[1].url">
          <div class="absolute-full flex flex-center" v-show="trackActive">
            <a v-if="playBtn" class="btn-customize btn-play" target="_blank" @click="play">
              <span class="play-btn">
                <q-icon name="play_arrow" style="font-size: 1.5rem;"/>
              </span>
            </a>
            <a v-else class="btn-customize btn-play" target="_blank" @click="pause">
              <span class="play-btn">
                <q-icon name="pause" style="font-size: 1.5rem;"/>
              </span>
            </a>
          </div>
          <div v-show="false" >
            <audio :src="trackObject.preview_url" ref="trackAudio" controls>
            </audio>
          </div>
        </q-img>
        <q-item-section top class="flex flex-center q-pt-sm">
          <q-item-label lines="1">
            <span class="text-subtitle2 text-capitalize text-white">{{trackObject.name}}</span>
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-grey-9 text-capitalize" v-if="folder">
            <span class="text-caption text-weight-light text-grey">Add to Folder</span>
            <q-btn flat round color="white" 
                   icon="folder_open"
                   @click="addToFavorites"
                   >
            </q-btn>
            <q-btn flat round color="white" icon="more_vert">
              <q-menu
                transition-show="scale"
                transition-hide="scale"
                content-style="background-color: #FFAB00"
                square
              >
                <q-list style="min-width: 100px">
                  <q-item clickable @click="goToTrack(trackObject.id)">
                    <q-item-section>See Details</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Download</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-item-label>
        </q-item-section>
      </q-card>
</template>

<script>
import trackMixin from '../mixins/playMixin'
export default {
  name: "tracks",
  mixins: [trackMixin],
  props: {
    trackObject: {
      type: Object,
      required: true
    },
    indexObject: {
      type: Number,
      required: true
    },
    trackActive: {
        type: Boolean,
        required: true
    },
    folder: {
      type: Boolean,
      required: true
    }
  },
  data ()  {
    return {
      playBtn: true
    }
  },
  methods: {
    goToTrack(id) {
      this.$router.push({ name: "track", params: { id } });
    },
    selectTrack() {
        this.$emit("selected", this.trackObject.id);
    },
    addToFavorites() {
      this.$emit("favorite", this.indexObject);
    }
  }
};
</script>

<style>

</style>
