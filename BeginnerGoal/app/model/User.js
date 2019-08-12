Ext.define('BeginnerGoal.model.User', {
  extend: 'Ext.data.Model',
  idProperty: 'userId',
  fields: [
    { name: 'userId', type: 'string', unique: 'true' },
    { name: 'password', type: 'string' },
    { name: 'confirmpassword', type: 'string' },
    { name: 'firstname', type: 'string' },
    { name: 'lastname', type: 'string' },
    { name: 'company', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'state', type: 'string' }
  ]
})