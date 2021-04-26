cube(`Proveedor`, {
  sql: `SELECT * FROM public.proveedor`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    }
  },
  
  dimensions: {
    nombre: {
      sql: `nombre`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    correo: {
      sql: `correo`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
