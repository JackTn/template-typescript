console.log(`Hello Node.js v${process.versions.node}!`);
console.log(`Write on ${process.cwd()}`);

import { repo, organization } from './Constants';
console.log(repo);
console.log(organization);

const a = async () => {
  setTimeout(() => console.log(123), 3000);
};

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const b = async () => {
  await a();
  await delay(5000);
  await a();
  await delay(5000);
  await a();
};
b();
