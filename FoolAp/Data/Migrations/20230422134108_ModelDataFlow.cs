using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FoolAp.Data.Migrations
{
    public partial class ModelDataFlow : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Expiration",
                table: "DeviceFlowCodes",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_DeviceFlowCodes_DeviceCode",
                table: "DeviceFlowCodes",
                column: "DeviceCode",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_DeviceFlowCodes_DeviceCode",
                table: "DeviceFlowCodes");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Expiration",
                table: "DeviceFlowCodes",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "TEXT");
        }
    }
}
