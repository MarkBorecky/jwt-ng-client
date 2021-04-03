import { Author } from './author';
import { Copyright } from './copyright';

export interface Book {
    id: number;
    title: string;
    author: Author;
    copyright: Copyright;
}
