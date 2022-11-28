import { Status } from "data/board/model";

interface ICard {
  id: number;
  duration: string;
  status: Status;
  title: string;
  color: string;
}
export type { ICard };
