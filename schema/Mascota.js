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
    especie: {
      sql: `especie`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    raza: {
      sql: `raza`,
      type: `string`
    },
    
    nombre: {
      sql: `nombre`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
