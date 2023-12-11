import { ValueTransformer } from "typeorm";
import { LocalDate } from "./LocalDate";

export class LocalDateTransformer implements ValueTransformer {

  public to(value: LocalDate): string {
    return value.toString();
  }

  from(value: string): LocalDate {
    return LocalDate.parse(value);
  }

}