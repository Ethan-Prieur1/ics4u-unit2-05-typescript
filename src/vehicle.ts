/**
 * This class creates a stack
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-10-12
 */

class Vehicle { 
  readonly doorNumber: number
  private speed: number
  readonly maxSpeed: number
  private colour: string
  private licensePlate: string

  // getters
  public getVehicleColour(): string {
    return this.colour
  }

  public getLicensePlate(): string {
    return this.licensePlate
  }

  // methods
  public accelerate (accelerationPower: number, accelerationTime: number) {
        this.speed = (accelerationPower * accelerationTime) + this.speed
  }

  public break (breakPower: number, breakTime: number) {
        this.speed = this.speed - (breakPower * breakTime)
}
