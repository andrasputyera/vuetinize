<template>
    <v-list
      class="pt-0"
      flat
    >
      <div
        v-for="task in $store.state.tasks" 
        :key="task.id"
      >
        <v-list-item
          @click="$store.commit('doneTask', task.id)" 
          :class="{ 'teal lighten-5' : task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <!-- Input value determines whether task was done (checks the checkbox)-->
              <v-checkbox
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through' : task.done }"
              >
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <!-- The stop method is used to prevent triggering parent element -->
              <v-btn 
              @click.stop="$store.commit('deleteTask', task.id)"
              icon
              >
                <v-icon color="teal lighten-3">mdi-delete-empty-outline</v-icon>
              </v-btn>
            </v-list-item-action> 
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>

</style>