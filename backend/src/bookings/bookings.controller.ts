import { Controller, Get, Post, Body, Param, Put, UseGuards, Request } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto, UpdateBookingStatusDto } from './dto/bookings.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard)
@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  create(@Request() req: any, @Body() dto: CreateBookingDto) {
    return this.bookingsService.create(req.user.id, dto);
  }

  @Get('my-bookings')
  findUserBookings(@Request() req: any) {
    return this.bookingsService.findUserBookings(req.user.id);
  }

  @UseGuards(RolesGuard)
  @Roles('ADMIN', 'MANAGER', 'RECEPTIONIST')
  @Get()
  findAll() {
    return this.bookingsService.findAll();
  }

  @UseGuards(RolesGuard)
  @Roles('ADMIN', 'MANAGER', 'RECEPTIONIST')
  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateBookingStatusDto) {
    return this.bookingsService.updateStatus(id, dto);
  }
}
