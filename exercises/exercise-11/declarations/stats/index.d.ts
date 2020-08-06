declare module "stats" {
  type CompareUsers<T> = (a: T, b: T) => number;
  type StatIndexFunction = <T>( input: T[], compareUsers: CompareUsers<T> ) => number;
  type StatElementFunction = <T>( input: T[], compareUsers: CompareUsers<T> ) => T;
  export const getMaxIndex: StatIndexFunction;
  export const getMaxElement: StatElementFunction;
  export const getMinIndex: StatIndexFunction;
  export const getMinElement: StatElementFunction;
  export const getMedianIndex: StatIndexFunction;
  export const getMedianElement: StatElementFunction;
//   export const getAverageValue: <I, O>(items: I[], getValue: (item: I) => O) => O;
  export const getAverageValue: StatIndexFunction;
}
