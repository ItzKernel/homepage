export function shuffleArray<T = any>(arr: T[]): T[] {
    return arr.map(x => ({ x, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ x }) => x);
}

export function getManyRandom(min: number, max: number, n: number) {
    let arr = new Uint16Array(n);
    arr = crypto.getRandomValues(arr);

    return Array.from(arr).map(x => (x / 65535) * max + min);
}

export function teleport(node: HTMLElement, name: string) {
    let teleportContainer = document.querySelector(name);
    teleportContainer?.appendChild(node);
    // teleportContainer?.focus(); // optional
}