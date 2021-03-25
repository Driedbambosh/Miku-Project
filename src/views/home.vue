<template>
  <div class="fat">
    <b-form-file v-model="file"
                 :state="Boolean(file)"
                 placeholder="Choose a file or drop it here..."
                 drop-placeholder="Drop file here..."></b-form-file>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
</style>
