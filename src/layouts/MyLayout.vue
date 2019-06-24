<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background: #0A4987">
      <q-toolbar>
        <q-toolbar-title>
          Free Music App
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <!-- <q-item-label header>Essential Links</q-item-label> -->
        <q-item clickable tag="a" target="_blank">
          <q-item-section avatar>
            <q-icon name="radio" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Radio</q-item-label>
            <!-- <q-item-label caption>quasar.dev</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank">
          <q-item-section avatar>
            <q-icon name="folder" />
          </q-item-section>
          <q-item-section>
            <q-item-label>My Music Folder</q-item-label>
            <!-- <q-item-label caption>github.com/quasarframework</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="">
          <q-item-section avatar>
            <q-icon name="headset" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Artists</q-item-label>
            <!-- <q-item-label caption>chat.quasar.dev</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="">
          <q-item-section avatar>
            <q-icon name="play_circle_outline" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Video</q-item-label>
            <!-- <q-item-label caption>forum.quasar.dev</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Settings</q-item-label>
            <!-- <q-item-label caption>@quasarframework</q-item-label> -->
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
