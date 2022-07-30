/* eslint-disable no-use-before-define */


import { ReactComponentLike } from 'prop-types';
import React, { ReactElement, RefAttributes } from 'react';
// import { IconType } from 'react-icons/lib';

export interface IMeta {
  parent: { [key: string]: any };
  path: string[];
  document: { [key: string]: any };
  type: { [key: string]: any };
}

export type CustomRuleCallback = (
  field: any,
  meta: IMeta
) => true | string | Promise<true | string>;

export interface IRuleType {
  required: () => IRuleType;
  uppercase: () => IRuleType;
  error: (msg?: string) => IRuleType;
  unique: () => IRuleType;
  custom: (cb: CustomRuleCallback) => IRuleType;
  min: (min: number) => IRuleType;
  max: (max: number) => IRuleType;
  length: (exactLength: number) => IRuleType;
  greaterThan: (gt: number) => IRuleType;
  uri: (options: { scheme: string[]; allowRelative: boolean }) => IRuleType;
  warning: (msg?: string) => IRuleType;
  regex: (
    regex: RegExp,
    options?: { name?: string; invert?: boolean }
  ) => IRuleType;
}

type Validation = (rule: IRuleType) => IRuleType | IRuleType[];

export interface ICommonFieldProps {
  name: string;
  type: string;
  title?: string;
  fieldset?: string;
  validation?: Validation;
  description?: string | JSX.Element;
  hidden?: (context: IMeta) => boolean;
  readOnly?: boolean;
  options?: {
    isHighlighted?: boolean; // is only available on fields within an image
    hide?: (context: IMeta) => boolean | Promise<boolean>;
  };
  icon?: ReactComponentLike; // is only available for elements of which include a block
  inputComponent?:
  | JSX.Element
  | React.ReactNode
  | React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLInputElement | HTMLDivElement>
  >;
}

export type StringField = ICommonFieldProps & {
  initialValue: string;
  type: 'string' | 'url';
  options?: {
    list: { title: string; value: string;[key: string]: string }[] | string[];
    layout?: string;
  };
  translatable?: boolean;
  searchable?: boolean;
};

export type BooleanField = ICommonFieldProps & {
  initialValue: boolean;
  type: 'boolean';
  options?: {
    layout?: 'switch' | 'checkbox';
  };
};

type TextField = ICommonFieldProps & {
  type: 'text';
  rows: number;
  translatable?: boolean;
  searchable?: boolean;
};

export interface ISpan {
  _type: 'span';
  text: string;
}

export interface IBlockField {
  type: 'block';
  title?: never;
  fields?: never;
  name: string;
  styles: {
    title: string;
    value: string;
    blockEditor?: {
      render: ReactComponentLike;
    };
    icon?: ReactComponentLike;
  }[];
  children: (Field | ISpan)[];
}

type ArrayOf =
  | IObjectType
  | ReferenceField
  | ImageField
  | { type: string }
  | IBlockField;

export type ArrayField = ICommonFieldProps & {
  name: string;
  type: 'array';
  fields?: never;
  of: ArrayOf[];
  initialValue?: any[] | (() => any[]);
  translatable?: boolean;
  searchable?: boolean;
  options?: {
    layout?: string;
    editModal?: string;
    sortable?: boolean;
  };
};

export interface IFilterFunctionResult {
  filter: string;
  filterParams?: string;
  params?: any;
}

export type FilterFunction = (args: {
  document: { [key: string]: any };
  parentPath: string[];
  parent: any[] | any;
}) => IFilterFunctionResult;

type ReferenceField = ICommonFieldProps & {
  to: { type: string }[];
  weak?: boolean;
  options: {
    filter: string | FilterFunction;
    filterParams?: { [key: string]: string };
  };
};

type ImageField = ICommonFieldProps & {
  options?: {
    hotspot?: boolean;
  };
};

type ImagePositionField = ICommonFieldProps & {
  layout?: string;
  options?: {
    list: { title: string; value: string }[];
  };
};

export type SlugField = ICommonFieldProps & {
  type: 'slug';
  translatable: boolean;
  options?: {
    source?:
    | string
    | ((doc: IDocument | IObjectType) => string | Promise<string>);
    maxLength?: number;
    slugify?: (doc: IDocument | IObjectType) => string | Promise<string>;
    isUnique?: (slug: string, options: { document: any }) => Promise<boolean>;
  };
};

export type Field =
  | StringField
  | BooleanField
  | TextField
  | ArrayField
  | SlugField
  | ReferenceField
  | ImageField
  | ImagePositionField
  | IObjectType;

export interface IPreviewSelection {
  [key: string]: any;
}

export interface IPrepare {
  title?: string;
  subtitle?: string;
  media?: any;
}

export interface IPreview {
  select?: { [key: string]: string };
  prepare?: (selection: { [key: string]: any }) => {
    title?: string;
    subtitle?: string;
  };
  component?: (props: IPreviewProps) => ReactElement;
}

export interface IFieldset {
  name: string;
  title: string;
  options?: { collapsible: boolean; collapsed?: boolean; columns?: number };
}

export interface IObjectType {
  type: 'object' | 'image' | 'file' | 'block';
  title: string;
  name: string;
  fields: Field[];
  validation?: Validation;
  preview?: IPreview;
  fieldsets?: IFieldset[];
  description?: string;
  // this is a custom field to flag this field for translation when exporting
  translatable?: boolean;
  options?: {
    collapsible?: boolean;
    collapsed?: boolean;
    accept?: string;
    dateFormat?: 'YYYY-MM-DD';
    sources?: string[];
  };
  __experimental_search?: { weight: number; path: string }[];
  inputComponent?:
  | JSX.Element
  | React.ReactNode
  | React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLInputElement | HTMLDivElement>
  >
  | undefined;
  blockEditor?: {
    // icon: IconType;
  };
  marks?: {
    annotations?: {
      name: string;
      type: string;
      title: string;
    }[];
  };
}

type TDocumentType =
  | 'country'
  | 'localeIdentifier'
  | 'module'
  | 'muxVideoAsset'
  | 'page'
  | 'product'
  | 'productCategory'
  | 'productSubCategory'
  | 'redirect'
  | 'region'
  | 'rootPage'
  | 'translationFile'
  | 'videoSet';

export interface IDocument {
  type: 'document';
  name: TDocumentType;
  fields: Field[];
  title?: string;
  icon?: any;
  validation?: Validation;
  preview?: IPreview;
  fieldsets?: IFieldset[];
  initialValue?: { [key: string]: any }; // eslint-disable-line @typescript-eslint/no-explicit-any
  orderings?: {
    name: string;
    title: string;
    by: { field: string; direction: string }[];
  }[];
  __experimental_search?: { weight: number; path: string }[];
}

export interface IPreviewProps {
  [key: string]: any;
}
