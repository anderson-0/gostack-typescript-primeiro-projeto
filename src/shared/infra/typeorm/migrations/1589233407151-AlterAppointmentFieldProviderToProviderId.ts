// import {
//   MigrationInterface,
//   QueryRunner,
//   TableColumn,
//   TableForeignKey,
// } from 'typeorm';

// export default class AlterAppointmentFieldProviderToProviderId1589233407151
//   implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     // Best Solution
//     await queryRunner.renameColumn('appointments', 'provider', 'provider_id');

//     // Old Solution
//     // await queryRunner.dropColumn('appointments', 'provider');
//     // await queryRunner.addColumn(
//     //   'appointments',
//     //   new TableColumn({ name: 'provider_id', type: 'uuid', isNullable: true }),
//     // );

//     await queryRunner.createForeignKey(
//       'appointments',
//       new TableForeignKey({
//         name: 'AppointmentProvider',
//         columnNames: ['provider_id'],
//         referencedColumnNames: ['id'],
//         referencedTableName: 'users',
//         onDelete: 'SET NULL',
//         onUpdate: 'CASCADE',
//       }),
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.dropForeignKey('appointments', 'AppointmentProvider');
//     await queryRunner.renameColumn('appointments', 'provider_id', 'provider');
//   }
// }
