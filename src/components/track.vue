<template>
      <q-card class="bg-black border-cero cardTrack" v-if="trackObject && trackObject.album" @click="selectTrack">
        <q-img :src="trackObject.album.images[1].url">
          <div class="absolute-full flex flex-center" v-show="trackActive">
            <a class="btn-customize btn-play" target="_blank">
              <span class="play-btn">
                <q-icon name="play_arrow" style="font-size: 1.5rem;"/>
              </span>
            </a>
          </div>
        </q-img>
        <q-item-section top class="flex flex-center q-pt-sm">
          <q-item-label lines="1">
            <span class="text-subtitle2 text-capitalize text-white">{{trackObject.name}}</span>
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-grey-9 text-capitalize">
            <span class="text-caption text-weight-light text-grey">Add to Folder</span>
            <q-btn flat round color="white" icon="folder_open" />
          </q-item-label>
        </q-item-section>
      </q-card>
</template>

<script>
export default {
  name: "tracks",
//   mixins: [fromMiliToSeconds],
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
    }
  },
  data ()  {
    return {
    }
  },
  methods: {
    goToTrack(id) {
      this.$router.push({ name: "track", params: { id } });
      console.log(id);
    },
    selectTrack() {
        // this.trackActive = true
        // console.log(this.trackActive)
        this.$emit("selected", this.trackObject.id);
    },
    addToFavorites() {
      this.$emit("favorite", this.indexObject);
      //console.log(this.indexObject);
    }
  }
};
</script>

<style>

</style>
