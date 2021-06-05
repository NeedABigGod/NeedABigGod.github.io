/// <reference types="@sveltejs/kit" />

declare module '*.md' {
  const value: class;
  export = value;
}