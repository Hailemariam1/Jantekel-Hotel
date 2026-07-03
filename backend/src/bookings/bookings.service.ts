import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto, UpdateBookingStatusDto } from './dto/bookings.dto';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateBookingDto) {
    const room = await this.prisma.room.findUnique({
      where: { id: dto.roomId },
      include: { roomType: true },
    });

    if (!room) {
      throw new NotFoundException('Room not found');
    }

    if (room.status !== 'AVAILABLE') {
      throw new BadRequestException('Room is not available');
    }

    const checkInDate = new Date(dto.checkIn);
    const checkOutDate = new Date(dto.checkOut);
    const days = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24));
    
    if (days <= 0) {
      throw new BadRequestException('Check-out date must be after check-in date');
    }

    const totalAmount = Number(room.roomType.basePrice) * days;

    const booking = await this.prisma.booking.create({
      data: {
        userId,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        guests: dto.guests,
        children: dto.children || 0,
        specialRequests: dto.specialRequests,
        totalAmount,
        rooms: {
          create: [{ roomId: room.id }],
        },
      },
      include: { rooms: true },
    });

    return booking;
  }

  async findAll() {
    return this.prisma.booking.findMany({
      include: { user: true, rooms: { include: { room: true } } },
    });
  }

  async findUserBookings(userId: string) {
    return this.prisma.booking.findMany({
      where: { userId },
      include: { rooms: { include: { room: true } }, payment: true },
    });
  }

  async updateStatus(id: string, dto: UpdateBookingStatusDto) {
    return this.prisma.booking.update({
      where: { id },
      data: { status: dto.status },
    });
  }
}
