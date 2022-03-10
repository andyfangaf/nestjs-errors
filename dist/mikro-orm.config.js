"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const { DATABASE_HOST, DATABASE_NAME, DATABASE_PORT, DATABASE_USER, DATABASE_PASS, } = process.env;
const config = {
    type: "postgresql",
    entities: ["./dist/src/**/*.entity.js"],
    entitiesTs: ["./src/**/*.entity.ts"],
    dbName: DATABASE_NAME,
    host: DATABASE_HOST,
    port: parseInt(DATABASE_PORT, 10),
    user: DATABASE_USER,
    password: DATABASE_PASS,
    seeder: {
        path: "./dist/seeders",
        pathTs: "./seeders",
        defaultSeeder: "DatabaseSeeder",
        glob: "!(*.d).{js,ts}",
        emit: "ts",
        fileName: (className) => className,
    },
};
exports.default = config;
//# sourceMappingURL=mikro-orm.config.js.map