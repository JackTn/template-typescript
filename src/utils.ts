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

class Person {
  public name: string;

  public surname: string;

  public email: string;

  constructor(name: string, surname: string, email: string) {
    this.surname = surname;

    this.name = name;

    if (this.validateEmail(email)) {
      this.email = email;
    } else {
      throw new Error('Invalid email!');
    }
  }

  validateEmail(email: string) {
    var re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    return re.test(email);
  }

  public async a() {
    setTimeout(() => console.log(123), 1000);
  }

  async greet() {
    alert('Hi!');
    await this.a();
  }
}
