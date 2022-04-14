class Human {
    constructor(Name, WeightH) {
        this.name = Name
        this.gender = true
        this.weighth = WeightH
    }
    isMale () {
        this.gender = true
    }
    setGender (gender) {
        this.gender = gender
    }
    checkApple(Apple) {
        if ( Apple.weighta > 0) {
            console.log("Táo còn")
        }else {
            console.log("Táo hết")
        }
    }
    eat(Apple) {
        Apple.decrease()
    }

    say(message) {
        console.log(message)
    }
    getName() {
        return this.name;
    }
    setName (name) {
        this.name = name
    }
    getWeight () {
        return this.weight
    }
    setWeight (n) {
        this.weighth = n
    }
}
