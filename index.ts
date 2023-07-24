import { NSpace } from './notes/day_01';

const tom: NSpace.Person = {
  name: 'Tom',
  gender: 'male',
};

const val_s: NSpace.StrConbineNum = '字符串';
const val_scm: NSpace.StrConbineNum = 12;
// const val_b: NSpace = true; //联合类型声明时没有boolean

console.log(tom.gender, '|', val_s, '|', val_scm);
