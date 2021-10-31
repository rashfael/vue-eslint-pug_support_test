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

  //- vue/no-deprecated-html-element-is
  div(is="foo")
  div(:is="foo")

  //- vue/no-deprecated-inline-template
  my-component(inline-template="")
    div
      p These are compiled as the component&apos;s own template.
      p Not parent&apos;s transclusion content.

  //- vue/no-deprecated-scope-attribute
  //- vue/no-deprecated-slot-attribute
  template(slot="name" scope="props") {{ props.title }}

  //- vue/no-deprecated-slot-scope-attribute
  template(slot-scope="props") {{ props.title }}

  //- vue/no-deprecated-v-bind-syn
  MyComponent(v-bind:propname.sync="foo")
  MyComponent(v-bind:[dynamiarg].sync="foo")
  MyComponent(v-bind.sync="foo")
  MyComponent(:propname.sync="foo")

  //- vue/no-deprecated-v-on-native-modifier
  CoolInput(v-on:keydown.native="onKeydown")
  CoolInput(@keydown.enter.native="onKeydownEnter")

  //- vue/no-deprecated-v-on-number-modifiers
  input(v-on:keyup.34="onArrowUp")
  input(@keyup.34="onArrowUp")

  //- vue/no-dupe-v-else-if
  div(v-if="isSomething(x)")
  div(v-else-if="isSomething(x)")

  div(v-if="a")
  div(v-else-if="b")
  div(v-else-if="c && d")
  div(v-else-if="c && d")

  div(v-if="n === 1")
  div(v-else-if="n === 2")
  div(v-else-if="n === 3")
  div(v-else-if="n === 2")
  div(v-else-if="n === 5")

  //- vue/no-duplicate-attributes
  MyComponent(:foo="abc" foo="def")
  MyComponent(foo="abc" :foo="def")
  MyComponent(foo="abc" foo="def")
  MyComponent(:foo.a="abc" :foo.b="def")
  MyComponent(class="abc" class="def")

  //- vue/no-parsing-error
  | {{ . }}
  | {{ foo bar }}
  div(:class="*abc*" / @click="def(")

  //- vue/no-template-key
  template(v-for="item in list", :key="item.id")  ...
  template(key="foo")  ...
  template(v-bind:key="bar")  ...
  template(:key="baz")  ...

  //- vue/no-textarea-mustache
  textarea {{ message }}

  //- vue/no-unused-vars
  ol(v-for="i in 5")
    li {{ item }}

  //- vue/no-use-v-if-with-v-for
  TodoItem(
    v-if="complete"
    v-for="todo in todos"
    :todo="todo"
  )
  TodoItem(
    v-for="todo in todos"
    v-if="todo.shown"
    :todo="todo"
  )

  //- vue/no-useless-template-attributes
  template.heading(v-if="foo") ...
  template(v-for="i in foo", :bar="i") ...
  template(v-slot:foo="foo", ref="input") ...
  template(v-if="foo", @click="click") ...

  //- vue/no-v-for-template-key-on-child
  template(v-for="todo in todos")
    foo(:key="todo")

  //- vue/require-component-is
  component
  component(is="type")

  //- vue/require-toggle-inside-transition.html
  transition: div

  //- vue/require-v-for-key
  div(v-for="todo in todos")

  //- vue/use-v-on-exact
  div(v-on:click="foo" v-on:click.ctrl="foo")

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
