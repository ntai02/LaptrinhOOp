class FlashLamp {
    constructor(Battery) {
        this.status = true
        this.battery = Battery
    }
    setBattery (Battery) {
        this.battery = Battery
    }
    getBatteryInfo () {
        return this.battery
    }
    light() {
        this.battery.decreaseEnergy();
        console.log("den sang")
    }
    turnOn () {
        this.battery.decreaseEnergy();
        this.status = true
    }
    turnOff () {
        this.status = false
    }
}
