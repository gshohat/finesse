<template>
  <div>
    <v-card-title data-testid="title">{{ name }}</v-card-title>
    <video style="height: 150px;" controls>
      <source :src=video type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'Single',
  props: {
    name: String
  },
  data: () => ({
    video: "https://ipfs.io/ipfs/QmN1YPB2qsmhQ1awth2yRKGqawWqjcaxEHTDSiaMqzsS87L?filename=intro.mp4"
  })
};
</script>

<style scoped>

</style>
