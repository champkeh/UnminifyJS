import synchronizedPrettier from "@prettier/sync"


export function formatCode(source: string) {
    return synchronizedPrettier.format(source, {
        parser: 'babel',
        semi: false,
        tabWidth: 4,
        bracketSpacing: false,
        singleQuote: false,
    })
}
