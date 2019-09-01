Ext.define('BeginnerGoal.view.userprofle.UserProfileModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.userprofile',
    data: {
        userStore: null,
        currentUserStore: null,
    },
    formulas: {
        currentUserId: function (get) {
            var currentUserStore = get('currentUserStore'),
                currentUserId = null;
            if (currentUserStore != null) {
                currentUserId = currentUserStore.getUserId();
            }
            return currentUserId;
        },
        title: function (get) {
            var userData = get('userData'),
                title = null;
            if (userData != null) {
                title = 'User Profile for ' + userData.firstname + ' ' + userData.lastname;
            }
            return title;
        },
        userData: function (get) {
            var userStore = get('userStore'),
                currentUserId = get('currentUserId'),
                birthdate = null,
                userData = null;
            if (userStore != null && currentUserId != null) {
                userData = Ext.clone(userStore.getUser(currentUserId));
                birthdate = Ext.clone(userData.birthdate);
                userData.birthdate = Ext.Date.format(birthdate, 'd/m/Y');
            }
            return userData;
        }
    }
})