<template>
  <div class="double-input">
    <legend class="form__title">استان :</legend>
    <select name="province" id="province" class="select-input">
      <option
        value="locations.value"
        v-for="(location, province) in locations"
        :key="province"
      >
        {{ locations.province }}
      </option>
    </select>

    <legend class="form__title">شهر :</legend>
    <select class="select-input" id="city">
      <option
        value="locations.cities.value"
        v-for="(city, i) in locations.cities"
        :key="i"
      >
        {{ locations.cities.cityName }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "city",
  data() {
    locations: [
      {
        province: "تهران",
        cities: [{ value: "tehran", cityName: "تهران" }],
        value: "tehran",
      },
      { province: "کردستان", city: [] },
      { province: "گلستان", city: [] },
      { province: "سمنان", city: [] },
      { province: "قم", city: [] },
      { province: "فارس", city: [] },
      { province: "کرمان", city: [] },
      { province: "همدان", city: [] },
      { province: "یزد", city: [] },
      { province: "مازندران", city: [] },
      { province: "مرکزی", city: [{ value: "arak", cityName: "اراک" }] },
      { province: "آذربایجان شرقی", city: [] },
      { province: "آذربایجان غربی", city: [] },
    ];
  },
};
</script>

<style></style>
