<template>
  <div>
    <div class="bg-[#f4edeb] pb-10">
      <div
        class="max-sm:grid max-sm:grid-cols-1 max-sm:mx-16 pt-10 2xl:grid grid-cols-3 gap-4 2xl:mx-15 2xl:mr-150 justify-center"
      >
        <div class="2xl:col-span-3 2xl:col-start-1 2xl:row-start-1">
          <h1 class="text-4xl max-sm:text-5xl font-bold">Desserts</h1>
        </div>
        <Card
          @addItemToCard="addToCard"
          @addPlusData="addPlusCard"
          @addMinusData="addMinusCard"
          v-for="item in items"
          :key="item.id"
          :data="item"
          :styleAdd="styleAdd"
        />
      </div>
      <div
        v-if="!openCart"
        class="2xl:absolute pb-10 mt-10 mx-10 top-1/30 right-2/30"
      >
        <div
          class="bg-white max-sm:row-start-11 2xl:mx-16 py-3 2xl:px-10 2xl:py-8 max-sm:px-8 rounded-xl"
        >
          <h1 class="font-bold text-2xl text-[#c73a0f]">
            Your Card ({{ allCards }})
          </h1>
          <img
            class="px-20 pt-20"
            src="/images/illustration-empty-cart.svg"
            alt=""
          />
          <p class="text-[#87635a] font-semibold ml-6">
            your added items will appear here
          </p>
        </div>
      </div>
      <div
        v-if="openCart"
        class="2xl:absolute pb-10 mt-10 mx-10 top-1/30 right-2/40"
      >
        <div
          class="bg-white max-sm:row-start-11 2xl:mx-16 py-3 2xl:px-10 2xl:py-8 max-sm:px-8 rounded-xl"
        >
          <h1 class="font-bold text-2xl text-[#c73a0f]">
            Your Card ({{ allCards }})
          </h1>
          <YourCard
            @removeCardList="removeList(item.id)"
            v-for="item in checkouts"
            :key="item.id"
            :card="item"
          />
          <div class="mt-6">
            <h1 class="">
              Order Total
              <span class="font-bold text-2xl 2xl:pl-40 max-sm:pl-35"
                >${{ cardsTotal.toFixed(2) }}</span
              >
            </h1>
          </div>
          <div class="2xl:grid 2xl:justify-items-stretch mt-4">
            <h1
              class="bg-[#f4edeb] flex pr-2 py-3 2xl:justify-self-center max-sm:text-center rounded-lg"
            >
              <img class="pr-2" src="/images/icon-carbon-neutral.svg" alt="" />
              This is a carbon-neutral delivery
            </h1>
            <div class="grid justify-items-stretch">
              <button
              v-on:click="() => togglePopup('buttonTriggers')"
              class="bg-[#c73a0f] text-white border-1 justify-self-center py-2 2xl:px-23.5 max-sm:px-13.5 mt-4 rounded-2xl cursor-pointer"
            >
              Confirm Other
            </button>
          </div>
          <div
          class="fixed inset-0 2xl:pb-50 bg-white/30 backdrop-brightness-30 flex justify-center items-center z-50 "
          v-if="popupTriggers.buttonTriggers"
          :togglePopup="() => togglePopup('buttonTriggers')"
        >
          <PopupCard class="pt-15"  v-if="popupTriggers.buttonTriggers"
          :togglePopup="() => togglePopup('buttonTriggers')">
            <div class="max-h-70 overflow-auto scrollbar-hidden">
              <YourCardPopup
                class="bg-[#f4edeb] px-5 2xl:px-5 py-2 opacity-100 rounded-t-lg"
                v-for="item in checkouts"
                :key="item.id"
                :card="item"
              />
            </div>
            <div class="bg-[#f4edeb] rounded-b-lg py-4">
              <h1 class="ml-4">
                Order Total
                <span class="font-bold text-2xl 2xl:pl-65 max-sm:pl-40">
                  ${{ cardsTotal.toFixed(2) }}</span
                >
              </h1>
            </div>
          </PopupCard>
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const popupTriggers = ref({
      buttonTriggers: false,
      timedTriggers: false,
    });
    const togglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    return {
      popupTriggers,
      togglePopup,
    };
  },
  data() {
    return {
      openCart: false,
      checkouts: [],
      items: [
        {
          id: 0,
          image: "/images/image-waffle-desktop.jpg",
          nameProduct: "Waffle with Berries",
          name: "Waffle",
          price: 6.5,
          add: "Add to Cart",
          imageCard: "/images/icon-add-to-cart.svg",
          imagePlus: "/images/icon-increment-quantity.svg",
          imageMinus: "/images/icon-decrement-quantity.svg",
          quantity: 0,
        },
        {
          id: 1,
          image: "/images/image-creme-brulee-desktop.jpg",
          nameProduct: " Vanilla Bean Crème Brûlée",
          name: "Crème Brûlée",
          price: 7.0,
          add: "Add to Cart",
          imageCard: "/images/icon-add-to-cart.svg",
          imagePlus: "/images/icon-increment-quantity.svg",
          imageMinus: "/images/icon-decrement-quantity.svg",
          quantity: 0,
        },
        {
          id: 2,
          image: "/images/image-macaron-desktop.jpg",
          nameProduct: "Macaron Mix of Five",
          name: "Macaron",
          price: 8,
          add: "Add to Cart",
          imageCard: "/images/icon-add-to-cart.svg",
          imagePlus: "/images/icon-increment-quantity.svg",
          imageMinus: "/images/icon-decrement-quantity.svg",
          quantity: 0,
        },
        {
          id: 3,
          image: "/images/image-tiramisu-desktop.jpg",
          nameProduct: "Classic Tiramisu",
          name: "Tiramisu",
          price: 5.5,
          imageCard: "/images/icon-add-to-cart.svg",
          imagePlus: "/images/icon-increment-quantity.svg",
          imageMinus: "/images/icon-decrement-quantity.svg",
          quantity: 0,
          add: "Add to Cart",
        },
        {
          id: 4,
          image: "/images/image-baklava-desktop.jpg",
          nameProduct: "Pistachio Baklava",
          name: "Baklava",
          price: 4,
          add: "Add to Cart",
          imageCard: "/images/icon-add-to-cart.svg",
          imagePlus: "/images/icon-increment-quantity.svg",
          imageMinus: "/images/icon-decrement-quantity.svg",
          quantity: 0,
        },
        {
          id: 5,
          image: "/images/image-meringue-desktop.jpg",
          nameProduct: "Lemon Meringue Pie",
          name: "Pie",
          price: 5,
          add: "Add to Cart",
          imageCard: "/images/icon-add-to-cart.svg",
          imagePlus: "/images/icon-increment-quantity.svg",
          imageMinus: "/images/icon-decrement-quantity.svg",
          quantity: 0,
        },
        {
          id: 6,
          image: "/images/image-cake-desktop.jpg",
          nameProduct: "Red Velvet Cake",
          name: "Cake",
          price: 4.5,
          add: "Add to Cart",
          imageCard: "/images/icon-add-to-cart.svg",
          imagePlus: "/images/icon-increment-quantity.svg",
          imageMinus: "/images/icon-decrement-quantity.svg",
          quantity: 0,
        },
        {
          id: 7,
          image: "/images/image-brownie-desktop.jpg",
          nameProduct: "Salted Caramel Brownie",
          name: "Brownie",
          price: 4.5,
          add: "Add to Cart",
          imageCard: "/images/icon-add-to-cart.svg",
          imagePlus: "/images/icon-increment-quantity.svg",
          imageMinus: "/images/icon-decrement-quantity.svg",
          quantity: 0,
        },
        {
          id: 8,
          image: "/images/image-panna-cotta-desktop.jpg",
          nameProduct: "Vanilla Panna Cotta",
          name: "Panna Cotta",
          price: 6.5,
          add: "Add to Cart",
          imageCard: "/images/icon-add-to-cart.svg",
          imagePlus: "/images/icon-increment-quantity.svg",
          imageMinus: "/images/icon-decrement-quantity.svg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCard(item) {
      const addItem = this.checkouts.find((card) => card.id === item.id);
      const itemIdx = this.items.findIndex(
        (product) => product.nameProduct == item.nameProduct
      );
      this.items[itemIdx].showQuantityControls = true;
      this.openCart = true;
      if (addItem) {
        addItem.quantity++;
        this.items[itemIdx].quantity++;
      } else {
        this.checkouts.push({ ...item, quantity: 1 });
        this.items[itemIdx].quantity = 1;
      }
    },
    removeList(id) {
      this.checkouts = this.checkouts.filter((product) => product.id !== id);
      this.items[id].quantity = 0;
      this.items[id].showQuantityControls = false;
      if (this.allCards === 0) {
        this.openCart = false;
      }
    },
    addPlusCard(data) {
      const idx = this.checkouts.findIndex(
        (item) => item.nameProduct == data.nameProduct
      );

      this.checkouts[idx].quantity++;
      this.checkouts[idx].price * this.checkouts[idx].quantity;
    },

    addMinusCard(data) {
      const min = this.checkouts.findIndex(
        (item) => item.nameProduct == data.nameProduct
      );
      const itemIdx = this.items.findIndex(
        (product) => product.nameProduct == data.nameProduct
      );
      if (this.checkouts[min].quantity > 0) {
        this.checkouts[min].quantity--;
        this.items[itemIdx].quantity--;
      }
      if (this.checkouts[min].quantity === 0) {
        this.items[itemIdx].showQuantityControls = false;
        this.checkouts = this.checkouts.filter((item) => item.quantity > 0);
      }
      if (this.allCards === 0) {
        this.openCart = false;
      }
    },
  },
  computed: {
    // Calculate the total price of the items in the cards
    cardsTotal() {
      return this.checkouts.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    allCards() {
      return this.checkouts.reduce((total, item) => total + item.quantity, 0);
    },
  },
};
</script>

<style scoped>
/* Menghilangkan scrollbar namun tetap memungkinkan scroll */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.scrollbar-hidden {
  -ms-overflow-style: none; /* Untuk Internet Explorer */
  scrollbar-width: none; /* Untuk Firefox */
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

</style>
