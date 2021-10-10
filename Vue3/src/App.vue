<template lang="pug">

  //- vue/comment-directive
  //- eslint-disable-next-line vue/no-deprecated-dollar-listeners-api
  div(v-on="$listeners")

  //- vue/no-deprecated-dollar-listeners-api
  div(v-on="$listeners")

  //- vue/no-deprecated-dollar-scopedslots-api
  div(v-if="$scopedSlots.default")
    slot

  //- vue/no-duplicate-attributes
  div(title="test1" title="test2")

  //- vue/no-deprecated-filter
  div(v-bind:id="filter(msg)")

</template>


<script lang="ts">

  import { Options, Vue } from "vue-class-component";
  import ExampleComponent from "@/components/ExampleComponent.vue";
  import ExampleFunctionalComponent from "@/components/ExampleFunctionalComponent.vue";


  @Options({
    components: {
      ExampleComponent,
      ExampleFunctionalComponent
    }
  })
  export default class App extends Vue {
    private readonly booleanField1: boolean = 1;
  }

</script>
