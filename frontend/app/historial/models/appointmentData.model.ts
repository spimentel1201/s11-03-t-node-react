import { VeterinarianData } from "./veterinarianData.model";

export interface AppointmentData {
    _id: string;
    date: string;
    start_time: string;
    end_time: string;
    reason: string;
    notes: string;
    petId: string;
    clientId: string;
    veterinarianId: VeterinarianData;
    isActive: boolean;
    __v: number;
  }