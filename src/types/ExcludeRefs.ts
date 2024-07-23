type IsObject<T> = T extends object
  ? T extends Function
    ? false
    : true
  : false;

type ExcludeObjectProps<T> = {
  [K in keyof T]: IsObject<T[K]> extends true ? never : K;
}[keyof T];

export type ExcludeRefs<T> = Pick<T, ExcludeObjectProps<T>>;
