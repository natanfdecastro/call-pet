cube(`Pedido`, {
  sql: `SELECT * FROM public.pedido`,
  
  joins: {
    
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

    tiempo_aviso: {
      sql: `tiempo_aviso`,
      type: `number`, 
    },

    consumo_dias: {
      sql: `consumo_dias`,
      type: `string`,
    },
    
    fecha_compra: {
      sql: `fecha_compra`,
      type: `time`
    },
    
    fecha_vencimiento: {
      sql: `fecha_vencimiento`,
      type: `time`
    }
    
  },
  
  dataSource: `default`
});
