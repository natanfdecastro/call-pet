cube(`Alimento`, {
  sql: `SELECT * FROM public.alimento`,
  
  joins: {
    Proveedor: {
      relationship: `hasOne`,
      sql: `${Alimento}.id = ${Proveedor}.id_alimento`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    }
  },
  
  dimensions: {
    marca: {
      sql: `marca`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    }
  },
  
  dataSource: `default`
});
