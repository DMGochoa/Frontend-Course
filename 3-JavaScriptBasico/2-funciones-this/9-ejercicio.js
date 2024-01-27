// Create powerpuffgirls object

function PowerpuffGirls (name, color, superpower) {
    this.name = name;
    this.color = color;
    this.superpower = superpower;
    this.isLeader = false;
    this.displayInfo = function () {
        console.log(`Powerpuff Girl Information:
        Name: ${this.name}
        Color: ${this.color}
        Superpower: ${this.superpower}
        ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}`)
    };
    this.setLeader = function () {
        this.isLeader = true;
        console.log(`${this.name} is the leader!`);
    }
}

const blossom = new PowerpuffGirls('Blossom', 'Pink', 'Ice Breath');
const buttercup = new PowerpuffGirls('Buttercup', 'Green', 'Super Strength');
const bubbles = new PowerpuffGirls('Bubbles', 'Blue', 'Supersonic Flight');

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

blossom.setLeader();

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();
