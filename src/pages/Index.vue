<template>
  <q-page class="relative bg-black">
    <!------------------------------HEADER AND SEARCH------------------------------->
    <div class="row wrap relative items-center" style="height: 50vh;">
      <div class="offset-1 col-10 offset-md-3 col-md-6 absolute" style="z-index: 10">
        <q-input standout
        :dense="dense"
        type="text"
        placeholder="Search"
        v-model="searchedTrack"
        @keyup.enter="search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    <q-img src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="bg-search absolute" alt="bg-img" :ratio="16/9"></q-img>
    </div>
    <!------------------------------END HEADER------------------------------->

    <!------------------------------LOADING------------------------------->
    <div class="row justify-center q-pt-lg" v-show="loading">
      <div>
        <q-spinner-dots
          color="amber"
          size="6em"
        />
        <!-- <q-tooltip :offset="[0, 8]">QSpinnerDots</q-tooltip> -->
       </div>
    </div>
    <!------------------------------END LOADING------------------------------->
    
    <!------------------------------LIST OF TRACKS------------------------------->
    <div class="q-pa-md row justify-center items-center q-gutter-md">
      <div class="col-12">
        <div class="offset-1 col-10">
          <p class="text-center text-weight-thin text-subtitle1 text-grey text-weight-regular">{{tracks.length}} Songs were found</p>
        </div>
      </div>
      <div class="col-5 col-sm-3 col-md-2" v-for="(track, index) in tracks" :key="track.id">
        <Tracks
          :trackObject="track"
          :indexObject="index"
          @selected="trackSelected"
          :trackActive="track.id === trackIdSelected"
          @favorite="getFavoriteTrackIndex"
          :folder="true"
          v-blur="track.preview_url"
        >
        </Tracks>
      </div>
    </div>
    <!------------------------------END LIST OF TRACKS------------------------------->

    <!------------------------------SWIPER RELEASES------------------------------->
    <div class="row wrap">
      <div class="offset-1 col-10">
        <h2 class="text-center text-h2 text-white">
          New Releases
        </h2>
        <p class="text-center text-weight-thin text-subtitle1 text-grey">{{releases.length}} positions</p>
      </div>
      <div class="col-12 q-pr-md q-pl-md">
      <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide v-for="(release, i) in releases" :key="i">
            <div class="col-4">
              <!-- Ratio: 4/3 -->
              <Tracks 
              :trackObject="release"
              :indexObject="i"
              @selected="trackSelected"
              :trackActive="release.id === trackIdSelected"
              :class="{'isActive' : release.id === trackIdSelected }"
              @favorite="getFavoriteTrackIndex"
              :folder="false"
              class="trackBox relative"
                  >
              </Tracks>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!------------------------------END SWIPER RELEASES------------------------------->

    <!------------------------------NEW PLEYED SECTION------------------------------->
    <div class="row q-mb-lg">
      <div class="offset-1 col-10">
        <h4 class="text-h4 $text-color-primary text-white">
          New Pleyed
          <q-btn
            color="amber-14"
            size="xs"
            label="More"
            rounded
            text-color="black"
          />
        </h4>
      </div>
      <div class="col-12 offset-md-1 col-md-10">
      <q-card>
        <q-tabs
          v-model="tab"
          class="bg-black text-white"
          align="justify"
          narrow-indicator
        >
          <q-tab name="today" label="Today" />
          <q-tab name="week" label="Week" />
          <q-tab name="month" label="Month" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="bg-grey-12 text-center">
          <q-tab-panel name="today">
            <!-- <div class="text-h6">Mails</div> -->
            <div class="row">
              <div class="col-12">
                <q-list bordered>
                  <div v-for="(track, index) in releases" :key="track.id">
                    <q-item>
                      <q-item-section class="col-1">
                        <q-item-label>{{index | indexTrack}}</q-item-label>
                      </q-item-section>

                      <q-item-section avatar>
                        <img :src="track.album.images[1].url" width="37px">
                      </q-item-section>

                      <q-item-section class="col-3 col-sm-2 q-ml-md">
                        <q-item-label lines="1" class="q-mt-xs">{{track.album.artists[0].name}}</q-item-label>
                        <q-item-label lines="1" class="q-mt-xs">
                          <span class="text-grey-8">{{track.name}}</span>
                        </q-item-label>
                      </q-item-section>

                      <q-item-section></q-item-section>

                      <q-item-section side>
                        <q-item-label>{{track.duration_ms | milToSec}}</q-item-label>
                      </q-item-section>

                      <q-item-section side>
                        <playedFavorite
                          :btnValue = btnFav
                        >
                        </playedFavorite>
                      </q-item-section>
                    </q-item>
                  </div>
                </q-list>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="week">
            <div class="row">
              <div class="col-12">
                <q-list bordered>
                  <div v-for="(track, index) in pleyed.week" :key="track.id">
                    <q-item>
                      <q-item-section class="col-1">
                        <q-item-label>{{index | indexTrack}}</q-item-label>
                      </q-item-section>
                      <q-item-section avatar>
                        <img :src="track.album.images[1].url" width="37px">
                      </q-item-section>

                      <q-item-section class="col-3 col-sm-2 q-ml-md">
                        <q-item-label lines="1" class="q-mt-xs">{{track.album.artists[0].name}}</q-item-label>
                        <q-item-label lines="1" class="q-mt-xs">
                          <span class="text-grey-8">{{track.name}}</span>
                        </q-item-label>
                      </q-item-section>

                      <q-item-section></q-item-section>

                      <q-item-section side>
                        <q-item-label>{{track.duration_ms | milToSec}}</q-item-label>
                      </q-item-section>

                      <q-item-section side>
                        <playedFavorite
                          :btnValue = btnFav
                        >
                        </playedFavorite>
                      </q-item-section>
                    </q-item>
                  </div>
                </q-list>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="month">
            <div class="row">
              <div class="col-12">
                <q-list bordered>
                  <div v-for="(track, index) in pleyed.month" :key="track.id">
                    <q-item>
                      <q-item-section class="col-1">
                        <q-item-label>{{index | indexTrack}}</q-item-label>
                      </q-item-section>
                      <q-item-section avatar>
                        <img :src="track.album.images[1].url" width="37px">
                      </q-item-section>

                      <q-item-section class="col-3 col-sm-2 q-ml-md">
                        <q-item-label lines="1" class="q-mt-xs">{{track.album.artists[0].name}}</q-item-label>
                        <q-item-label lines="1" class="q-mt-xs">
                          <span class="text-grey-8">{{track.name}}</span>
                        </q-item-label>
                      </q-item-section>

                      <q-item-section></q-item-section>

                      <q-item-section side>
                        <q-item-label>{{track.duration_ms | milToSec}}</q-item-label>
                      </q-item-section>

                      <q-item-section side>
                        <playedFavorite
                          :btnValue = btnFav
                        >
                        </playedFavorite>
                      </q-item-section>
                    </q-item>
                  </div>
                </q-list>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      </div>
    </div>
    <!------------------------------END NEW PLEYED SECTION------------------------------->
    <q-separator color="grey-9"/>
    <!------------------------------FOOTER------------------------------->
    <div class="row q-mt-lg">
      <div class="offset-1 col-10 col-sm-4 q-mb-lg">
        <p class="text-start text-h4 text-white">
          Genre
        </p>
        <q-btn
          v-for="(genre, index) in genres" :key="index"
          color="amber-14"
          size="sm"
          :label="genre"
          class="q-ma-xs"
          outline
        />
      </div>
      <div class="offset-1 col-10 col-sm-5 q-mb-lg">
        <p class="text-start text-h4 text-white">
          Subscribe
        </p>
        <div class="row">
          <q-input dark outlined placeholder="Email" dense class="col-8"/>
          <q-btn color="amber-9" label="subscribe" text-color="black" class="col-4"/>
        </div>
        <div class="row q-mt-lg">
          <q-btn round outline color="transparent" class="q-ma-xs">
            <q-icon name="fab fa-twitter" color="amber" size="1.1rem"/>
          </q-btn>
          <q-btn round outline color="transparent" class="q-ma-xs">
            <q-icon name="fab fa-facebook-f" color="amber" size="1.1rem"/>
          </q-btn>
          <q-btn round outline color="transparent" class="q-ma-xs">
            <q-icon name="fab fa-instagram" color="amber" size="1.1rem"/>
          </q-btn>
          <q-btn round outline color="transparent" class="q-ma-xs">
            <q-icon name="fab fa-pinterest-p" color="amber" size="1.1rem"/>
          </q-btn>
          <q-btn round outline color="transparent" class="q-ma-xs">
            <q-icon name="fab fa-spotify" color="amber" size="1.1rem"/>
          </q-btn>
        </div>
      </div>
    </div>
    <!------------------------------END FOOTER------------------------------->
  </q-page>
