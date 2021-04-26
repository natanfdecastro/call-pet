cube(`Cliente`, {
  sql: `SELECT * FROM public.cliente`,
  
  joins: {
    Mascota: {
      relationship: `hasMany`,
      sql: `${Cliente}.id = ${Mascota}.id_cliente` 
    },
    Pedido: {
      relationship: `hasMany`,
      sql: `${Cliente}.id = ${Pedido}.id_cliente`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [primerApellido, segundoApellido, id]
    }
  },
  
  dimensions: {
    direccionEntrega: {
      sql: `direccion_entrega`,
      type: `string`
    },
    
    notificacion: {
      sql: `notificacion`,
      type: `string`
    },
    
    nombre: {
      sql: `nombre`,
      type: `string`
    },
    
    primerApellido: {
      sql: `primer_apellido`,
      type: `string`
    },
    
    segundoApellido: {
      sql: `segundo_apellido`,
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
