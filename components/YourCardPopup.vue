<template>
    <div class="flex items-center space-x-4">
      <!-- Gambar Produk di kiri -->
      <img class="w-15" :src="card.image" alt="Product Image" />

      <!-- Konten Teks di kanan -->
      <div class="flex-1">
        <p class="mt-4 font-medium">{{ card?.nameProduct }}</p>
        <p class="font-semibold text-[#c73a0f] mb-3">
          {{ card.quantity }}x
          <span class="font-light text-[#87635a] ml-4"
            >@ ${{ card.price * card.quantity.toFixed(2) }}</span
          >
        </p>
      </div>

      <!-- Tombol Remove Item di sebelah kanan -->
      <div class="flex justify-end">
        <span class="font-semibold ml-2"
          >$ {{ (card.price * card.quantity).toFixed(2) }}</span
        >
      </div>
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
