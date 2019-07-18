Ext.define('BeginnerGoal.model.CurrentUser', {
    extend: 'Ext.data.Model',
    idProperty: 'userId',
    fields: [
      { name: 'userId', type: 'string', unique: 'true' }
    ]
  })