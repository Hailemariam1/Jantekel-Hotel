export class CreateBookingDto {
  roomId!: string;
  checkIn!: string; // ISO Date String
  checkOut!: string; // ISO Date String
  guests!: number;
  children?: number;
  specialRequests?: string;
}

export class UpdateBookingStatusDto {
  status!: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED' | 'REFUNDED';
}
