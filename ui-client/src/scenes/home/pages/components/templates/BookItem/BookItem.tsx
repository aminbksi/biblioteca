import { BookModelInterface } from "core";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import * as styled from "./BookItem.styled";

interface PropsInterface {
  book: BookModelInterface | undefined;
}

const BookItem: FC<PropsInterface> = ({ book }) => {
  if (!book) {
    return null;
  }
  return (
    <styled.Container>
      <styled.BookImage src={book.img} />

      {book.title}
    </styled.Container>
  );
};

export default observer(BookItem);
