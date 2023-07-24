/**
 * 术语：ts中的任意属性;type:给类型起别名
 * 实用性：给对象添加任意个属性的时使用
 */
export namespace NSpace {
  export interface Person {
    name: string;
    age?: number;
    [propName: string]: any; //类型需要包含此类中所有字段的类型
  }

  export type StrConbineNum = string | number;
}
