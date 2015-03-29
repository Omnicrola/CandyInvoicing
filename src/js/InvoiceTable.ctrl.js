/**
 * Created by Eric on 3/29/2015.
 */
(function (angular) {
    angular.module("CandyInvoice")
        .controller('InvoiceController', ['$scope', function ($scope) {
            $scope.invoices = [
                {
                    InvoiceId: '292CC',
                    Date: '02/03/2015',
                    Type: 'PICK',
                    InvoiceAmount: 92.28,
                    DueDate: '02/15/2015',
                    Balance: 92.28,
                    Discount: 0.92
                },
                {
                    InvoiceId: 'FJ7634',
                    Date: '02/03/2015',
                    Type: 'IMPORT',
                    InvoiceAmount: 924.28,
                    DueDate: '02/15/2015',
                    Balance: 0.0,
                    Discount: 0.0
                },
                {
                    InvoiceId: 'FJUE74',
                    Date: '04/03/2015',
                    Type: 'PICK',
                    InvoiceAmount: 952.28,
                    DueDate: '02/15/2015',
                    Balance: 952.28,
                    Discount: 0.0
                },
            ];
        }]);
})(window.angular);