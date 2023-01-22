import { Instance, types } from "mobx-state-tree";

const BookModel = types.model("BookModel", {
  id: types.number,
  title: types.string,
  author: types.maybe(types.string),
  description: types.maybe(types.string),
  copies: types.maybe(types.number),
  copiesAvailable: types.maybe(types.number),
  category: types.maybe(types.string),
  img: types.maybe(types.string),
});

export type BookModelInterface = Instance<typeof BookModel>;

export { BookModel };
