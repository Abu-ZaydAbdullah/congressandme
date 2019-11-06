import { Fuse } from "fuse.js";

export class FuseWrapper {
  constructor(data, options) {
    this.data = data;
    this.options = options;
    this.fuse = new Fuse(data, options);
  }
}
