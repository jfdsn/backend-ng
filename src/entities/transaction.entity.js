"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
var typeorm_1 = require("typeorm");
var account_entity_1 = require("./account.entity");
var Transactions = /** @class */ (function () {
    function Transactions() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Transactions.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Transactions.prototype, "value", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return account_entity_1.Accounts; }, function (account) { return account.cashOut; }),
        __metadata("design:type", account_entity_1.Accounts)
    ], Transactions.prototype, "debitedAccount", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return account_entity_1.Accounts; }, function (account) { return account.cashIn; }),
        __metadata("design:type", account_entity_1.Accounts)
    ], Transactions.prototype, "creditedAccount", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Transactions.prototype, "created_at", void 0);
    Transactions = __decorate([
        (0, typeorm_1.Entity)()
    ], Transactions);
    return Transactions;
}());
exports.Transactions = Transactions;
;
