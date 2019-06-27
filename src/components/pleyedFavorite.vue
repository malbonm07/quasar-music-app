<template>
    <div class="text-grey-8 q-gutter-xs">
        <q-btn v-if="btnValue" size="12px" flat dense round icon="favorite_border" @click="btnValue = false"/>
        <q-btn v-else size="12px" flat dense round icon="favorite" @click="btnValue = true"/>
        <q-btn size="12px" flat dense round icon="more_vert" />
    </div>
</template>

<script>
export default {
    props: {
        btnValue: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style>

</style>
