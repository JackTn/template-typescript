/**
 * Object that represents the settings of a new swagger to be created this
 *
 * @export
 * @interface Swagger
 */
export interface RepoNaturalKey {
  owner: string;
  repo: string;
}

/**
 * Object that represents the settings of a new swagger to be created this
 *
 * @export
 * @interface Swagger
 */
export interface WorkItemNaturalKey extends RepoNaturalKey {
  branch: string;
  baseBranch: string;
}

/**
 * Object that represents the settings of a new swagger to be created this
 *
 * @export
 * @interface Swagger
 */
export type MessageLevel = 'Info' | 'Warning' | 'Error';

/**
 * Object that represents the settings of a new swagger to be created this
 *
 * @export
 * @interface Swagger
 */
export type Swagger = MessageLevel & RepoNaturalKey;
