export type Mods = Record<string, string | boolean | undefined>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additionals: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...additionals.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
