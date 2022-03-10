"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSeeder = void 0;
const TribeSeeder_1 = require("./TribeSeeder");
const seeder_1 = require("@mikro-orm/seeder");
class DatabaseSeeder extends seeder_1.Seeder {
    async run(em) {
        return this.call(em, [TribeSeeder_1.TribeSeeder]);
    }
}
exports.DatabaseSeeder = DatabaseSeeder;
//# sourceMappingURL=DatabaseSeeder.js.map