/**
 * Created by Eric on 3/29/2015.
 */
(function (angular) {
    angular.module("CandyInvoice")
        .controller('InvoicingController', ['$scope', '$http', function ($scope, $http) {
            $scope.invoices = [];
            $scope.sortType = 'Date';
            $scope.sortReverse = false;
            $scope.searchTerm = '';

            $scope.getInvoices = function () {
                var requestOptions = {
                    method: 'GET',
                    url: 'invoices.json'
                };
                $http(requestOptions)
                    .success(function (data, status) {
                        $scope.invoices = data;
                    }).error(function (data, status) {
                        alert("error\n" + status);
                    });
            };
            function sumTotal(attributeName) {
                var total = 0;
                $scope.invoices.forEach(function (element) {
                    total += parseFloat(element[attributeName]);
                });
                return total;
            }

            function sumTotalSelected(attributeName) {
                var total = 0;
                $scope.invoices.forEach(function (element) {
                    if (element.selected) {
                        total += parseFloat(element[attributeName]);
                    }
                });
                return total;
            }

            $scope.invoiceTotal = function () {
                return sumTotal('InvoiceAmount');
            };
            $scope.totalBalance = function () {
                return sumTotal('Balance');
            };
            $scope.totalSelected = function () {
                return sumTotalSelected('InvoiceAmount');
            }
            $scope.totalSelectedBalance = function () {
                return sumTotalSelected('Balance');
            }
            $scope.getDiscount = function (invoice) {
                return invoice.Balance * 0.015;
            };
            $scope.countCurrentlySelected = function () {
                var total = 0;
                $scope.invoices.forEach(function (element) {
                    total += element.selected ? 1 : 0;
                });
                return total;
            };
        }]);
})(window.angular);