const year = new Date()
class HumanDog {
    constructor(humanName, dogName, birthYear, breed) {
        this.humanName = humanName
        this.dogName = dogName
        this.birthYear = birthYear
        this.breed = breed
        this.events = []        
    }
    addevents(events) { // need to go into the Human --> DONE
        this.events.push(events)
    }
    attendevents(events) { // need to go into the Human --> DONE
        events.acceptedBy.push(this)
    }
    get human() {
        return `# ${this.dogName} --> ${this.humanName}`
    }
    get breedOf () {
        return `## ${this.dogName} is a ${this.breed}`
    }
    get age () {
        return `### ${this.dogName} is ${year.getFullYear() - this.birthYear} year old.`
    }
        
}
    module.exports = HumanDog;

    // giveReview(review) { // need to go into the Human
    //     review.gaveBy.push(this)
    //}
