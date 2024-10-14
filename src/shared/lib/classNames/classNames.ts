type Mode = Record<string, string | boolean>;

export function classNames(cls: string, mode: Mode = {}, additionals: string[] = []): string {
    return [
        cls,
        ...additionals.filter(Boolean),
        Object.entries(mode)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
