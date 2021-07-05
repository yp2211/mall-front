<template>
    <i class="ion-android-star" :class="{'gray' : stars < 1}" v-on:click="this.setStars(1)"></i>
    <i class="ion-android-star" :class="{'gray' : stars < 2}" v-on:click="this.setStars(2)"></i>
    <i class="ion-android-star" :class="{'gray' : stars < 3}" v-on:click="this.setStars(3)"></i>
    <i class="ion-android-star" :class="{'gray' : stars < 4}" v-on:click="this.setStars(4)"></i>
    <i class="ion-android-star" :class="{'gray' : stars < 5}" v-on:click="this.setStars(5)"></i>
</template>

<script>
export default {
    name: "ReviewStars",
    props: {
        stars: {
            type: Number,
            required: true
        },
        editMode: {
            type: Boolean,
            required: false
        }
    },
    methods: {
        setStars(s) {
            if (this.editMode) this.$emit("updateStars", s);
        }
    },
    emits: ["updateStars"]
}
</script>