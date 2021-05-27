export interface ISong {
  id: string;
  name: string;
  author: string;
  uri: string; //uri.mp4
  source: string; //image
}

const likeSong: ISong[] = [
  {
    id: "0",
    name: "name 0",
    author: "author 0",
    uri: "https://drive.google.com/uc?export=download&id=1Zpsqmvfb2jkPYdwz_Noe7-qINNNqmE0f",
    source:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/011db4aa-c8de-4ad4-9acd-67968038944d/d8fdw6g-43479644-fb68-4870-847b-f098615d5b1a.png/v1/fill/w_745,h_1053,strp/doge__vector_edition__by_originalczechball_d8fdw6g-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1MyIsInBhdGgiOiJcL2ZcLzAxMWRiNGFhLWM4ZGUtNGFkNC05YWNkLTY3OTY4MDM4OTQ0ZFwvZDhmZHc2Zy00MzQ3OTY0NC1mYjY4LTQ4NzAtODQ3Yi1mMDk4NjE1ZDViMWEucG5nIiwid2lkdGgiOiI8PTc0NSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6BIObkuU65OzmFo7Mm80vyBxM36OOiWc6Wn7w-nhWM4",
  },
  {
    id: "1",
    name: "name 1",
    author: "author 1",
    uri: "https://drive.google.com/uc?export=download&id=1gcgloBcff8iIXbf43zVyjqgk-xSvjBD_",
    source:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/011db4aa-c8de-4ad4-9acd-67968038944d/d8fdw6g-43479644-fb68-4870-847b-f098615d5b1a.png/v1/fill/w_745,h_1053,strp/doge__vector_edition__by_originalczechball_d8fdw6g-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1MyIsInBhdGgiOiJcL2ZcLzAxMWRiNGFhLWM4ZGUtNGFkNC05YWNkLTY3OTY4MDM4OTQ0ZFwvZDhmZHc2Zy00MzQ3OTY0NC1mYjY4LTQ4NzAtODQ3Yi1mMDk4NjE1ZDViMWEucG5nIiwid2lkdGgiOiI8PTc0NSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6BIObkuU65OzmFo7Mm80vyBxM36OOiWc6Wn7w-nhWM4",
  },
  {
    id: "2",
    name: "name 2",
    author: "author 2",
    uri: "https://drive.google.com/uc?export=download&id=1Zpsqmvfb2jkPYdwz_Noe7-qINNNqmE0f",
    source:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/011db4aa-c8de-4ad4-9acd-67968038944d/d8fdw6g-43479644-fb68-4870-847b-f098615d5b1a.png/v1/fill/w_745,h_1053,strp/doge__vector_edition__by_originalczechball_d8fdw6g-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1MyIsInBhdGgiOiJcL2ZcLzAxMWRiNGFhLWM4ZGUtNGFkNC05YWNkLTY3OTY4MDM4OTQ0ZFwvZDhmZHc2Zy00MzQ3OTY0NC1mYjY4LTQ4NzAtODQ3Yi1mMDk4NjE1ZDViMWEucG5nIiwid2lkdGgiOiI8PTc0NSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6BIObkuU65OzmFo7Mm80vyBxM36OOiWc6Wn7w-nhWM4",
  },
  {
    id: "4",
    name: "name 4",
    author: "author 4",
    uri: "https://drive.google.com/uc?export=download&id=1Zpsqmvfb2jkPYdwz_Noe7-qINNNqmE0f",
    source:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/011db4aa-c8de-4ad4-9acd-67968038944d/d8fdw6g-43479644-fb68-4870-847b-f098615d5b1a.png/v1/fill/w_745,h_1053,strp/doge__vector_edition__by_originalczechball_d8fdw6g-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1MyIsInBhdGgiOiJcL2ZcLzAxMWRiNGFhLWM4ZGUtNGFkNC05YWNkLTY3OTY4MDM4OTQ0ZFwvZDhmZHc2Zy00MzQ3OTY0NC1mYjY4LTQ4NzAtODQ3Yi1mMDk4NjE1ZDViMWEucG5nIiwid2lkdGgiOiI8PTc0NSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6BIObkuU65OzmFo7Mm80vyBxM36OOiWc6Wn7w-nhWM4",
  },
  {
    id: "5",
    name: "name 5",
    author: "author 5",
    uri: "https://drive.google.com/uc?export=download&id=1Zpsqmvfb2jkPYdwz_Noe7-qINNNqmE0f",
    source:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/011db4aa-c8de-4ad4-9acd-67968038944d/d8fdw6g-43479644-fb68-4870-847b-f098615d5b1a.png/v1/fill/w_745,h_1053,strp/doge__vector_edition__by_originalczechball_d8fdw6g-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1MyIsInBhdGgiOiJcL2ZcLzAxMWRiNGFhLWM4ZGUtNGFkNC05YWNkLTY3OTY4MDM4OTQ0ZFwvZDhmZHc2Zy00MzQ3OTY0NC1mYjY4LTQ4NzAtODQ3Yi1mMDk4NjE1ZDViMWEucG5nIiwid2lkdGgiOiI8PTc0NSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6BIObkuU65OzmFo7Mm80vyBxM36OOiWc6Wn7w-nhWM4",
  },
  {
    id: "6",
    name: "name 6",
    author: "author 6",
    uri: "https://drive.google.com/uc?export=download&id=1Zpsqmvfb2jkPYdwz_Noe7-qINNNqmE0f",
    source:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/011db4aa-c8de-4ad4-9acd-67968038944d/d8fdw6g-43479644-fb68-4870-847b-f098615d5b1a.png/v1/fill/w_745,h_1053,strp/doge__vector_edition__by_originalczechball_d8fdw6g-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1MyIsInBhdGgiOiJcL2ZcLzAxMWRiNGFhLWM4ZGUtNGFkNC05YWNkLTY3OTY4MDM4OTQ0ZFwvZDhmZHc2Zy00MzQ3OTY0NC1mYjY4LTQ4NzAtODQ3Yi1mMDk4NjE1ZDViMWEucG5nIiwid2lkdGgiOiI8PTc0NSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6BIObkuU65OzmFo7Mm80vyBxM36OOiWc6Wn7w-nhWM4",
  },
];
export default likeSong;
