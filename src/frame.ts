type HasUnderline<T> = "_" extends keyof T ? true : false;

type ExtractKeys<T> = {
    [K in keyof T]-?: K extends "_"
        ? never // 排除下划线键
        : HasUnderline<T[K]> extends true
          ? K | ExtractKeys<T[K]> // 如果存在下划线，则提取当前键及其嵌套键
          : K;
}[keyof T];

type AllKeys<T> = ExtractKeys<T>;

type HasUnderscoreKey<T> = T extends { _: unknown } ? true : false;

type FilteredKeys<T> = {
    [K in keyof T as HasUnderscoreKey<T[K]> extends true ? K : never]: Omit<
        T[K],
        "_"
    >;
};

type Ex<T, K> = K extends keyof T
    ? T[K]
    : Ex<UnionToIntersection<MergedValues<T>>, K>;

type ExtractedValues<T> = T extends Record<string, infer V> ? V : never;

type MergedValues<T> = ExtractedValues<FilteredKeys<T>>;

// biome-ignore lint: 保留前人探索结果
type ToUnionOfFunction<T> = T extends any ? (x: T) => any : never;
// biome-ignore lint: 同上
type UnionToIntersection<T> = ToUnionOfFunction<T> extends (x: infer P) => any
    ? P
    : never;

type FlatObj<T> = { [key in AllKeys<T>]: Ex<T, key> };

type SetViewValue<T> = {
    [key in keyof T]: "_" extends keyof T[key] ? T[key]["_"] : T[key];
};

type frameType<T> = SetViewValue<FlatObj<T>>;

export type { frameType };
