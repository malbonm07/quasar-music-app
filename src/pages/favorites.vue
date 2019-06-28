<template>
    <q-page>
        <div class="row relative bg-overlay" style="height: 100vh;">
            <div class="offset-1 col-10 offset-sm-3 col-sm-6 absolute q-pa-lg" style="z-index: 10;">
                <favoriteAudio>

                </favoriteAudio>
            </div>
                <!-- <div class="col-12 col-sm-5 absolute" style="z-index: 10;">
                    <q-list bordered>
                        <div v-for="(track, i) in favoritesTracks" :key="track.id">
                            <favoriteTrack
                            :favoriteTrackObject="track" :favoriteTrackIndex="i" @delete="deleteTrack"
                            >
                            </favoriteTrack>
                        </div>
                    </q-list>
                </div> -->
            <q-img v-if="currentTrackSong" :src="currentTrackSong.album.images[1].url" :ratio="16/9" style="filter: blur(15px);"></q-img>
        </div>
        <div class="col-12 bg-black">
            <q-list bordered dark>
                <div v-for="(track, i) in favoritesTracks" :key="track.id">
                    <favoriteTrack
                        :favoriteTrackObject="track" :favoriteTrackIndex="i"
                        @delete="deleteTrack"
                        @currentSong="currentTrack"
                        >
                    </favoriteTrack>
                </div>
            </q-list>
        </div>
    </q-page>
</template>

<script>
import favoriteTrack from "../components/favoritePage/favoriteTrack";
import favoriteAudio from "../components/favoritePage/favoriteAudio";

export default {
  components: { favoriteTrack, favoriteAudio },
  name: "appAbout",
  data() {
    return {
      favoritesTracks: [],
      favoriteTrackId: "",
      indexTrack: "",
      currentTrackSong: null
    };
  },
  created() {
    this.favoritesTracks = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
  },
  methods: {
    deleteTrack(index) {
      this.favoritesTracks.splice(index, 1);
      this.indexTrack = index;
      localStorage.setItem("favorites", JSON.stringify(this.favoritesTracks));
    },
    currentTrack(track) {
        this.currentTrackSong = track
    }
  }
};
</script>

<style>

</style>
