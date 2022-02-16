export type KeysOfType<T, F> = {
    [key in keyof T]: [F] extends [T[key]] ? [T[key]] extends [F] ? key : never : never
}[keyof T]
export type KeysOfSubType<T, F> = {
    [key in keyof T]: [F] extends [T[key]] ? key : never
}[keyof T]
export type OmitFieldByType<T, F> = Omit<T, KeysOfType<T, F>>
export type OptionField<T> = Omit<T, KeysOfSubType<T, undefined>> & Partial<Pick<T, KeysOfSubType<T, undefined>>>
export type Compute<A> = { [K in keyof A]: A[K] } & unknown
