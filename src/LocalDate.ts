export class LocalDate {

  public constructor(
    public readonly year: number,
    public readonly month: number,
    public readonly day: number,
  ) {
  }

  public toString(): string {
    const year = this.year;
    const month = this.month.toString().padStart(2, '0');
    const day = this.day.toString().padStart(2, '0');
    return `${year}-${month}-${day}`
  }

  public static parse(value: string): LocalDate {
    if (value.match(/^\d+-\d?\d-\d?\d$/)) {
      const [year, month, day] = value.split("-").map(token => parseInt(token, 10));
      return new LocalDate(year, month, day);
    }
    throw new Error("Expected yyyy-MM-dd format string, but got: " + value);
  }

}