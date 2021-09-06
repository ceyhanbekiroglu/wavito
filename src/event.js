class Event {
  constructor(name, location, date, time) {
    this.name = name
    this.location = location
    this.date = date
    this.time = time
    this.acceptedBy = []
    this.rejectedBy = []
    this.participants = []
  }
}

module.exports = Event

// start  + end event must be defined
// participitans = [] must be added and pushed
