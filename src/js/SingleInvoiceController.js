/**
 * Created by Eric on 3/29/2015.
 */
(function (angular) {
    angular.module("CandyInvoice")
        .controller('SingleInvoiceController', ['$scope', '$http', function ($scope, $http) {
            $scope.isVisible = false;

            $scope.$on('showInvoice', function (event, invoiceId) {
                $scope.isVisible = true;
                $scope.invoice = {};
                var requestOptions = {
                    method: 'GET',
                    url: 'invoice.json'
                };
                $http(requestOptions)
                    .success(function (data, status) {
                        $scope.invoice = data;
                    }).error(function (data, status) {
                        alert("error\n " + status);
                    });
            });

        }]);
})(window.angular);