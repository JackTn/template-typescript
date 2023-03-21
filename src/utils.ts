import { repo, organization } from './Constants';

console.log(repo);
console.log(organization);

class C {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class A {
  protected num: number;

  constructor(num: number) {
    this.num = num;
  }
}

class X extends A {
  protected name: string;

  constructor(num: number, name: string) {
    super(num);
    this.name = name;
  }
}
