<template lang="pug">

  //- vue/no-deprecated-dollar-listeners-api
  div(v-on="$listeners")

  //- vue/no-deprecated-dollar-scopedslots-api
  div(v-if="$scopedSlots.default")
    slot

  //- [ DONE ] vue/no-duplicate-attributes
  div(title="test1" title="test2")

  //- vue/no-deprecated-filter
  div(v-bind:id="filter(msg)")

  //- vue/comment-directive
  //- eslint-disable-next-line vue/no-duplicate-attributes
  div(title="test1" title="test2")

  //- [ DONE ] vue/no-dupe-v-else-if
  div(v-if="booleanField1") FOO
  div(v-else-if="booleanField1") BAR

  //- vue/no-parsing-error
  | {{ . }}

  //- [ DONE ] vue/no-template-key
  template(key="foo")

  //- [ DONE ] vue/no-textarea-mustache
  textarea {{ message }}

  //- vue/no-unused-vars
  //- [ DONE ] vue/no-use-v-if-with-v-for
  div(
    v-if="booleanField1"
    v-for="i in 5"
    :key="i"
  )
    li item

  //- [ DONE ] vue/require-component-is
  component
  component(is="type")

  //- [ DONE ] vue/require-v-for-key
  div(
    v-for="i in 5"
  ) {{ i }}

  //- vue/use-v-on-exact
  button(v-on:click="foo")

  //- vue/valid-template-root
  template(src='foo.html'): div

  //- vue/valid-v-bind
  div(v-bind)
  div(:aaa)
  div(v-bind:aaa.bbb)

  //- vue/valid-v-cloak
  div(v-cloak:aaa)
  div(v-cloak.bbb)
  div(v-cloak="ccc")

  //- vue/valid-v-else-if
  div
  div(v-else-if="booleanField1")

  div(v-if="booleanField1")
  div(v-else-if)

  div(v-if="booleanField1")
  div(v-else-if:aaa="booleanField1")
  div(v-if="booleanField1")
  div(v-else-if.bbb="booleanField1")

  //- vue/valid-v-else
  div(v-else)
  div(v-if="x")div(v-else="foo")
  div(v-if="x")div(v-else:aaa)
  div(v-if="x")(div v-else.bbb)

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
