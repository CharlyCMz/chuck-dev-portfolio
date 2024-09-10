import { Link } from "./link.model";

export interface Hobby {
  name: string;
  imgUrl: string;
  description: string;
  extra?: {
    subTitle: string;
    links: Link[];
  }
}
