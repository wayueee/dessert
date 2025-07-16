<template>
  <div>
    <p class="mt-4">{{ card?.nameProduct }}</p>
    <div class="grid justify-items-stretch">
      <button
        class="justify-self-end border-1 rounded-4xl cursor-pointer"
        v-on:click="$emit('removeCardList', card.index)"
      >
        <img src="/public/images/icon-remove-item.svg" alt="" />
      </button>
    </div>
    <p class="font-semibold text-[#c73a0f] mb-3"></p>
    {{ card.quantity }}x<span class="font-light text-[#87635a] ml-4"
      >@ {{ (card.price * card.quantity).toFixed(2) }}</span
    >
    <span class="text-[#87635a] ml-2">$ {{(card.price * card.quantity).toFixed(2) }}</span>
    <hr />
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
