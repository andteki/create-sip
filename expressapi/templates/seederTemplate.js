
async function up({context: QueryInterface}) {
  await QueryInterface.bulkInsert('things', [

  ]);
}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('things', null, {});
}

export { up, down }
