import axios from 'axios';
import { Photo } from '../models/photo';

export async function getData() {
  const result = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos/');
  if (result.status === 200) {
    const data = await result.json();
    return data as Photo[];
  }
}
