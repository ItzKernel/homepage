<script lang="ts">
	import { getManyRandom, teleport } from "$lib";
	import { crossColors } from "$lib/cross";
	import { socials } from "$lib/socials";

    let innerHeight: number;
    let innerWidth: number;

    /*
    function getRandom(max: number, min?: number): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(Math.ceil(Math.random() * max) + (min ?? 0)), 10);
        });
    }
    */
</script>

<svelte:window bind:innerHeight bind:innerWidth />
<div class="background fixed left-0 top-0 bottom-0 right-0 overflow-hidden opacity-30 -z-10">
    {#await getManyRandom(0, 1, 75)}
        ...
    {:then random} 
        {#each [...Array(15).keys()] as i}
            <svg
                width="400px"
                height="400px" 
                fill="none" 
                version="1.1" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                class="absolute cross"
                style="top: {Math.ceil(random[i * 5 + 0] * innerHeight)}px; left: {Math.ceil(random[i * 5 + 1] * innerWidth) - 400}px; transform: scale({random[i * 5 + 2]}) rotate({Math.ceil(random[i * 5 + 3] * 90)}deg);"
            >
                <path 
                    d="m0.5021 0.5021c0.66948-0.66946 1.7549-0.66946 2.4244 0l9.0735 9.0736 9.0736-9.0736c0.66943-0.66946 1.7549-0.66946 2.4243 0 0.66943 0.66948 0.66943 1.7549 0 2.4244l-9.0736 9.0735 9.0736 9.0736c0.66943 0.66943 0.66943 1.7549 0 2.4243-0.66943 0.66943-1.7549 0.66943-2.4243 0l-9.0736-9.0736-9.0735 9.0736c-0.66948 0.66943-1.7549 0.66943-2.4244 0-0.66946-0.66943-0.66946-1.7549 0-2.4243l9.0736-9.0736-9.0736-9.0735c-0.66946-0.66948-0.66946-1.7549 0-2.4244z" 
                    clip-rule="evenodd"
                    fill="{crossColors[Math.ceil(random[i * 5 + 4] * 17)]}" 
                    fill-rule="evenodd" 
                    stroke-width="1.7143"
                />
            </svg>
        {/each}
    {/await}
</div>
<main class="h-[100%] pt-0">
    <div class="relative h-full flex items-center gap-8 overflow-hidden justify-center">
        <div class="flex gap-8 items-center p-8 bg-gray-100 rounded-3xl shadow">
            <img src="https://avatars.githubusercontent.com/u/78853728" alt="" class="w-32 rounded-full">
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-1">
                    <h1 class="text-5xl font-semibold font-sour-gummy-500">ItzKernel</h1>
                    <span class="text-gray-500">an 18 year old passionate software developer striving for innovation</span>
                </div>

                <!-- socials -->
                <div id="socials">
                    {#each Object.entries(socials) as [key, value]}
                    <a href="{value}">
                        <img src="socials/{key}.svg" alt="" class="h-5">
                    </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</main>

<style lang="scss">
@keyframes scroll {
    to {
        left: -100px;
    }
}

:global(body), :global(#content) {
    height: 100vh;
}

#socials {
    @apply flex gap-3;

    * {
        @apply hover:scale-[0.97] duration-200 transition-transform;
    }
}

@keyframes vicc {
    to {
        rotate: 1000000deg;
    }
}

.cross {
    animation: vicc 86400s;
}
/*
.marquee * {
    animation: scroll 5s linear -10ms infinite forwards;
}*/
</style>