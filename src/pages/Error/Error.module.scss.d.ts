declare const classNames: {
  readonly error: "error";
  readonly title: "title";
  readonly subtitle: "subtitle";
  readonly text: "text";
  readonly link: "link";
  readonly "link-text": "link-text";
};
export default classNames;
export type ClassNames =
  | "error"
  | "title"
  | "subtitle"
  | "text"
  | "link"
  | "link-text";
