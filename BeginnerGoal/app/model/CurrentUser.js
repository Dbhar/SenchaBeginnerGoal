Ext.define('BeginnerGoal.model.CurrentUser', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'userId', type: 'string', unique: 'true' }
  ],
  proxy: {
    type: 'localstorage',
    id: 'currentUser'
  }
})