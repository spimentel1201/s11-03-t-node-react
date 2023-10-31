import { AppointmentData } from "./appointmentData.model";

export interface PetData {
  _id: string;
  name: string;
  specie: string;
  sex: string;
  age: number;
  photo_url: string;
  clientId: string;
  appointments: AppointmentData[]
}