</template>

<style>
</style>

<script>
import Tracks from '../components/track.vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import gettingApi from '../services/track'
import playedFavorite from '../components/pleyedFavorite'

export default {
  name: 'PageIndex',

  components: {
    swiper,
    swiperSlide,
    Tracks,
    playedFavorite
  },
  data () {
    return {
      searchedTrack: '',
      tracks: [],
      loading: null,
      alertNotification: false,
      trackIdSelected: null,
      favorites: [],
      trackIdSelected: "",
      tracksIds: [],
      releases: [],
      btnFav: true,
      genres: [
        'Pop',
        'Rock',
        'Jazz',
        'Blues',
        'Hip Hop',
        'Hip Hop',
        'Soul',
        'Metal',
        'Reggae',
        'Popular',
        'Reaggeton',
        'Punk Rock',
        'Classical',
        'Electro',
        'Indie',
        'Ska',
        'Trap',
        'Trance',
        'Instrumental',
      ],
      pleyed: {
        today: [],
        week: [],
        month: []
      },
      playBtn: true,
      text: '',
      ph: '',
      dense: false,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      tab: 'today'
    }
  },
  created() {
    if(window.innerWidth > 600) {
      this.swiperOption.slidesPerView = 4
    }
    let randomNum = Math.floor(Math.random() * Math.floor(6));
    let randomNumToPleyed = Math.floor(Math.random() * Math.floor(6));
    let arrayMusic = ['coldplay', 'the strokes you only', 'acdc', 'radiohead', 'king of leon', 'pearl jam', 'reik', 'soda stereo', 'maluma', 'adios amor daniela', 'probablemente daniela', 'muse starlight', 'muse panic station', 'the way you make me feel']
    arrayMusic.forEach(track => {
      gettingApi.search(track).then(res => {
        this.releases.push(res.tracks.items[randomNum])
       })
    })
    for(let i=0; i<6; i++) {
      gettingApi.search(arrayMusic[i]).then(res => {
        this.pleyed.week.push(res.tracks.items[randomNumToPleyed])
      })
    }
    for(let i=6; i<12; i++) {
      gettingApi.search(arrayMusic[i]).then(res => {
        this.pleyed.month.push(res.tracks.items[randomNumToPleyed])
      })
    }
    console.log(this)
  },
  methods: {
    search () {
      this.tracks = []
      this.loading = true
      if (!this.searchedTrack) {
        return
      } else {
        gettingApi.search(this.searchedTrack).then(res => {
          this.tracks = res.tracks.items
          // console.log(this.tracks)
          this.loading = false
          if (this.tracks.length === 0) {
            this.alertNotification = true
          }
        })
      }
    },
    trackSelected(id) {
      this.trackIdSelected = id;
    },
    getFavoriteTrackIndex(index) {     
      if(this.tracksIds.length === 0) { //agregamos el track.id al arreglo tracksIds[] y agregamos el mismo objeto a favoritos[]
        this.tracksIds.push(this.tracks[index].id)
        this.favorites.push(this.tracks[index]);
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
        //console.log(this.tracksIds)
      }else if (this.tracksIds.indexOf(this.tracks[index].id) >= 0) {//revisamos si ya tenemos el id dentro del arreglo tracksIds[]
        //console.log("este track ya está en lista de favoritos");
        localStorage.setItem("favorites", JSON.stringify(this.favorites));

        //agregamos el id del track al arreglo de favoritos[] y tambien agregamos el id al tracksIds[] para evitar repeticiones al momento de volver a agregar otro favorito
      } else {
        this.favorites.push(this.tracks[index]);
        this.tracksIds.push(this.tracks[index].id)
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
        //console.log("nuevo track agregado");
        //console.log(this.tracksIds)
      }
    },
    played() {
      console.log(this.$refs.trackAudi)
    }
  }
}
</script>