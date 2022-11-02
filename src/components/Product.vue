<template>
  <form action="" method="post" v-on:submit.prevent="submitForm()" enctype="multipart/form-data" autocomplete="off" novalidate>
    <div class="row border rounded border-dark p-2">
      <div class="col-6 product-image">
        <img class="card-img-top" v-bind:src="image" alt="image">
      </div>
      <div class="col-6 d-flex align-items-center">
        <div class="">
          <div class="bg-dark text-white p-2 float-end rounded-1">
            Cart ({{ cart }})
          </div>
          <h2>{{ title }}</h2>
          <p class="body-text"> {{ short_description }} </p>
          <div v-for="attribute in attributes" class="">
            {{ attribute }}
          </div>
          <div class="stock-status">
            <strong v-if="in_stock > 10">In stock: {{ in_stock }}</strong>
            <strong v-else-if="in_stock <=10 && in_stock && in_stock > 0 ">Almost sold out</strong>
            <strong v-else>Out of stock</strong>
          </div>
          <h5>$ {{ price }}</h5>
          <div v-if="in_stock > 0" class="variants">
            <div v-if="variants" v-for="{id, label, image, bg_color} in variants" v-bind:key="id" v-bind:style="bg_color">
              <label>
                <input type="radio" name="variants" v-bind:value="id" v-on:change="changeThumbnail(image)">
                {{ label }}
              </label>
            </div>
          </div>
          <div v-if="in_stock > 0" class="attributes my-2">
            <select name="" id="" class="form-control border border-dark">
              <option value="" selected disabled>choose</option>
              <option v-for="count in counts">{{ count }}</option>
            </select>
          </div>
          <div class="d-flex gap-4">
            <button type="button" v-bind:disabled="!in_stock" v-on:click="addToCart()" class="btn btn-md btn-dark">Add to Cart</button>
            <button type="submit" v-bind:disabled="!in_stock" class="btn btn-md btn-dark">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>

export default {
  data() {
    return {
      cart: 0,
      title: 'A4tech Gen 3 Mouse',
      sku: 'G4M01',
      price: 40,
      regular_price: 36,
      image: './src/assets/images/socks_blue.jpg',
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, illum natus nisi nulla perferendis praesentium qui tempora? Consequatur, modi rerum! Dicta dolorem iusto obcaecati possimus quidem ratione sapiente tempore, voluptatum!',
      variants: [
        {
          id: 1,
          label: 'Blue',
          image: './src/assets/images/socks_blue.jpg',
          price: 40,
          bg_color: 'color: white;background-color: darkgreen;width: 76px;height: 26px;padding: 3px;'
        },
        {
          id: 2,
          label: 'Green',
          image: './src/assets/images/socks_green.jpg',
          price: 42,
          bg_color: 'color: white;background-color: darkblue;width: 76px;height: 26px;padding: 3px;'
        }
      ],
      counts: [1, 2, 3, 4, 5, 6, 7, 8],
      in_stock: 2,
      attributes: [
          'Size: XL',
          'Brand: Own',
          'Finishing: Tested'
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    submitForm() {
      console.warn('form submitted')
    },
    changeThumbnail(image) {
      this.image = image
    }
  }
}

</script>

<style>
  .radio-green {
    color: white;background-color: darkgreen;width: 76px;height: 26px;padding: 3px;
  }
  .radio-blue {
    color: white;background-color: darkblue;width: 76px;height: 26px;padding: 3px;
  }
</style>