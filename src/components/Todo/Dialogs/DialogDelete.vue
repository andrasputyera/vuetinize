<template>
    <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Delete task?
        </v-card-title>
        <v-card-text>By removing this task, you will no longer be able to access it.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey"
            text
            @click="dialog = false"
          >
            No
          </v-btn>
          <v-btn
            color="teal darken-1"
            text
            @click="dialog = false"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>

</style>