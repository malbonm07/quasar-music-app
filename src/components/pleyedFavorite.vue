<template>
    <div class="text-grey-8 q-gutter-xs">
        <q-btn v-if="btnVal" size="12px" flat dense round icon="favorite_border" @click="btnVal = false"/>
        <q-btn v-else size="12px" flat dense round icon="favorite" @click="btnVal = true"/>
        <q-btn size="12px" flat dense round icon="more_vert" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            btnVal: true
        }
    }
}
</script>

<style>

</style>
