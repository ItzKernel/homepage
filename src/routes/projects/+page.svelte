<script lang="ts">
	import { shuffleArray } from "$lib";
    import { Marquee } from "@selemondev/svelte-marquee";

    const skillIcons = [
        'Linux-Dark',
        'Workers-Dark',
        'NeoVim-Dark',
        'VSCode-Dark',
        'VSCodium-Dark',
        'VIM-Dark',
        'VueJS-Dark',
        'TypeScript',
        'TailwindCSS-Dark',
        'Svelte',
        'Pnpm-Dark',
        'SQLite',
        'Rust',
        'Redis-Dark',
        'RabbitMQ-Dark',
        'Postman',
        'Pinia-Dark',
        'PHP-Dark',
        'NodeJS-Dark',
        'Nginx',
        'NestJS-Dark',
        'MongoDB',
        'MySQL-Dark',
        'Kubernetes',
        'Jenkins-Dark',
        'JavaScript',
        'Java-Dark',
        'HTML',
        'GraphQL-Dark',
        'GoLang',
        'Github-Dark',
        'Git',
        'Figma-Dark',
        'ExpressJS-Dark',
        'Eclipse-Dark',
        'DiscordJS-Dark',
        'Discord',
        'Debian-Dark',
        'CSS',
        'Cloudflare-Dark',
        'C',
        'Bash-Dark',
        'Arch-Dark',
        'Arduino',
        'Angular-Dark',
        'Actix-Dark',
        'Docker',
        'Python-Dark',
        'Sass',
        'Fediverse-Dark',
        'Mastodon-Dark',
        'Tauri-Dark',
    ];
</script>

<main>
    🚧 UNDER CONSTRUCTION 🚧
    <!-- Todo: use own marquee -->
    <Marquee direction='left' fade={false} class='[--duration:60s]'>
        {#each shuffleArray(skillIcons) as icon}
            <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/{ icon }.svg" alt="" class="aspect-square w-16">
        {/each}
    </Marquee>
</main>