<template>
  <div>
    <x-header :title="this.$store.state.head.title" :left-options="{showBack:this.$store.state.head.isReturn}"></x-header>
  </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  }
}
</script>

<style>

</style>