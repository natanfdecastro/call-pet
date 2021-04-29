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
      drillMembers: [primer_apellido, segundo_apellido, id]
    }
  },
  
  dimensions: {
    direccion_entrega: {
      sql: `direccion_entrega`,
      type: `string`
    },
    
    notificacion: {
      sql: `notificacion`,
      type: `boolean`
    },

    telefono: {
      sql: `telefono`,
      type: `number`
    },
    
    nombre: {
      sql: `nombre`,
      type: `string`
    },
    
    primer_apellido: {
      sql: `primer_apellido`,
      type: `string`
    },
    
    segundo_apellido: {
      sql: `segundo_apellido`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
      shown: true
    }
  },
  
  dataSource: `default`
});

