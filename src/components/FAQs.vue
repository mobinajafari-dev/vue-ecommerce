<!-- <template>
  <section>
    <div class="faq">
      <ul class="faq-list">
        <li>
          <h4 class="faq-heading" @click="toggelFAQ()">
            کی سفارش به دستم میرسه؟
          </h4>
          <div class="read" v-if="isOpen">
            <p>
              معمولا با پست معمولی بین 7 الی 10 روز و با پست پیشتاز بین 3 الی 4
              روز زمان می برد. ضمنا شما می توانید ازریق کد مرسوله وضعیت سفارش
              خود را چک فرمایید.
            </p>
          </div>
        </li>
        <li>
          <h4 class="faq-heading" @click="toggelFAQ()">
            چطوری محصول رو ارجاع بدم؟
          </h4>
          <div class="read" v-if="isOpen">
            <p>
              تا بعد از 7 روز از گرفتن مرسوله می توانید محصول را درصورت عدم
              رضایت ارجاع دهید ، کافی است با این شماره تماس بگیرید (0900000000)
            </p>
          </div>
        </li>
        <li>
          <h4 class="faq-heading" @click="toggelFAQ()">
            ارسال رایگان در چه صورت به سبد کالا تعلق می گیره؟
          </h4>
          <div class="read" v-if="isOpen">
            <p>
              برای خرید های بالای 500 هزار تومان هزینه ارسال رایگان محاسبه میشود
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "FAQs",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggelFAQ() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.faq {
  padding: 1.5rem 0 0 0;
}
.faq-list {
  list-style: none;
  padding: 0;
}

.faq-list li {
  margin: 30px 0;
  border: 1px solid rgb(205, 205, 205);
  padding: 18px 20px;
  margin: 0px auto 30px;
  text-align: left;
  width: 550px;
  text-align: center;
}

.faq-list .faq-heading::before {
  content: "+";
  font-size: 40px;
  display: block;
  position: absolute;
  right: 0;
  top: -8px;
  color: #c2c2c2;
}

.faq-list .the-active .faq-heading::after {
  content: "-";
}

.faq-heading {
  position: relative;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
}

.faq-heading:hover {
  color: var(--theme-color);
}

.faq-text {
  display: none;
}
.container {
  width: 1200px;
  margin: auto;
}
.art-box svg {
  width: 100%;
}
.row {
  display: flex;
}
.row .col {
  flex-basis: 50%;
}
.read {
  color: rgb(100, 100, 100);
  font-size: 16px;
  line-height: 1.5;
  margin-top: 25px;
}
</style> -->

<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <div>
        <h4 class="accordion-header" @click="toggleAccordion(index)">
          {{ item.title }}
        </h4>
      </div>
      <div v-show="item.isOpen">
        <p class="accordion-content">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQs",
  data() {
    return {
      items: [
        {
          title: `ارسال رایگان در چه صورت به سبد کالا تعلق می گیره؟`,
          content: `برای خرید های بالای 500 هزار تومان هزینه ارسال رایگان محاسبه میشود`,
          isOpen: false,
          index: 1,
        },
        {
          title: `چطوری محصول رو ارجاع بدم؟`,
          content: `تا بعد از 7 روز از گرفتن مرسوله می توانید محصول را درصورت عدم
              رضایت ارجاع دهید ، کافی است با این شماره تماس بگیرید (0900000000)
            `,
          isOpen: false,
          index: 2,
        },
        {
          title: `کی سفارش به دستم میرسه؟`,
          content: `معمولا با پست معمولی بین 7 الی 10 روز و با پست پیشتاز بین 3 الی 4
              روز زمان می برد. ضمنا شما می توانید ازریق کد مرسوله وضعیت سفارش
              خود را چک فرمایید.
            `,
          isOpen: false,
          index: 3,
        },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      return (this.items[index].isOpen = !this.items[index].isOpen);
    },
  },
};
</script>

<style>
.accordion-header {
  cursor: pointer;
}

.accordion-content {
  display: none;
}
</style>
