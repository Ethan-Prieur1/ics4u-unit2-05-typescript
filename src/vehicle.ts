/**
 * This class creates a stack
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-10-12
 */

class Vehicle { 
  readonly doorAmount: number
  private speed: number
  readonly maxSpeed: number
  private colour: string
  private licensePlate: string

  constructor() {
    console.log(`Number of doors: ${doorAmount}`)
  }

  constructor() {
    console.log(`Colour:  `)
  }

  // getters
  public getColour(): string {
    return this.colour
  }

  public getLicensePlate(): string {
    return this.licensePlate
  }

  // setters
        public set colour(theColour: string) {


  // methods
  public accelerate (accelerationPower: number, accelerationTime: number) {
        this.speed = (accelerationPower * accelerationTime) + this.speed
        if (speed => maxSpeed) {
            speed = maxSpeed
        }
  }

  public break (breakPower: number, breakTime: number) {
        this.speed = this.speed - (breakPower * breakTime)
        if (speed < 0) {
            speed = 0
}

export = Vehicle

