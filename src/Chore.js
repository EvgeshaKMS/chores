import { makeAutoObservable, observable } from "mobx";

class Chore {
    chores = observable([])

    constructor() {
        makeAutoObservable(this)
    };

    addChore(chore) {
        this.chores.push(chore)
    };

    removeChore(id) {
        this.chores = this.chores.filter((p) => p.id !== id);
    };

    editChore(choreValues) {
        const choreItem = this.chores.find((chore) => chore.id === choreValues.id);
        if (choreItem) {
            choreItem.time = choreValues.time;
            choreItem.task = choreValues.task;
        }
    };
}

export default new Chore()