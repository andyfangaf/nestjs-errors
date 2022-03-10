import { Injectable } from "@nestjs/common";

@Injectable()
export class ChatService {
  async findAll(memberId: string) {
    return "foo";
  }
}
