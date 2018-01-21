<template>
        <div class="scrollTop" @click="toTop">
            	返回顶部
        </div>
    </template>
    <script>
        export default {
            name: 'scroll-top',
            props: {
                toBottom: {
                    type: Number,
                    default: 0
                }
            },
            methods: {
                toTop() {
                    document.documentElement.scrollTop = document.body.scrollTop = 0;
                }
            },
            mounted() {
                document.querySelector('.scrollTop').style.bottom = this.toBottom;
            }
        }
    </script>
    <style scoped>
        .scrollTop {
            display: fixed;
            height:60px;
            width:60px;
        }
    </style>