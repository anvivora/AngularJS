  function OrderCtrl($scope){
  //define list services
  $scope.services = [
    {
      name: 'Web Design',
      price: 300,
      active: true
    },
    {
      name: 'Convert PSD to HTML',
      price: 200,
      active: true
    },
    {
      name: 'Convert HTML to Wordpress',
      price: 600,
      active: true
    },
    {
      name: 'SEO for website',
      price: 400,
      active: true
    }
  ];
  $scope.toggleActive = function (s){
    s.active = !s.active;
  }
  $scope.total = function() {
    var total = 0;
    angular.forEach($scope.services, function(s){
      if(s.active){
        total += s.price;
      }
    })
    return total;
  }
}