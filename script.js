function PeopleController($scope) {
    $scope.people = [
        {name: "Zpril Burn", phone: "12345678", city: "Seoul"},
        {name: "HG Park", phone: "12345678", city: "Seoul"},
        {name: "John Doe", phone: "23467890", city: "New York"},
        {name: "SY Ahn", phone: "12345909", city: "Ansan"},
        
    ]

    $scope.Save = function() {
        $scope.people.push({name: $scope.newPerson.name, phone: $scope.newPerson.phone, city: $scope.newPerson.city});
        $scope.formVisibility = false;
    }

    $scope.ShowForm=function() {
        $scope.formVisibility=true;
    }
}

