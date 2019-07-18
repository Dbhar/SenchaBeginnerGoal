Ext.define('BeginnerGoal.overrides.Vtype',{
    override: 'Ext.form.field.VTypes',
    confirmpassword: function(val, field) {
        var compareTo;
        if(field.initialPasswordField != null)
        {
            compareTo = field.up('form').down('#' + field.initialPasswordField).getValue();
            return val == compareTo;
        }
    },
    confirmpasswordText: 'Passwords do not match',
    password: function(val, field) {
        var regexMatch,
            confirmPasswordField;
        if(field.confirmPasswordField != null)
        {
            confirmPasswordField = field.up('form').down('#' + field.confirmPasswordField);
            if(confirmPasswordField.getValue().length > 0)
            {
                confirmPasswordField.validate();
             }
        }
        
        return new RegExp('((?=.*\\d)(?=.*[A-Z]))(\\S{8,})').test(val);    
    },
    passwordText: 'Password must contain at least 8 characters, one uppercase and one digit'
})