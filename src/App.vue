<template lang="pug">

  //- vue/no-duplicate-attributes
  div(title="test1" title="test2")

  //- vue/no-dupe-v-else-if
  div(v-if="booleanField1") FOO
  div(v-else-if="booleanField1") BAR

  //- vue/no-parsing-error
  | {{ . }}

  //- vue/no-template-key
  template(key="foo")

  //- vue/no-textarea-mustache
  textarea {{ message }}

  //- vue/no-unused-vars
  //- vue/no-use-v-if-with-v-for
  div(
    v-if="booleanField1"
    v-for="i in 5"
  )
    li item

  //- vue/require-component-is
  component
  component(is="type")

  //- vue/require-v-for-key
  div(
    v-for="i in 5"
  ) {{ i }}

  //- vue/use-v-on-exact
  button(v-on:click="foo")

  //-
    Also it must be:
      vue/no-unused-components

</template>

<script lang="ts">

  import { Options, Vue } from "vue-class-component";
  import ExampleComponent from "@/components/ExampleComponent.vue";


  @Options({
    components: {
      ExampleComponent
    }
  })
  export default class App extends Vue {

    private readonly booleanField1: boolean = 1;

  }

</script>
