crApp.controller("notesController", ['$scope', notesController]);

function notesController($scope)
{
    $scope.profileId = "";
    $scope.modalShown = false;
    $scope.toggleModal = function (profileid) {
        $scope.modalShown = !$scope.modalShown;
        $scope.profileId = 1;
    };
}