export class EventModel {
  constructor(public name: String,
              public status: String,
              public date: Date,
              public description: String,
              public imgURL: String,
              public postDate: Date) {}
}
