<template>
    <header class="header">
        <div class="timer">
            <p>{{ time.year }}年{{ time.month }}月{{ time.day }}日</p>
            <p>{{ time.hours }}时{{ time.minutes }}分</p>
        </div>
        <span>智慧城市——武汉</span>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            time: {
                year: '',
                month: '',
                day: '',
                hours: '',
                minutes: '',
            },
            timer: null
        };
    },
    
    mounted() {
        this.updateTime();
        this.timer = setInterval(() => {
            this.updateTime();
        }, 1000);
    },

    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    },
    
    methods: {
        updateTime() {
            const now = new Date();
            this.time.year = now.getFullYear();
            this.time.month = now.getMonth() + 1;
            this.time.day = now.getDate();
            this.time.hours = now.getHours();
            this.time.minutes = now.getMinutes();
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100vw;
    height: 10vh;
    background-image: url('@/assets/images/material/header.png');
    background-size: cover;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 2.3vw;

    .timer {
        font-size: 1.2vw;
        text-align: center;
        margin-left: 85%;
        margin-top: 3vh;
    }

    span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>