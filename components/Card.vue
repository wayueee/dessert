<template>
  <div class="relative">
    <img
      class="h-70 bg-cover rounded-lg border-2"
      :class="{ 'border-[#c73a0f]': data.quantity > 0 }"
      :src="data?.image"
      alt=""
    />

    <div
      class="flex bg-white absolute left-1/2 top-65 -translate-x-1/2 py-1 border-2 rounded-2xl"
    >
      <img class="h-full w-6 ml-4 bg-cover cursor-pointer" :src="data.imageCard" alt="" />
      <button
        v-if="!data.showQuantityControls"
        class="pr-3 cursor-pointer"
        v-on:click="$emit('addItemToCard', data, index)"
      >
        {{ data?.add }}
      </button>
    </div>
    <div class="mt-8 mb-4">
      <h4 class="font-light text-[#87635a]">{{ data?.name }}</h4>
      <h4 class="font-semibold">{{ data?.nameProduct }}</h4>
      <p class="font-bold text-[#c73a0f]">${{ data.price.toFixed(2) }}</p>
    </div>

    <div class="relative" v-if="data.showQuantityControls">
      <div
        class="flex bg-[#c73a0f] absolute right-1/3 bottom-26 left-1/2 px-17 -translate-x-1/2 py-4.5 rounded-2xl"
      >
        <div>
          <button 
            class="absolute right-1 top-1/3 cursor-pointer"
            v-on:click="addPlusData(data, index)"
          >
            <img
              class="h-full bg-cover border-2 rounded-2xl left-1"
              :src="data.imagePlus"
              alt=""
            />
          </button>
        </div>
        <p class="absolute top-1/5">{{ data.quantity }}</p>
        <div>
          <button
            class="absolute left-1 top-1/2 cursor-pointer"
            v-on:click="addMinusData(data, index)"
          >
            <img
              class="h-full bg-cover border-2 rounded-1xl"
              :src="data.imageMinus"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    showQuantityControls: {
      type: Boolean,
      default: false,
    },
    styleAdd: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    addPlusData(data, index) {
      this.data.quantity++;
      this.$emit("addPlusData", data, index);
    },
    addMinusData(data, index) {
      this.$emit("addMinusData", data, index);
    },
  },
  filters: {
    // Currency filter to format the price
    currency(value) {
      return value.toFixed(2);
    },
  },
};
</script>
