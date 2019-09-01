Ext.define('BeginnerGoal.view.register.RegisterModel',{
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.register',
    data: {
        user: {
            userId: '',
            password: '',
            confirmpassword: '',
            firstname: '',
            lastname: '',
            company: '',
            email: '',
            state: '',
            birthdate: null
        },
        
        store: null
    }
    
})