import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Song {
  readonly id: string;
  readonly title?: string;
  readonly mp3?: string;
  readonly artist?: string;
  constructor(init: ModelInit<Song>);
  static copyOf(source: Song, mutator: (draft: MutableModel<Song>) => MutableModel<Song> | void): Song;
}