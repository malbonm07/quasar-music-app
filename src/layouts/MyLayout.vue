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
      :content-style="{ backgroundColor: '#1a1a1a' }"
    >
      <q-list bordered class="text-grey-4">
        <!-- <q-item-label header>Essential Links</q-item-label> -->
        <q-item clickable tag="a"
        target="_blank"
        :active="link === 'radio'"
        @click="link = 'radio'"
        active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="radio" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Radio</q-item-label>
            <!-- <q-item-label caption>quasar.dev</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a"
        target="_blank"
        :active="link === 'folder'"
        @click="link = 'folder'"
        active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="folder" />
          </q-item-section>
          <q-item-section>
            <q-item-label>My Music Folder</q-item-label>
            <!-- <q-item-label caption>github.com/quasarframework</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a"
        target="_blank"
        :active="link === 'artists'"
        @click="link = 'artists'"
        active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="headset" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Artists</q-item-label>
            <!-- <q-item-label caption>chat.quasar.dev</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a"
        target="_blank"
        :active="link === 'video'"
        @click="link = 'video'"
        active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="play_circle_outline" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Video</q-item-label>
            <!-- <q-item-label caption>forum.quasar.dev</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-separator color="grey-9"/>
        <q-expansion-item
          expand-separator
          icon="settings"
          label="Settings"
          header-class="text-grey-4"
          :active="link === 'settings'"
          @click="link = 'settings'"
          active-class="my-menu-link"
        >
          <q-card style="background: #262626">
              <q-item clickable tag="a"
              :active="link === 'account'"
              @click="link = 'account'"
              target="_blank"
              active-class="my-menu-link">
                <q-item-section avatar>
                  <q-icon name="perm_identity" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Account</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable tag="a"
              :active="link === 'privaticy'"
              @click="link = 'privaticy'"
              target="_blank"
              active-class="my-menu-link">
                <q-item-section avatar>
                  <q-icon name="security" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Privaticy</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable tag="a"
              :active="link === 'notification'"
              @click="link = 'notification'"
              target="_blank"
              active-class="my-menu-link">
                <q-item-section avatar>
                  <q-icon name="notification_important" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Notification</q-item-label>
                </q-item-section>
              </q-item>
          </q-card>
        </q-expansion-item>
        <q-item clickable tag="a"
        target="_blank"
        :active="link === 'help'"
        @click="link = 'help'"
        active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Help</q-item-label>
            <!-- <q-item-label caption>@quasarframework</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a"
        target="_blank"
        :active="link === 'feedback'"
        @click="link = 'feedback'"
        active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="feedback" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Send Feedback</q-item-label>
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
      leftDrawerOpen: this.$q.platform.is.desktop,
      link: 'artists'
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
