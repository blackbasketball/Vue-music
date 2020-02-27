<template>
  <div id="mheader">
    <h3>{{ header }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Mheader',
  data() {
    return {
        header: 'Magic Music',
    }
  }
}
</script>

<style>
    #mheader h3 {
        color: #fff;
    }
</style>
