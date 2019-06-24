<template>
    <q-page :style-fn="myTweak">
    <hooper :infiniteScroll="true">
    <slide>
        slide 1
    </slide>
    <slide>
        slide 2
    </slide>
    <slide>
        slide 3
    </slide>
    <slide>
        slide 4
    </slide>
    <slide>
        slide 5
    </slide>
    <slide>
        slide 6
    </slide>
    </hooper>
    </q-page>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  name: 'App',
  components: {
    Hooper,
    Slide
  }
}
</script>

<style>

</style>
