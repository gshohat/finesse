<template>
  <div>
    <v-container
        v-for="align in singles"
        :key="align"
        class="grey lighten-5 mb-6"
    >
      <v-row
          :align="align"
          no-gutters
          style="height: 150px;"
      >
        <v-col
            v-for="n in 3"
            :key="n"
        >
          <v-card
              class="pa-2"
              outlined
              tile
          >
            <Single name="Gilad"></Single>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="grey lighten-5">
      <v-row
          no-gutters
          style="height: 150px;"
      >
        <v-col
            v-for="align in alignments"
            :key="align"
            :align-self="align"
        >
          <v-card
              class="pa-2"
              outlined
              tile
          >
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Single from './Single/Single';

export default {
  name: 'Singles',
  components: {
    Single
  },
  data: () => ({
    singles: ['1', '2', '3'],
  }),
};

</script>

<style scoped>

</style>
