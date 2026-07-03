import { RoomStatus } from '@prisma/client';

export class CreateRoomDto {
  roomNumber!: string;
  floor!: number;
  roomTypeId!: string;
}

export class UpdateRoomDto {
  status?: RoomStatus;
  floor?: number;
}
