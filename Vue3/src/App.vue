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

  //- vue/valid-v-bind
  div(v-bind="")
  div(:aaa="")
  div(v-bind:aaa.bbb="foo")

  //- vue/valid-v-cloak
  div(v-cloak:aaa="")
  div(v-cloak.bbb="")
  div(v-cloak="ccc")

  //- vue/valid-v-html
  div(v-html="")
  div(v-html:aaa="foo")
  div(v-html.bbb="foo")

  //- vue/valid-v-is
  tr(v-is:a="foo")
  tr(v-is.m="foo")
  tr(v-is="")
  tr(v-is="")
  mycomponent(v-is="foo")

  //- vue/valid-v-memo
  div(v-memo="")
  div(v-memo:aaa="[x]")
  div(v-memo.bbb="[x]")
  div(v-memo="{x}")
  div(v-for="i in items"): div(v-memo="[i]")

  //- vue/valid-v-memo
  input(v-model="")
  input(v-model:aaa="foo")
  input(v-model.bbb="foo")
  input(v-model="foo + bar")
  input(v-model="a?.b.c")
  input(v-model="(a?.b).c")
  div(v-model="foo")
  div(v-for="todo in todos"): input(v-model="todo")

  //- vue/valid-v-on
  div(v-on="")
  div(v-on:click="")
  div(v-on:click.aaa="foo")
  div(@click="")

  //- vue/valid-v-once
  div(v-once:aaa="")
  div(v-once.bbb="")
  div(v-once="ccc")

  //- vue/valid-v-pre
  div(v-pre:aaa="")
  div(v-pre.bbb="")
  div(v-pre="ccc")

  //- vue/valid-v-show
  div(v-show="")
  div(v-show:aaa="foo")
  div(v-show.bbb="foo")
  template(v-show="condition")

  //- vue/valid-v-slot
  div(v-slot="data") {{ data }}
  div: template(v-slot:one) one

  my-component(v-slot:one="data") {{ data }}
  my-component(v-slot="data")
    | {{data}}
    template(v-slot:one) one

  my-component(v-slot:one v-slot:two) one and two
  my-component
    template(v-slot:one) one 1
    template(v-slot:one) one 2

  my-component
    template(v-slot:[data]="data") dynamic?
  my-component(v-slot.mod="data") {{ data }}
  my-component(v-slot) content

  //- vue/valid-v-text
  div(v-text="")
  div(v-text:aaa="foo")
  div(v-text.bbb="foo")

  //- vue/attribute-hyphenation
  MyComponent(myProp="prop")

  //- vue/first-attribute-linebreak
  MyComponent(lorem="1"
    ipsum="2")

  //- vue/html-indent
  div(
    id="a"
      class="foo"
  )

  //- vue/html-quotes
  img(src='./logo.png')

  //- vue/max-attributes-per-line
  mycomponent(
    lorem="1" ipsum="2"
    dolor="3"
  )

  //- vue/mustache-interpolation-spacing
  div {{   text   }}
  div {{ text }}

  //- vue/no-multi-spaces
  .foo(:style=   "bar")
  i(:class="{\
    'fa-angle-up'   : isExpanded,\
    'fa-angle-down' : !isExpanded,\
  }")

  //- vue/no-spaces-around-equal-signs-in-attribute
  div(class  =   "item")

  //- vue/no-template-shadow
  div
    div(v-for="k in 5")
      div(v-for="k in 10")
      div(slot-scope="{ k }")
    div(v-for="l in 5")

  //- vue/v-bind-style
  div(v-bind:foo="bar")

  //- vue/v-bind-style
  MyComponent(v-on:customEvent="handleEvent")
  MyComponent(@customEvent="handleEvent")

  //- vue/v-on-style
  div(v-on:click="foo")

  //- vue/v-slot-style
  template(v-slot) content
  template(v-slot:one) content
  template(v-slot:two) content

  //- vue/attributes-order
  div(
    ref="header"
    v-for="item in items"
    v-once
    id="uniqueID"
    v-model="headerData"
    my-prop="prop"
    v-if="!visible"
    is="header"
    @click="functionCall"
    v-text="textContent"
  )

  //- vue/no-lone-template
  template

  //- vue/no-v-html
  div(v-html="someHTML")


  //- vue/this-in-template
  a(:href="this.url") {{ this.text }}

  //- vue/component-name-in-template-casing
  cool-component
  coolComponent
  Cool-component

  //- vue/custom-event-name-casing
  //- ↓ It will break the linting
  //- button(@click="$emit("myEvent")")

  //- vue/html-button-has-type
  button Hello World
  button(type="")
  button(type="foo")

  //- vue/no-bare-strings-in-template
  h1 Lorem ipsum
  div(
    title="Lorem ipsum"
    aria-label="Lorem ipsum"
    aria-placeholder="Lorem ipsum"
    aria-roledescription="Lorem ipsum"
    aria-valuetext="Lorem ipsum"
  )
  img(alt="Lorem ipsum")
  input(placeholder="Lorem ipsum")
  //- ↓ It will break the linting
  //- h1(v-text=""Lorem ipsum"")

  //- vue/no-child-content
  div(v-html="replacesChildContent") child content

  //- vue/no-duplicate-attr-inheritance
  MyInput(v-bind="$attrs")

  //- vue/no-multiple-objects-in-class
  div(:class="[{'foo': isFoo}, {'bar': isBar}]")

  //- vue/no-restricted-class
  div(class="forbidden")
  div.forbidden-two
  .forbidden-three
  div(:class="{ forbidden: booleanField1 }")
  div(:class="`forbidden ${someString}`")
  div(:class="'forbidden'")
  div(:class="'forbidden ' + someString")
  div(:class="[someString, 'forbidden']")

  //- vue/no-restricted-custom-event
  input(@input="$emit('input', $event.target.value)")

  //- vue/no-restricted-static-attribute
  div(foo="x")
  div(bar)
  div&attributes({
    foo: x
  })
  div&attributes(attributes)(foo="bar")

  //- vue/no-restricted-v-bind
  div(v-bind:foo="x")
  div(:bar="x")

  //- vue/no-static-inline-styles
  div(:style="{ transform: 'scale(0.5)' }")
  div(:style="[ { transform: 'scale(0.5)' }, { 'user-select': 'none' } ]")
  div(style="transform: scale(0.5);")

  //- vue/no-template-target-blank
  a(href="http://example.com" target="_blank")

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
