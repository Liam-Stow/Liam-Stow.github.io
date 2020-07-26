class LadderManager extends GameObject {
    constructor(jamesRef) {
        super();
        this.jamesRef = jamesRef;
        this.ladders = [];
        this.ladderRate = 0.01; // ladderRate new ladders every loop
        this.ladderRateIncrease = 0.0005;
        this.currentLadderStep = 1;
        //this.addLadder();
    }

    addLadder() {
        this.ladders.push(new Ladder(this.jamesRef));
        this.ladderRate += this.ladderRateIncrease;
    }

    update() {
        // Check if new ladder needed
        this.currentLadderStep = min(this.currentLadderStep + this.ladderRate, 1); // maximum of one ladder per game loop
        if (this.currentLadderStep >= 1) {
            this.addLadder();
            this.currentLadderStep = 0;
        }

        // Update all the ladders
        this.ladders.forEach(ladder => {
            ladder.update();
        })

        // Delete finished ladders
        this.ladders = this.ladders.filter(ladder => !ladder.scheduleDelete);
    }

    render() {
        // Dont render the ladder manager, just its ladders
        this.ladders.forEach(ladder => {
            ladder.render();
        })
    } 
}