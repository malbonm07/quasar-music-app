<template>
    <q-page>
        <div class="row relative" style="height: 100vh;">
            <div class="offset-1 col-10 col-sm-5 offset-md-3 col-md-6 absolute q-pa-lg" style="z-index: 10;">
                dasdasdassa
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
            <q-img src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="bg-search absolute" alt="bg-img" :ratio="16/9"></q-img>
        </div>
        <div class="col-12 bg-black">
            <q-list bordered dark>
                <div v-for="(track, i) in favoritesTracks" :key="track.id">
                    <favoriteTrack
                        :favoriteTrackObject="track" :favoriteTrackIndex="i" @delete="deleteTrack"
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
      indexTrack: ""
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
    }
  }
};
</script>

<style>

</style>
