/**
 * @Descritpion
 *
 * @export
 * @interface User
 */
export interface User {
  name: string;
  password: string;
  address: string;
  phone: string;
}

/**
 * @Descritpion 构造一个类型，其中 Type 的所有属性都设置为可选
 * @Description Partial<Type>
 *
 * @export
 * @type PartialUser
 */
export type PartialUser = Partial<User>;

/**
 * @Descritpion RequiredUser 构造一个类型，该类型由设置为 required  Type 的所有属性组成，部分的反义词
 * @Description Required<Type>
 *
 * @export
 * @type
 */
export type RequiredUser = Required<User>;

/**
 * @Descritpion ReadonlyUser 构造一个 Type 的所有属性都设置为 readonly 的类型，这意味着构造类型的属性不能被重新分配
 * @Description Readonly<Type>
 *
 * @export
 * @type
 */
export type ReadonlyUser = Readonly<User>;

export type UserIds = 100 | 101 | 102;

/**
 * @Descritpion 构造一个对象类型，其属性键为 Keys，其属性值为 Type，此实用程序可用于将一种类型的属性映射到另一种类型
 * @Descritpion Record<Keys, Type>
 *
 * @export
 * @type RecordUser
 */
export type RecordUser = Record<UserIds, User>;

/**
 * @Descritpion 通过从 UnionType 中排除可分配给 ExcludedMembers 的所有联合成员来构造类型
 * @Description Exclude<UnionType, ExcludedMembers>
 *
 * @export
 * @type ExcludeUser
 */
export type ExcludeUser = Exclude<'a' | 'b' | 'c', 'a'>;

/**
 * @Descritpion 通过从 Type 中提取所有可分配给 Union 的联合成员来构造一个类型
 * @Descritpion Record<Keys, Type>
 *
 * @export
 * @type ExtractUser
 */
export type ExtractUser = Extract<'a' | 'b' | 'c', 'a'>;

/**
 * @Descritpion 通过从 Type 中选择一组属性 Keys（字符串文字或字符串文字的联合）来构造一个类型
 * @Descritpion Pick<Type, Keys>
 *
 * @export
 * @type PickUser
 */
export type PickUser = Pick<User, 'name'>;

/**
 * @Descritpion 通过从 Type 中选择所有属性然后删除 Keys（字符串文字或字符串文字的联合）来构造一个类型
 * @Descritpion Omit<Type, Keys>
 *
 * @export
 * @type OmitUser
 */
export type OmitUser = Omit<User, 'name'>;

export type Value = string | string[] | number | boolean | undefined | null;
/**
 * @Descritpion 通过从 Type 中排除 null 和 undefined 来构造一个类型
 * @Descritpion NonNullable<Type>
 *
 * @export
 * @type NonNullableValue
 */
export type NonNullableValue = NonNullable<Value>;

function getUserInfo(id: number, name: string) {
  return `User ID: ${id}, User Name: ${name}`;
}

/**
 * @Descritpion 从函数类型 Type 的参数中使用的类型构造元组类型
 * @Descritpion Parameters<Type>
 *
 * @export
 * @type FuncParams FuncFirstParams
 */
export type FuncParams = Parameters<typeof getUserInfo>;
export type FuncFirstParams = Parameters<typeof getUserInfo>[0];

/**
 * @Descritpion 构造一个由函数 Type 的返回类型组成的类型
 * @Descritpion ReturnType<Type>
 *
 * @export
 * @type FuncReturnType
 */
export type FuncReturnType = ReturnType<typeof getUserInfo>;

type Method = 'get' | 'post' | 'put' | 'delete';

/**
 * @Descritpion 将字符串文字类型转换为大写
 * @Descritpion Uppercase<StringType>
 *
 * @export
 * @type UppercaseMethod
 */
export type UppercaseMethod = Uppercase<Method>;

/**
 * @Descritpion 将字符串文字类型转换为小写
 * @Descritpion Lowercase<StringType>
 *
 * @export
 * @type LowercaseMethod
 */
export type LowercaseMethod = Lowercase<Method>;

/**
 * @Descritpion 将字符串文字类型的第一个字符转换为大写
 * @Descritpion Capitalize<StringType>
 *
 * @export
 * @type CapitalizeMethod
 */
export type CapitalizeMethod = Capitalize<Method>;

/**
 * @Descritpion 将字符串文字类型的第一个字符转换为小写
 * @Descritpion Uncapitalize<StringType>
 *
 * @export
 * @type UncapitalizeMethod
 */
export type UncapitalizeMethod = Uncapitalize<CapitalizeMethod>;
