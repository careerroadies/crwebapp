
crApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/Login', { templateUrl: 'components/shared/views/dashboard1.html' })
        .when('/Home', {
            templateUrl: 'components/shared/views/home.html'
        }).
        when('/Register', { templateUrl: 'components/auth/views/register.html' })
        //.when('/Dashboard', { templateUrl: 'components/shared/views/dashboard.html' })
        .when('/Dashboard', { templateUrl: 'components/shared/views/DashBoard.html' })
        .when('/Profile/:userId/', { templateUrl: 'components/shared/views/basicprofile.html' })
        .when('/BasicProfile', { templateUrl: 'components/shared/views/basicprofile.html' })
        .when('/Notes', { templateUrl: 'components/notes/views/notes.html' })
        .when('/notesdashboard', { templateUrl: 'components/notes/views/dashboard.html' })
        .when('/viewnotes', { templateUrl: 'components/notes/views/viewnotes.html' })
        .when('/profile', { templateUrl: 'components/auth/views/profile.html' })
        .when('/viewprofile', { templateUrl: 'components/auth/views/viewprofile.html' })
       .otherwise({ redirectTo: '/Home' });
    //$locationProvider.html5Mode(true);
});

