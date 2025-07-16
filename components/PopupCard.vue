<template>
  <div class="">
    <div class="bg-white opacity-100 rounded-xl max-sm:px-12 max-sm:pt-4 px-10 pt-2 2xl:mt-40 shadow-2xl">
      <img class="my-5" src="/images/icon-order-confirmed.svg" alt="" />
      <h1 class="text-4xl font-bold mb-2">Order <span class="max-sm:pr-20">Confimed</span></h1>
      <p class="text-light text-[#87635a] mb-8">we hope you enjoy your food!</p>
      <slot />
      <button
        class="border-1 mt-10 max-sm:mb-17 mb-5 rounded-3xl bg-[#c73a0f] text-white max-sm:px-27  2xl:px-40 py-2  cursor-pointer"
        v-on:click="togglePopup()"
      >
        Start New Order
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["togglePopup"],
};
</script>
