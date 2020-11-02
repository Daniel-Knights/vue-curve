<template>
    <div>
        <p v-curve:[rgb]>CURVED SHADOW</p>
    </div>

    <div>
        <p v-curve:[rgb]="intensity">CURVED SHADOW CURVED SHADOW</p>
    </div>

    <div>
        <p v-curve="intensity">CURVED</p>
    </div>

    <div>
        <p v-curve>CURVED</p>
    </div>

    <div>
        <p v-curve>CURVED</p>
    </div>
</template>

<script>
export default {
    name: 'App',

    data() {
        return {
            color: 'blue',
            intensity: 'high',
            rgb: 'rgba(234,24,24)',
            hsl: 'hsla(20,100%,50%,0.9)',
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
}

body {
    margin: 0;
}

div:not(#app) {
    display: block;
    margin: 0 auto;
    height: 100vh;
    width: fit-content;
    font: 30px Arial;
}

p {
    margin: 0;
    padding: 20px;
    color: #000;
    /* background: #72efaf; */
}
#app div:nth-of-type(1) p {
    padding: 100px 20px;
}
</style>
