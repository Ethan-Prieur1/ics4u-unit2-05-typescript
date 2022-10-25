/**
 * This class creates a stack
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-10-12
 */

class Vehicle { 
  readonly doorAmount: number
  private speed: number = 0
  readonly maxSpeed: number
  private colour: string
  private licensePlate: string

  constructor(colour: string, licensePlate: string, doorAmount: number, maxSpeed: number) {
    this,colour
    this.licensePlate
    this.doorAmount
    this.maxSpeed
  }

  // getters
  public getColour(): string {
    return this.colour
  }

  public getLicensePlate(): string {
    return this.licensePlate
  }

  public getSpeed(): number {
    return this.licensePlate
  }

  public getMaxSpeed(): number {
    return this.maxSpeed
  }

  public getDoorAmount(): number {
    return this.doorAmount
  }

  // setters
        public set colour(theColour: string): void {
                this.colour = theColour
        }

        public set licensePlate(thePlate: string): void {
                this.licensePlate = thePlate
        }


  // methods
  public accelerate (accelerationPower: number, accelerationTime: number): void {
        this.speed = (accelerationPower * accelerationTime) + this.speed
        if (speed > maxSpeed) {
            speed = maxSpeed
        }
  }

  public break (breakPower: number, breakTime: number) {
        this.speed = this.speed - (breakPower * breakTime)
        if (speed < 0) {
            speed = 0
}
  }

  public status (): void {
    console.log(
      `       --> Speed: ${this.speed}
        --> MaxSpeed: ${this.maxspeed}
        --> Number of doors: ${this.dooramount}
        --> License Plate: ${this.licenseplate}
        --> Colour: ${this.colour}`
}

export = Vehicle

