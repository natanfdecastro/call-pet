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

     id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
      shown: true
    },

    marca: {
      sql: `marca`,
      type: `string`
    },

    presentacion: {
      sql: `presentacion`,
      type: `string`
    },
    
    consumo_diario: {
      sql: `consumo_diario`,
      type: `string`
    },

    id_mascota: {
      sql: `id_mascota`,
      type: `number`
    }
  },

  dataSource: `default`
});
