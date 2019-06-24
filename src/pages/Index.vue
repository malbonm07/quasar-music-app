<template>
  <q-page class="relative bg-black">
    <!------------------------------HEADER AND SEARCH------------------------------->
    <div class="row wrap relative items-center" style="height: 50vh;">
      <div class="offset-1 col-10 offset-md-3 col-md-6 absolute" style="z-index: 10">
        <q-input standout v-model="text" :dense="dense">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    <q-img src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="bg-search absolute" alt="bg-img" :ratio="16/9"></q-img>
    </div>
    <!------------------------------END HEADER------------------------------->

    <!------------------------------SWIPER RELEASES------------------------------->
    <div class="row wrap">
      <div class="offset-1 col-10">
        <h2 class="text-center text-h2 text-white">
          New Releases
        </h2>
        <p class="text-center text-weight-thin text-subtitle1 text-grey">22 positions</p>
      </div>
      <div class="offset-1 col-10">
      <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide>
            <div class="col-4">
              <!-- Ratio: 4/3 -->
              <q-img
                src="https://placeimg.com/500/300/nature"
                :ratio="1"
                style="border-radius: 5px;"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="col-4">
              <!-- Ratio: 4/3 -->
              <q-img
                src="https://placeimg.com/500/300/nature"
                :ratio="1"
                style="border-radius: 3px;"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="col-4">
              <!-- Ratio: 4/3 -->
              <q-img
                src="https://placeimg.com/500/300/nature"
                :ratio="1"
                style="border-radius: 3px;"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="col-4">
              <!-- Ratio: 4/3 -->
              <q-img
                src="https://placeimg.com/500/300/nature"
                :ratio="1"
                style="border-radius: 3px;"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="col-4">
              <!-- Ratio: 4/3 -->
              <q-img
                src="https://placeimg.com/500/300/nature"
                :ratio="1"
                style="border-radius: 3px;"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="col-4">
              <!-- Ratio: 4/3 -->
              <q-img
                src="https://placeimg.com/500/300/nature"
                :ratio="1"
                style="border-radius: 3px;"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!------------------------------END SWIPER RELEASES------------------------------->

    <!------------------------------NEW PLEYED SECTION------------------------------->
    <div class="row">
      <div class="offset-1 col-10">
        <h4 class="text-h4 $text-color-primary text-white">
          New Pleyed
        </h4>
      </div>
      <div class="offset-1 col-10">
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

        <q-tab-panels v-model="tab" animated class="bg-purple-1 text-center">
          <q-tab-panel name="today">
            <!-- <div class="text-h6">Mails</div> -->
            <div class="row">
              <div class="col-12">
                <q-list bordered>
                  <q-item>
                    <q-item-section avatar>
                      <img src="https://cdn.quasar.dev/img/boy-avatar.png" width="37px">
                    </q-item-section>

                    <q-item-section class="col-3 col-sm-2">
                      <q-item-label lines="1" class="q-mt-xs">Single line title</q-item-label>
                      <q-item-label lines="1" class="q-mt-xs">
                        <span class="text-grey-8"> Single subtitle</span>
                      </q-item-label>
                    </q-item-section>

                    <q-item-section>
                      <!-- <q-item-label lines="1">
                        <span class="text-weight-medium">[quasarframework/quasar]</span>
                        <span class="text-grey-8"> - GitHub repository</span>
                      </q-item-label>
                      <q-item-label caption lines="1">
                        @rstoenescu in #1: > The build system
                      </q-item-label> -->
                    </q-item-section>

                    <q-item-section side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn size="12px" flat dense round icon="favorite" />
                        <q-btn size="12px" flat dense round icon="more_vert" />
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <img src="https://cdn.quasar.dev/img/boy-avatar.png" width="37px">
                    </q-item-section>

                    <q-item-section class="col-3 col-sm-2">
                      <q-item-label lines="1" class="q-mt-xs">Single line title</q-item-label>
                      <q-item-label lines="1" class="q-mt-xs">
                        <span class="text-grey-8"> Single subtitle</span>
                      </q-item-label>
                    </q-item-section>

                    <q-item-section>
                      <!-- <q-item-label lines="1">
                        <span class="text-weight-medium">[quasarframework/quasar]</span>
                        <span class="text-grey-8"> - GitHub repository</span>
                      </q-item-label>
                      <q-item-label caption lines="1">
                        @rstoenescu in #1: > The build system
                      </q-item-label> -->
                    </q-item-section>

                    <q-item-section side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn size="12px" flat dense round icon="favorite_border" />
                        <q-btn size="12px" flat dense round icon="more_vert" />
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="week" class="bg-purple-2">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="month">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      </div>
    </div>
    <!------------------------------END NEW PLEYED SECTION------------------------------->
  </q-page>
</template>

<style>
</style>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'PageIndex',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      text: '',
      ph: '',
      dense: false,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        // loop: true,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      tab: 'today'
    }
  }
}
</script>
