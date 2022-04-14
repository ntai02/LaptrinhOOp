class SwitchButton {
    constructor(ElectricLamp) {
        this.status = true
        this.lamp = ElectricLamp
    }
    connectToLamp(ElectricLamp) {
        this.lamp = ElectricLamp
    }
    switchOff () {
        this.status = false;
        this.lamp.turnOff();
    }
    switchOn () {
        this.status = true
        this.lamp.turnOn()
    }
}