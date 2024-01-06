import synchronizedPrettier from "@prettier/sync"


export function format(source: string) {
    return synchronizedPrettier.format(source, {
        parser: 'babel'
    })
}
