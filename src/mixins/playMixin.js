const trackMixin = {
    methods: {
        play() {
            let song = this.$refs.trackAudio
            this.playBtn = false
            song.play()
          },
        pause() {
            let song = this.$refs.trackAudio
            this.playBtn = true
            song.pause()
          }
    }
}

export default trackMixin;