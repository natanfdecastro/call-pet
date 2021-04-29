cube(`Mascota`, {
  sql: `SELECT * FROM public.mascota`,
  
  joins: {
    Alimento: {
      relationship: `hasOne`,
      sql: `${Mascota}.id = ${Alimento}.id_mascota`
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

    nombre: {
      sql: `nombre`,
      type: `string`
    },

    especie: {
      sql: `especie`,
      type: `string`
    },
    
    raza: {
      sql: `raza`,
      type: `string`
    },
    
    id_cliente: {
      sql: `id_cliente`,
      type: `number`
    }
  },
  
  dataSource: `default`
});
