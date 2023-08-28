<script setup lang="ts">
import { SearchOutlined, UserOutlined, DownOutlined, UnorderedListOutlined } from '@ant-design/icons-vue';
import { anyType } from 'ant-design-vue/es/_util/type';
import { ref } from 'vue';

const rating = ref<number>(3.5)
</script>
<template>
    <div>
        <!-- Message -->
        <div class="flex bg-lime-700 text-gray-100 px-4 py-0.5 items-center gap-96 justify-center rounded w-full">
            <p class="text-center text-slate-50 font-medium mt-3">Tel:020-93420592</p>
            <!-- Nav Bar -->
        </div>
        <div>
            <header class=" dark:bg-gray-800 dark:text-gray-100 w-full">
                <div class="container flex h-8 mx-auto" bis_skin_checked="1">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage"
                        class="flex items-center px-3 py-8 rou">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                        </svg>

                    </a>
                    <ul class="flex py-6 gap-11">
                        <a class="">Categories</a>
                        <a>Deals</a>
                        <a>What's_New</a>
                        <a>Deilvery</a>
                    </ul>
                    <div class="w-full px-60 ">
                        <div class="flex justify-center p-4">
                            <input type="text" placeholder="Search Product" class="w-full h-8 px-13 rounded-xl " />
                            <search-outlined class="site-form-item-icon px-3 py-2" />
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <user-outlined class="py-5" />
                        <a href="/" class="no-underline">
                            <p class="px-3 py-5 text-gray-900">Account</p>
                        </a>

                        <div class="flex g py-4 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5" href="/cart">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <a href="/cart" class="no-underline">
                                <p class="px-4 py-1 text-center text-gray-900 ">Cart</p>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <div class="rounded overflow-auto p-8 ">
            <a-carousel autoplay>
                <div class="bg-green-400">
                    <div class=" text-center   ">
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            Run with the pack
                        </p>
                        <h2 class="mt-6 font-black ">
                            <span class="text-4xl font-black sm:text-5xl lg:text-6xl">
                                Get 20% off
                            </span>
                        </h2>
                    </div>
                </div>
                <div>
                    <div class=" text-center bg-red-400">
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            Run with the pack
                        </p>
                        <h2 class="mt-6 font-black ">
                            <span class="text-4xl font-black sm:text-5xl lg:text-6xl">
                                Get 40% off
                            </span>
                        </h2>
                    </div>
                </div>
                <div>
                    <div class=" text-center bg-cyan-500 ">
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            Run with the pack
                        </p>
                        <h2 class="mt-6 font-black ">
                            <span class="text-4xl font-black sm:text-5xl lg:text-6xl">
                                Get 30% off
                            </span>
                        </h2>
                    </div>
                </div>
                <div>
                    <div class=" text-center   ">
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            Run with the pack
                        </p>
                        <h2 class="mt-6 font-black ">
                            <span class="text-4xl font-black sm:text-5xl lg:text-6xl">
                                Get 90% off
                            </span>
                        </h2>
                    </div>
                </div>
            </a-carousel>
        </div>
        <!-- Menu -->
        <div class="flex">
            <nav class="gap-4">
                <div class=" px-14 gap-3 space-x-6">
                    <a-dropdown>
                        <a class="ant-dropdown-link bg-slate-200 px-3 py-1 rounded-xl" @click.prevent>
                            Price
                            <DownOutlined class="text-sm" />
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>
                                    <a href="javascript:;">1st menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">2nd menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">3rd menu item</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                    <a-dropdown>
                        <a class="ant-dropdown-link bg-slate-200 px-3 py-1 rounded-xl" @click.prevent>
                            Color
                            <DownOutlined class="text-sm" />
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>
                                    <a href="javascript:;">1st menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">2nd menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">3rd menu item</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                    <a-dropdown>
                        <a class="ant-dropdown-link bg-slate-200 px-3 py-1 rounded-xl" @click.prevent>
                            Review
                            <DownOutlined class="text-sm" />
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>
                                    <a href="javascript:;">1st menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">2nd menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">3rd menu item</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                    <a-dropdown>
                        <a class="ant-dropdown-link bg-slate-200 px-3 py-1 rounded-xl" @click.prevent>
                            Material
                            <DownOutlined class="text-sm" />
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>
                                    <a href="javascript:;">1st menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">2nd menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">3rd menu item</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                    <a-dropdown>
                        <a class="ant-dropdown-link bg-slate-200 px-3 py-1 rounded-xl" @click.prevent>
                            Offer
                            <DownOutlined class="text-sm" />
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>
                                    <a href="javascript:;">1st menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">2nd menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">3rd menu item</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                    <a-dropdown>
                        <a class="ant-dropdown-link bg-slate-200 px-3 py-1 rounded-xl" @click.prevent>
                            All Filter
                            <DownOutlined class="text-sm " />
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>
                                    <a href="javascript:;">1st menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">2nd menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">3rd menu item</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </div>
            </nav>
        </div>
        <!-- Title -->
        <h1 class="flex px-14 py-7 font-bold">Headphones For You!</h1>
        <div
            class="bg-slate-400 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 py-2 px-4 gap-5 bg-white ">
            <div v-for="(i: anyType, index) in    20   " :key=" index " class="w-[240px]">
                <img src="../../assets/image/product1.jpg" alt="" class="w-[240px]">
                <div>
                    <div class="flex">
                        <p class="flex-1 py-4 ">Product name</p>
                        <p class="py-4">$89</p>
                    </div>
                    <div><span>Watch</span>, <span>Apple</span></div>
                    <div class="py-2">
                        <a-rate v-model:value=" rating " class="text-sm" allow-half />
                        <span class="text-sm">(1235)</span>
                    </div>
                    <div><a-button
                            class="inline-block rounded-2xl border border-indigo-600 px-3 py-1 text-sm font-medium text-indigo-600 ">Add
                            to cart</a-button></div>
                </div>
            </div>
        </div>

        <!-- item -->
    </div>
</template>
<style scoped>
:deep(.slick-slide) {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
}

:deep(.slick-slide h3) {
    color: #fff;
} 
</style>