Ext.define('BeginnerGoal.store.States',{
    extend: 'Ext.data.Store',
    alias: 'store.states',
    storeId: 'States',
    model: 'BeginnerGoal.model.State',
    data: [
        ['Raj', 'Rajasthan'],
        ['U.P.', 'Uttar Pradesh'],
        ['M.P.', 'Madhya Pradesh']
    ]
});

