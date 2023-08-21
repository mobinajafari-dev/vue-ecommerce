<template>
  <div class="m-auto double-btn">
    <select
      v-model="selectedProvince"
      @change="updateCities"
      class="city__select"
    >
      <option value="" selected class="city__option">استان</option>
      <option v-for="(province, i) in provinces" :key="i" class="city__option">
        {{ province }}
      </option>
    </select>

    <select v-model="selectedCity" class="city__select">
      <option value="" selected class="city__option">شهر</option>
      <option
        v-for="(city, i) in tehran"
        :key="i"
        class="city__option"
        v-show="selectedProvince === 'تهران'"
      >
        {{ city }}
      </option>
      <option
        v-for="(city, i) in kordestan"
        :key="i"
        class="city__option"
        v-show="selectedProvince === 'کردستان'"
      >
        {{ city }}
      </option>
      >
      <option
        v-for="(city, i) in golestan"
        :key="i"
        class="city__option"
        v-show="selectedProvince === 'گلستان'"
      >
        {{ city }}
      </option>
      <option
        v-for="(city, i) in semnan"
        :key="i"
        class="city__option"
        v-show="selectedProvince === 'سمنان'"
      >
        {{ city }}
      </option>
      <option
        v-for="(city, i) in qom"
        :key="i"
        class="city__option"
        v-show="selectedProvince === 'قم'"
      >
        {{ city }}
      </option>
      <option
        v-for="(city, i) in fars"
        :key="i"
        class="city__option"
        v-show="selectedProvince === 'فارس'"
      >
        {{ city }}
      </option>
      <option
        v-for="(city, i) in kerman"
        :key="i"
        class="city__option"
        v-show="selectedProvince === 'کرمان'"
      >
        {{ city }}
      </option>
      <option
        v-for="(city, i) in hamedan"
        :key="i"
        class="city__option"
        v-show="selectedProvince === 'همدان'"
      >
        {{ city }}
      </option>
      <option
        v-for="(city, i) in yazd"
        :key="i"
        class="city__option"
        v-show="selectedProvince === 'یزد'"
      >
        {{ city }}
      </option>
      <option
        v-for="(city, i) in mazandaran"
        :key="i"
        class="city__option"
        v-show="selectedProvince === 'مازندران'"
      >
        {{ city }}
      </option>
      <option
        v-for="(city, i) in markazi"
        :key="i"
        class="city__option"
        v-show="selectedProvince === 'مرکزی'"
      >
        {{ city }}
      </option>
      <option
        v-for="(city, i) in azarbayejanSharghi"
        :key="i"
        class="city__option"
        v-show="selectedProvince === 'آذربایجان شرقی'"
      >
        {{ city }}
      </option>
      <option
        v-for="(city, i) in azarbayejanGharbi"
        :key="i"
        class="city__option"
        v-show="selectedProvince === 'آذربایجان غربی'"
      >
        {{ city }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "city",
  data() {
    return {
      selectedProvince: "",
      selectedCity: "",
      provinces: [
        "تهران",
        "کردستان",
        "گلستان",
        "سمنان",
        "قم",
        "فارس",
        "کرمان",
        "همدان",
        "یزد",
        "مازندران",
        "مرکزی",
        "آذربایجان شرقی",
        "آذربایجان غربی",
      ],
      tehran: ["تهران", "شهریار", "دماوند", "فیروزکوه", "شمیران", "ورامین"],
      kordestan: ["مریوان", "سنندج"],
      golestan: ["گرگان"],
      semnan: ["سمنان"],
      qom: ["قم"],
      fars: ["شیراز"],
      kerman: ["کرمان"],
      hamedan: ["همدان"],
      yazd: ["یزد"],
      mazandaran: ["ساری"],
      markazi: ["اراک"],
      azarbayejanGharbi: ["ارومیه"],
      azarbayejanSharghi: ["تبریز"],
    };
  },
  methods: {
    updateCities() {
      this.selectedCity = "";
    },
  },
};
</script>

<style>
.city__select {
  margin: 1rem;
  width: 120px;
  outline: none;
  border: 0;
}

.city__option {
  background-color: #eee;
  border-radius: 5px;
}
</style>
