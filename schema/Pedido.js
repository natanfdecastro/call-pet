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
      primaryKey: true
    },
    
    fechaCompra: {
      sql: `fecha_compra`,
      type: `time`
    },
    
    fechaVencimiento: {
      sql: `fecha_vencimiento`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
